/**********************************
#MASONRY-GALLERY-FACTORY-FUNCTION

Info
[-] 	This factory function creates an object that has methods for
		setting up Masonry on a gallery. It's not intended to be used
		on its own, but rather to be added to another gallery object in
		order to use the Masonry layout (see image-gallery.js for an example).
[-] 	http://masonry.desandro.com/options.html

Notes
[-] 	Tiles: generic term for cards, thumbnails, etc. - whatever the
		elements are that we're laying out with masonry.
[1] 	Depends on a shared state object with all of the relevant settings
		and data.
**********************************/
var MasonryGallery = function(state){ /*[1]*/
	'use strict';
	
	var g = {};

	/**********************************
	Some setup before anything else happens
	
	Notes
	[-] 	Created this for elements that might need to be accessed before
			mgSetup is run.
	**********************************/
	g.mgPreSetup = function(){
		state.$loader = $('<div/>').addClass('wc-loader wc-medium-loader').text('Loading...');			
		state.$moreButton = $('<button>').addClass('wc-box-button wc-small wc-masonry-more-button').text(state.moreButtonText)
			.click(function(){
				g.mgHideMoreButton();
				g.mgAddTiles();
			});
	}

	/**********************************
	Masonry setup

	Notes
	[1] 	Check Globals.s.promises to see if the resources have already
			been requested.
	[2] 	If not, request them and save the promise to Globals.s.promises
	[3] 	Returns a promise, resolved after the resources are loaded
			and masonry is setup.
	**********************************/
	g.mgSetup = function(){
		state.types.push('MasonryGallery');
		if(!Globals.s.isIE || Globals.s.ieVersion > 9){
			var resourcesLoaded, promises;
			promises = $.grep(Globals.s.promises, function(p){ return p.name === 'MasonryResources'; });/*[1]*/
			if(promises.length === 0){ /*[2]*/
				var resources = [
					'../plugins/masonry/masonry.pkgd.min.js'
				];
				resourcesLoaded = Globals.getStuff(resources);
				var p = {
					name:'MasonryResources',
					promise:resourcesLoaded
				}
				Globals.s.promises.push(p);
			}
			else{
				resourcesLoaded = promises[0].promise;
			}
			return new Promise(function(resolve,reject){ /*[3]*/
				resourcesLoaded.then(function(){
					state.$box.masonry({
						itemSelector: state.itemClass,
						columnWidth: state.itemSizerClass,
						gutter:state.gutterClass,
						percentPosition:true
					});
					resolve();
				})
			})
		}	
		else{
			return g.mgSetup_ie();
		}
	}

	/**********************************
	Add tiles to the gallery

	Notes
	[-] 	This function adds groups of tiles to the gallery through the masonry API [5],
			based on the gallery's groupSize property.
	[1] 	Count = the total images that should be shown after this runs
	[2] 	Return a promise that resolves when all tiles are loaded and added to
			Masonry
	[3]		Before we can add tiles to Masonry, we need to wait for all of the images
			to load so it sizes and positions things correctly. For each image in the tile,
			run it through Globals.imageLoaded() to create a promise that resolves when the
			image is loaded.
	[4] 	...add those promises to imgPromises	
	[5] 	...and after all of the promises in imgPromises have resolved, add the tiles
			to Masonry.
	[6] 	If there are more tiles to display after this group, show the "Show More" button
	**********************************/
	g.mgAddTiles = function(){
		if(!Globals.s.isIE || Globals.s.ieVersion > 9){
			var count = ((state.loadedCount + state.groupSize) > state.tiles.length)?state.tiles.length:state.loadedCount + state.groupSize; /*[1]*/
			var $newTiles = $();
			var imgPromises = [];
			g.mgShowLoader('show');

			return new Promise(function(resolve,reject){ /*[2]*/
				for (var k = state.loadedCount; k < count; k++) {
					var tile = state.tiles[k];
					var $newTile = $(tile.markup).css({'opacity':'0'});
					$newTile.find('img').each(function(i){ /*[3]*/
						var p =	Globals.imageLoaded(this);
						p.then(function(){
							state.loadedCount++;
						});
						imgPromises.push(p); /*[4]*/
					})
					$newTiles = $newTiles.add($newTile);
					state.$box.append($newTile);
				}

				Promise.all(imgPromises) /*[5]*/
					.then(function(){
						g.mgHideLoader();
						state.$box.masonry('appended',$newTiles);
						if(state.tiles.length > state.loadedCount){
							g.mgShowMoreButton();/*[6]*/
						}
						resolve();
					})
					.catch(reject);
			});
		}
		else{
			return g.addTiles_ie();
		}
	}


	/**********************************
	IE9 Fallback setup

	Info
	[-] 	IE9 was having trouble with masonry, so we built this to just
			make a grid of static-sized images.
	**********************************/
	g.mgSetup_ie = function(){
		state.$component.addClass('wc-ie-fallback');
		return new Promise(function(resolve,reject){
			resolve();
		})
	}

	/**********************************
	IE9 Fallback method for adding images
	**********************************/
	g.addTiles_ie = function(){
		var count = ((state.loadedCount + state.groupSize) > state.tiles.length)?state.tiles.length:state.loadedCount + state.groupSize; /*[1]*/
		var $newTiles = $();
		var imgPromises = [];
		g.mgShowLoader('show');

		return new Promise(function(resolve,reject){ /*[2]*/
			for (var k = state.loadedCount; k < count; k++) {
				var tile = state.tiles[k];
				var $newTile = $(tile.markup);
				$newTile.find('img').each(function(i){ /*[3]*/
					var p =	Globals.imageLoaded(this);
					p.then(function(){
						state.loadedCount++;
					});
					imgPromises.push(p); /*[4]*/
				})
				$newTiles = $newTiles.add($newTile);
				state.$box.append($newTile);
			}

			Promise.all(imgPromises) /*[5]*/
				.then(function(){
					g.mgHideLoader();
					if(state.tiles.length > state.loadedCount){
						g.mgShowMoreButton();/*[6]*/
					}
					resolve();
				})
				.catch(reject);
		});
	}

	/**********************************
	Show the animated loader wheel
	**********************************/
	g.mgShowLoader = function(){
		if(!$.contains(state.$component[0],state.$loader[0])){
			state.$component.append(state.$loader);
		}
	}

	/**********************************
	Hide the animated loader wheel
	**********************************/
	g.mgHideLoader = function(){
		state.$loader.detach();
	}

	/**********************************
	Show the button for adding more tiles
	**********************************/
	g.mgShowMoreButton = function(){
		if(!$.contains(state.$component[0],state.$moreButton[0])){
			state.$component.append(state.$moreButton);
		}
	}

	/**********************************
	Hide the button for adding more tiles
	**********************************/
	g.mgHideMoreButton = function(){
		state.$moreButton.detach();
	}

	return g;
}



