/**********************************
#VIDEO-GALLERY-FACTORY-FUNCTION

Info
[-] 	This factory function creates Video Gallery objects. 
[-] 	The videos in the gallery should all have their own Video
		objects, but those aren't managed or tracked here. This is
		just the code necessary to setup the video gallery.
[-] 	Example Usage:
			var myVideoGallery = VideoGallery({
				$element:$('#my-fancy-video-gallery-component') // The video gallery component element
			});
			myVideoGallery.setup();

Notes
[1] 	The object that's being returned.
**********************************/
function VideoGallery(params){
	'use strict';

	var o = {}; /*[1]*/

	o.state = {
		$element:params.$element,
		expandable:WcFun.toBool(params.$element.data('expandable')),
		$videoList:params.$element.find('.wc-video-list').first(),
		$videos:params.$element.find('.wc-video-component'),
		id:params.$element.attr('id'),
		colmns:undefined,
		openHeight:0,
		collapseHeight:0
	};

	/**********************************
	Measure the Galleries

	Notes
	[1]		Need to give it a static height when open for the CSS transition to work.
	[2] 	Figure out how many columns of videos are in a row
	[3] 	When the gallery is collapsed, we want one row to be visible, so we
			set the collapsed height to be the height of the first row. To get that
			we find the tallest video in the first row.
	[4] 	Compensating for the dropshadow - We need to make sure the cards' dropshadows aren't
			cut off, but we can't use "overflow:visible" because it would show the hidden cards
			(and getting the timing right to apply it with JS when it's open would be a pain), so
			we give wc-video-list some bottom padding in the css which takes care of the problem when
			it's expanded, but not when it's collapsed so we add some extra height for that.
	[5] 	Checking to see if there's more than one row of videos, multiplying by 1.2
			here just to give a bit of a buffer.
	[6] 	Only show the "more videos..." button if there's more than one row of videos.
	**********************************/	
	o.setup = function(){
		if(o.state.expandable){
			o.state.$element.addClass('wc-collapsed');
			o.state.openHeight = o.state.$videoList[0].scrollHeight; /*[1]*/
			o.state.columns = Math.floor(o.state.$videoList.outerWidth()/o.state.$videos.first().outerWidth()); /*[2]*/
			for (var k = 0; k < o.state.columns; k++) {
				o.state.collapseHeight = ($(o.state.$videos[k]).outerHeight() > o.state.collapseHeight)?$(o.state.$videos[k]).outerHeight():o.state.collapseHeight; /*[3]*/
			}
			o.state.collapseHeight += 24; /*[4]*/
			var cssString = '#' + o.state.id + ' .wc-video-list{height:'+o.state.openHeight+'px;}' + '#' + o.state.id + '.wc-collapsed .wc-video-list{height:'+o.state.collapseHeight+'px;}'
			Globals.addCSS(cssString);
			if(o.state.openHeight > (1.2 * o.state.collapseHeight)){ /*[5]*/
				o.state.$element.find('.wc-collapse-button').first().removeClass('wc-hidden'); /*[6]*/
			}
		}
		o.state.$element.removeClass('wc-not-ready');
	}

	return o;
}