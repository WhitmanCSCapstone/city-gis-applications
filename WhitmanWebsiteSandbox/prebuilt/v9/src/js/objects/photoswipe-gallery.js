/**********************************
#PHOTOSWIPE-GALLERY-FACTORY-FUNCTION

Info
[-] 	This factory function creates an object that has methods for
		setting up PhotoSwipe on a gallery. It's not intended to be used
		on its own, but rather to be added to another gallery object in
		order to use the PhotoSwipe lightbox layout (see image-gallery.js
		for an example).
[-] 	http://photoswipe.com/

Notes
[1] 	Depends on a shared state object with all of the relevant settings
		and data.
**********************************/
var PhotoSwipeGallery = function(state){ /*[1]*/
	'use strict';

	var g = {};

	/**********************************
	PhotoSwipe setup

	Notes
	[1] 	Check Globals.s.promises to see if the resources have already
			been requested.
	[2] 	If not, request them and save the promise to Globals.s.promises
	[3] 	Returns a promise, resolved after the resources are loaded
			and PhotoSwipe is setup.
	[4] 	The markup for all of photoswipe's controls when the slideshow is open. 
	[5] 	Leaving all of the controls in there and toggling them on/off with the 
			options in the openPSGallery() method
	[6] 	Photoswipe needs an array of all the images' paths, dimensions and
			captions.
	**********************************/
	g.psSetup = function(){
		state.types.push('PhotoSwipeGallery');
		var resourcesLoaded, promises;
		promises = $.grep(Globals.s.promises, function(p){ return p.name === 'PhotoSwipeResources'; });/*[1]*/
		if(promises.length === 0){/*[2]*/
			var resources = [
				'../plugins/photoswipe/photoswipe.min.js',
				'../plugins/photoswipe/photoswipe-ui-default.js',
				'../plugins/photoswipe/photoswipe.css', 
				'../plugins/photoswipe/default-skin/default-skin.css'
			];
			resourcesLoaded = Globals.getStuff(resources);
			var p = {
				name:'PhotoSwipeResources',
				promise:resourcesLoaded
			}
			Globals.s.promises.push(p);
		}
		else{
			resourcesLoaded = promises[0].promise;
		}
		return new Promise(function(resolve,reject){ /*[3]*/
			resourcesLoaded.then(function(){
				if(!WcFun.nullIfEmpty(state.psControlsMarkup)){
					state.psControlsMarkup = /*[4]*/
						'<div class="pswp wc-pswp-box" tabindex="-1" role="dialog" aria-hidden="true" id="'+state.id+'_pswp">'+
							'<div class="pswp__bg"></div>'+ //background of PhotoSwipe.
							'<div class="pswp__scroll-wrap">'+
								'<div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div>'+ //Container that holds slides. Don't modify these 3 pswp__item elements
								'<div class="pswp__ui pswp__ui--hidden">' + //Default interface on top of sliding area
									'<div class="pswp__top-bar">'+ //begin controls
										'<div class="pswp__counter"></div>'+
										'<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>'+
										'<button class="pswp__button pswp__button--share" title="Share"></button>'+
										'<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>'+
										'<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>'+
										'<div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div>'+ //preloader
									'</div>'+//end controls
									'<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div> </div>'+
									'<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>'+
									'<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>'+
									'<div class="pswp__caption"><div class="pswp__caption__center"></div></div>'+
								'</div>'+
							'</div>'+
						'</div>';
				}
				state.psControls = $(state.psControlsMarkup)[0];
				state.$component.append(state.psControls); /*[5]*/
				state.psArray = [];
				if (state.psContent === 'images' || !WcFun.nullIfEmpty(state.psContent)){
					state.tiles.forEach(function(image){
						state.psArray.push({ /*[6]*/
							src: image.imageUrl,
							w: image.imageMediaMetadata.width,
							h: image.imageMediaMetadata.height,
							title: image.description
						});
					})
				}
				else if(state.psContent === 'html'){
					state.tiles.forEach(function(tile){
						state.psArray.push({
							html:tile.lightBoxMarkup
						})
					})
				}
				g.addBindings();
				resolve();
			});
		});
	}

	/**********************************
	Add bindings for opening PhotoSwipe
	**********************************/
	g.addBindings = function(){
		state.$box.on('click',state.lightboxButton,function(e){
			e.preventDefault();
			g.openPSGallery($(this).data('wc-item-index'));
		});
	}

	/**********************************
	Open the PhotowSwipe gallery

	Notes
	[1] 	For some reason PhotoSwipe needs to be re-initialized each time
			it's opened.
	**********************************/
	g.openPSGallery = function(i){ 
		var options = {
			index: i,
			bgOpacity: .9,
			shareEl: false,
			fullscreenEl: false,
			captionEl:state.captions,
			zoomEl: false,
			loop:false,
			closeOnScroll:false
		};
		var psGallery = new PhotoSwipe(state.psControls, PhotoSwipeUI_Default, state.psArray, options);/*[1]*/
		psGallery.init();
	}

	return g;
}