/**********************************
Check for masonry errors

Info
[-]		Created this to deal with an IE bug where masonry would sometimes yield overlapping
		images. Couldn't narrow down exactly what was causing the bug so I built this 
		workaround instead. It just measures the area of the gallery's .wc-image-gallery-box
		and adds up the area of all the images and makes sure it's big enough. If not it
		runs masonry again to fix the layout. Not sure if we still need this or not, leaving it 
		here in case we need to add it back.

Notes
[-] 	This needs to be added to the state object columns : Math.round(g.$box.width() / g.thumbnailWidth)
[1] 	Calculate the column width, doing it this way so we don't have to worry
		about horizontal gutters
[2] 	Vertical margin
[3]  	Include an extra vertical margin when calculating the area to account for the
		top margin.
**********************************/
// function masonryCheck(g){
// 	var box = {
// 		h:g.$box.height(),
// 		w:g.$box.width(),
// 		area:(g.$box.height() * g.$box.width())
// 	}
// 	var cw = (box.w/g.columns); /*[1]*/
// 	var vm = parseInt(g.$box.find('.wc-masonry-thumbnail-sizer').first().css('margin-bottom'));/*[2]*/
// 	var imagesHeight = 0;
// 	g.$box.find('.wc-ig-thumbnail img').each(function(){
// 		imagesHeight += $(this).height() + vm;
// 	});
// 	var neededArea = (imagesHeight + vm) * cw; /*[3]*/
// 	if(neededArea > box.area){
// 		log('Image Gallery Error - looks like some images are overlapping, refreshing the layout');
// 		log('neededArea: ' + neededArea);
// 		g.$box.masonry();
// 	}
// }