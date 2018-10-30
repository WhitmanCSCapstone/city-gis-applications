/**********************************
#VIDEO-FACTORY-FUNCTION

Info
[-] 	This factory function creates Video objects. We only use these for videos
		that we want to open in a modal window.
[-] 	Example Usage:
			var myVideo = Video({
				$element:$('#my-fancy-video-component'), // The video component element
				modal:s.modal // A modal object for playing the video
			});
			video.setup();

Notes
[1] 	The object that's being returned.
**********************************/
var Video = function(params){
	'use strict';

	var o = {}; /*[1]*/
	
	/**********************************
	Object State

	Notes
	[1] 	Actual resolution doesn't matter here, just using this for the aspect
			ratio that fitVids will use. We do need some value here though.
	[2] 	The video opens in a modal window that needs to be passed to it
			in params.
	**********************************/
	var d = params.$element.data();
	
	o.state = {
		type:d.videoType,
		title:d.videoTitle,
		$element:params.$element,
		dimensions:(d.dimensions !== undefined && d.dimensions.indexOf(',') > 0) ? d.dimensions.split(','):[560,315], /*[1]*/
		videoId:d.videoId,
		closedCaptions:WcFun.toBool(d.closedCaptions),
		modal:params.modal, /*[2]*/
		modalMarkup:undefined,
		url:undefined
	}


	/**********************************
	Setup

	Notes
	[1] 	Actual resolution doesn't matter here, just using this for the aspect
			ratio that fitVids will use. We do need some value here though.
	**********************************/ 
	o.setup = function(){
		switch(o.state.type){
			case 'youtube':
				o.state.url = 'https://www.youtube.com/embed/' + o.state.videoId + '?rel=0&showinfo=0&autoplay=1';
				if(o.state.closedCaptions){
				    o.state.url += "&cc_load_policy=1";
				}
				o.state.markup = '<iframe width="'+ o.state.dimensions[0]+'" height="'+o.state.dimensions[1]+'" src="'+o.state.url+'" style="border: none" allowfullscreen></iframe>';
				break;
			case 'vimeo':
				o.state.url = 'https://player.vimeo.com/video/' + o.state.videoId;
				o.state.markup = '<iframe src="'+o.state.url+'" width="'+o.state.dimensions[0]+'" height="'+o.state.dimensions[1]+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
				break;
			default:
				log('Video Error: don\'t recognize this video type - ' + o.state.videoType);
		}
		o.state.$element.click(function(e) {
			e.preventDefault();
			o.open();
		});
	}


	
	/**********************************
	Open the video

	Notes
	[1]		Need to trigger fitVids again because this wasn't in the DOM when it ran
			initially.
	**********************************/
	o.open = function(){
		o.state.modal.updateContent({
			ariaLabel:'Video Modal - ' + o.state.title, 
			content:o.state.markup
		});
		o.state.modal.state.$element.fitVids(); /*[1]*/
		o.state.modal.open();
	}

	return o;
}