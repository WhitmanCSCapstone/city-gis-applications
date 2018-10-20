/**********************************
#INSTAGRAM-GALLERY-CONTROL

Notes
[-] 	This is the module for managing our instagram galleries. Most of 
		the relevant code for how instagram galleries work is is in the instagram gallery
		factory function - objects/instagram-gallery.js. This module is primarily for
		finding them on a page and setting them up.
**********************************/
var InstagramGalleryControl = (function(){
	'use strict';

	var s = {
		galleryClass:'.wc-instagram-box',
		galleries:[]
	}

	function init(){
		findComponents();
		s.galleries.forEach(function(g){
			g.init();
		})
	}

	function findComponents(){
		$(s.galleryClass).each(function(){
			if(!$(this).attr('id')){
				$(this).attr('id','wc-instagram-gallery_auto_'+s.galleries.length);
			}
			var params = $(this).data('instagramParams');
			if(params){
				var g = InstagramGallery(params,$(this));
				s.galleries.push(g);
			}
		})
	}

	return {
		s:s,
		init:init
	}
})();