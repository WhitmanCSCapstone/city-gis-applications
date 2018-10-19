/**********************************
#VIDEO-GALLERY-CONTROL

Info
		This module manages video components and video gallery components on a page.

Notes
[1] 	We only care about videos that open in a modal window, we don't
		have any JS for embedded videos or video components that just
		link directly to the video's url.
**********************************/
var VideoControl = (function(){
	'use strict';

	var s = {
		videoClass:'.wc-modal-video', /*[1]*/
		galleryClass:'.wc-video-gallery-component',
		template:'',
		closeButtonClass:'',
		videos:[],
		galleries:[],
		modal:undefined
	};

	/**********************************
	Initialize the module

	Notes
	[1] 	Setup templates for special magazine articles (Example: whitman.edu/at-the-hub))
	[2] 	Default template
	[3] 	Encountered some problems with Safari where it was measuring things wrong, this
			seems to fix it.
	**********************************/
	function init(){
		if($('html').hasClass('wc-magazine-page') && $('html').hasClass('wc-white-modal')){ /*[1]*/
			s.closeButtonClass 	= 	'.wc-lightbox-close-button';
			s.template 			= 	'<div class="wc-video-modal-box modal-dialog wc-lightbox wc-magazine-lightbox">'+
										'<div class="wc-magazine-lightbox-topbar">'+
											'<button class="wc-lightbox-close-button" role="Close" aria-label="Close">'+
												'<svg viewBox="0 0 32 32">'+
													'<use xlink:href="${svgPath}#icon-menu-x"></use>'+
												'</svg>'+
											'</button>'+
										'</div>'+
										'${content}'+
									'</div>';
		}
		else{
			s.template = '<div class="wc-video-modal-box modal-dialog">${content}</div>'; /*[2]*/
		}

		findVideos();
		findGalleries();
		$(window).on('load',function(){ /*[3]*/
			if (s.videos.length > 0 ) {
				s.videos.forEach(function(v){
					v.setup();
				})
			}
			if (s.galleries.length > 0) {
				s.galleries.forEach(function(g){
					g.setup();
				})
			}
		});
	}

	/**********************************
	Find the videos on a page

	Notes
	[1] 	All videos on the page (including those in galleries) share 
			one modal - if it hasn't been created yet, make it.
	**********************************/
	function findVideos(){
		$(s.videoClass).each(function(i, e) {
			if(!s.modal){ /*[1]*/
				s.modal = Modal({
					template:s.template,
					id:'wc-videos',
					closeButton:s.closeButtonClass
				});
			}
			var video = Video({
				$element:$(e),
				modal:s.modal
			});
			s.videos.push(video);
		});
	}

	/**********************************
	Find the video galleries on the page
	**********************************/
	function findGalleries(){
		$(s.galleryClass).each(function(){
			var gallery = VideoGallery({
				$element:$(this)
			});
			s.galleries.push(gallery);
		});
	}

	return {
		init:init,
		s:s
	}
})();