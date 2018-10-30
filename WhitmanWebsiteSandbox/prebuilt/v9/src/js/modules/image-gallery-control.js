/**********************************
#IMAGE-GALLERY-CONTROL

Info
[-] 	This is the module for managing our image galleries. Most of 
		the relevant code for how image galleries work is is in
		objects/image-gallery.js, this is primarily for finding them on
		a page and setting them up.
**********************************/
var ImageGalleryControl = (function(){
	'use strict';

	/**********************************
	Settings
	**********************************/
	var s = {
		componentClass:'.wc-image-gallery-component',
		galleries:[]
	};

	/**********************************
	Initialize the module
	**********************************/
	function init(){
		findGalleries();
		s.galleries.forEach(function(g){
			g.mgPreSetup();
			g.mgShowLoader();
			g.getData().then(function(){
				g.buildTiles();
				return g.mgSetup();
			}).then(function(){
				return g.mgAddTiles();
			}).then(function(){
				return g.psSetup();
			}).catch(function(error){
				log('Image Gallery Error: error setting up the gallery ' + g.state.id);
				log(error);
			});
		})
	}

	/**********************************
	Find any galleries on the page and create objects for them
	**********************************/
	function findGalleries(){
		$(s.componentClass).each(function(){
			var params = $(this).data('igParams');
			if(params){
				params.googleAPIKey = Globals.s.apiKeys.GoogleDrive;
				var g = ImageGallery(params,$(this));
				s.galleries.push(g);
			}
		})
	}

	return {
		s:s,
		init:init
	}
})();