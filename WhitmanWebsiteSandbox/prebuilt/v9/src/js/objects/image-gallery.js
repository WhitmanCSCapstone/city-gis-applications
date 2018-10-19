/**********************************
#IMAGE-GALLERY-FACTORY-FUNCTION

Info
[-] 	This factory function creates Image Gallery objects that get their
		data from Google Drive, use Masonry for layout, and PhotoSwipe for
		a lightbox.

Notes
[1] 	The gallery object we're creating
**********************************/
var ImageGallery = function(params,$e){
	'use strict';

	var g = {}; /*[1]*/

	/**********************************
	Shared state object with all of the gallery object's data

	Notes
	[1] 	The box where the images go
	[2] 	The data we're going to get from google
	[3] 	Tiles: generic term for whatever the elements are that we're
			laying out with masonry (in this case thumbnails)
	[4] 	The number of images to show at a time, this number of new images
			is added when addImages() is run
	**********************************/
	g.state = {
 		types:['ImageGallery'],
		$component:$e,
		$box:$e.find('.wc-masonry-gallery-box').first(), /*[1]*/
		id:$e.attr('id'),
		params: params,
		googleAPIKey:params.googleAPIKey,
		folderID: params.folderID,
		data: [], /*[2]*/
		tiles: [], /*[3]*/
		order: params.order.toUpperCase(),
		reverse: WcFun.toBool(params.reverseOrder),

		/**********************************
		Masonry Stuff
		**********************************/
		moreButtonText: 'Show More Images',
		groupSize: params.groupSize,/*[4]*/
		loadedCount: 0,
		itemClass: '.wc-mg-tile',
		itemSizerClass: '.wc-mg-tile-sizer',
		gutterClass: '.wc-mg-gutter-sizer',
		thumbnailWidth: $e.find('.wc-mg-tile-sizer').first().width(),

		/**********************************
		PhotoSwipe stuff
		**********************************/
		captions: WcFun.toBool(params.captions),
		lightboxButton:'.wc-ps-button',
		psContent:'images'
	};

	/**********************************
	Get the data from Google

	Notes
	[1] 	Get the data from google, once it's done setup the gallery
	[2] 	Default is EDITEDDATE
	[3] 	The thumbnail url comes back with =s220 on the end, if we strip that off
			we get the full image.
	[4] 	Using the API to add parameters to get the thumbnail size we want:
				w = width, h = height, s = longest dimension
				ex. h300 = 300px high, s220 = the longest dimension is 220px
	**********************************/
	g.getData = function(){
		var url = "https://www.googleapis.com/drive/v3/files?q='"+g.state.folderID+"'+in+parents&fields=files%2Ckind&key="+g.state.params.googleAPIKey+"&callback=?";
		return new Promise(function(resolve,reject){
			$.getJSON(url) /*[1]*/
				.done(function(data){
					if(g.state.order === 'FILENAME'){
						g.state.data = data.files.sort(function(a,b){
							var aFileName = a.originalFilename.toLowerCase();
							var bFileName = b.originalFilename.toLowerCase();
							return ((aFileName < bFileName)? -1 : ((aFileName > bFileName)? 1 :0))
						})

					}
					else if(g.state.order === 'RANDOM'){
						g.state.data = WcFun.shuffleArray(data.files);
					}
					else{ /*[2]*/
						g.state.data = data.files;
					}
					if(g.state.reverse){
						g.state.data = g.state.data.reverse();
					}
					for (var k = 0; k < g.state.data.length; k++) {
						var item = g.state.data[k];
						var tile = {};
						var sizeIndex = item.thumbnailLink.indexOf('=s'); /*[3]*/
						if(sizeIndex > 0){
							tile.imageUrl = item.thumbnailLink.substring(0,sizeIndex);
							tile.thumbUrl = tile.imageUrl + '=w' + g.state.thumbnailWidth; /*[4]*/
							tile.description = item.description;
							tile.imageMediaMetadata = item.imageMediaMetadata;
						}
						else{
							log('Image Gallery Error: there was a problem retrieving the image URL, looks like it\'s not formatted how we expected. Google\'s API may have changed?');
						}
						g.state.tiles.push(tile);
					}
					resolve();
				})
				.fail(function(error){
					reject(error);
				});
		});
	}

	/**********************************
	Build the tile markup
	**********************************/ 
	g.buildTiles = function(){
		for (var k = 0; k < g.state.tiles.length; k++) {
			var tile 	= 	g.state.tiles[k];
			tile.markup =	'<a href="${tile.imageUrl}" class="wc-mg-tile wc-ps-button wc-ig-tile" data-wc-item-index="${k}" >'+
								'<img src="${tile.thumbUrl}" alt="${tile.description}" />'+
							'</a>';
			tile.markup = tile.markup.template({tile:tile,k:k});
		}
	}

	/**********************************
	Merge the gallery object with a MasonryGallery object and a
	PhotoSwipeGallery object to get their functionality
	**********************************/
	return Object.assign(
		g,
		MasonryGallery(g.state),
		PhotoSwipeGallery(g.state)
	);
}