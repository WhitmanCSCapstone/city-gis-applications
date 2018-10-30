/**********************************
#CARD-GALLERY-CONTROL

Info
[-] 	This is the module for managing our card galleries. Most of 
		the relevant code for how card galleries work is is in the card gallery 
		factory function - objects/card-gallery.js. This module is primarily for
		finding them on a page and setting them up.
**********************************/
var CardGalleryControl = (function(){
	'use strict';

	/**********************************
	Settings
	**********************************/
	var s = {
		componentClass:'.wc-card-gallery-component',
		galleries:[]
	};

	/**********************************
	Initialize the module

	Notes
	[1] 	The order of this setup process is important
	**********************************/
	function init(){
		findGalleries();
		s.galleries.forEach(function(g){ /*[1]*/
			g.mgPreSetup();
			g.cgBuildTiles();
			g.mgSetup().then(function(){
				return g.mgAddTiles();
			}).then(function(){
				return g.cgSetup();
			});
		})

	}

	/**********************************
	Find any galleries on the page and create objects for them
	**********************************/
	function findGalleries(){
		$(s.componentClass).each(function(){
			var params = $(this).data('cgParams');
			if(params){
				var g = CardGallery(params,$(this));
				s.galleries.push(g);
			}
		})
	}

	return {
		s:s,
		init:init
	}
})();