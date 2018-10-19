/**********************************
#CARD-GALLERY-FACTORY-FUNCTION

Info
[-] 	This factory function creates Card Gallery objects. It uses Bootstrap modals and
 		Masonry for its layout
[-] 	Tiles: generic term we're using in our galleries for cards, thumbnails,
		etc. - whatever is being laid out

Notes
[1] 	The gallery object we're creating
**********************************/
var CardGallery = function(params,$e){
	'use strict';
	
	var g = {}; /*[1]*/

	/**********************************
	Shared state object with all of the object's data.
	
	Notes
	[1] 	The box where the cards go
	[2] 	The cards data we're getting from the page
	[3] 	Tiles: generic term for whatever the elements are that we're
			laying out with masonry (in this case cards)
	[4] 	The number of cards to show at a time, this number of new images
			is added when addImages() is run
	**********************************/
	g.state = {
		types:['CardGallery'],
		$component:$e,
		$box:$e.find('.wc-masonry-gallery-box').first(),/*[1]*/
		id:$e.attr('id'),
		params: params,
		data: params.data,/*[2]*/
		tiles:[],/*[3]*/

		/**********************************
		Masonry Stuff
		**********************************/
		moreButtonText: 'Show More',
		groupSize: params.groupSize,/*[4]*/
		loadedCount: 0,
		itemClass: '.wc-card-link',
		itemSizerClass: '.wc-mg-tile-sizer',
		gutterClass: '.wc-mg-gutter-sizer',
		thumbnailWidth: $e.find('.wc-mg-tile-sizer').first().width(),

		/**********************************
		Modal Stuff
		**********************************/
		modalOpenButton:'.wc-bmg-button',
		modalCloseButton:'.wc-lightbox-close-button',
		modal:undefined
	};

	
	/**********************************
	Setup the card gallery

	Notes
	[1]		Create the gallery's modal
	[2] 	Add bindings for opening the cards in the modal
	**********************************/
	g.cgSetup = function(){
		g.state.modal = Modal({ /*[1]*/
			template: '<div class="wc-lightbox wc-card-lightbox modal-dialog" role="document">${content}</div>',
			id:g.state.id,
			content:'',
			closeButton:g.state.modalCloseButton
		});
		g.state.$box.on('click',g.state.modalOpenButton,function(e){ /*[2]*/
			e.preventDefault();
			var i = $(this).data('wc-item-index');
			g.state.modal.updateContent({
				ariaLabel: g.state.tiles[i].title,
				content: g.state.tiles[i].lightBoxMarkup,
				closeButton:g.state.modalCloseButton
			});
			g.state.modal.open();
		});
	}

	/**********************************
	Build the cards and modal/lightbox markup

	Notes
	 [1] If there's no link, make it a button and build the modal markup
	 [2] ...Otherwise make it a link
	**********************************/ 
	g.cgBuildTiles = function(){
		for (var k = 0; k < g.state.data.length; k++) {
			var item = g.state.data[k];
			var tile = {};
			tile.title = item.title;
			if(WcFun.nullIfEmpty(item.cardLink) === null){ /*[1]*/
				tile.imageInLightboxContent = WcFun.toBool(item.imageInBodyCopy)?
					'<div class="wc-card-lightbox-image-container">'+
						'<img src="${item.image}" class="wc-card-image" alt="${item.imageAltText}"></img>'+
					'</div>'
					:'';
				tile.markup =
					'<button class="wc-card-link wc-bmg-button wc-mg-tile" data-wc-item-index="${k}" >'+
						'<img src="${item.image}" class="wc-card-image" alt="${item.imageAltText}"/>'+
						'<div class="wc-card-text-box">'+
							'<span class="wc-card-title">${item.title}</span>'+
							'<span class="wc-card-subtitle">${item.subtitle}</span>'+
							'<span class="wc-card-author">${item.author}</span>'+
						'</div>'+
					'</button>';
				tile.markup = tile.markup.template({item:item,k:k});
				tile.lightBoxMarkup =
					'<div class="wc-card-lightbox-topbar">'+
						'<button class="wc-lightbox-close-button" aria-label="close">'+
							'<svg viewBox="0 0 32 32">'+
							'<use  xlink:href="'+Globals.s.svgFilePath+'#icon-menu-x"></use>'+
							'</svg>'+
						'</button>'+
					'</div>'+
					'<div class="wc-card-lightbox-content">'+
						tile.imageInLightboxContent +
						'<div class="wc-card-lightbox-text-container">'+
							'<h2 class="wc-card-title">${item.title}</h2>'+
							'<p class="wc-card-subtitle">${item.subtitle}</p>'+
							item.bodyCopy +
						'</div>' +
					'</div>';
				tile.lightBoxMarkup = tile.lightBoxMarkup.template({item:item,k:k});
			}
			else{ /*[2]*/
				tile.markup =
					'<a class="wc-card-link wc-bmg-link wc-mg-tile" href="${item.cardLink}" data-wc-item-index="${k}" >'+
						'<img src="${item.image}" class="wc-card-image" alt="${item.imageAltText}"/>'+
						'<div class="wc-card-text-box">'+
							'<span class="wc-card-title">${item.title}</span>'+
							'<span class="wc-card-subtitle">${item.subtitle}</span>'+
							'<span class="wc-card-author">${item.author}</span>'+
						'</div>'+
					'</a>';
				tile.markup = tile.markup.template({item:item,k:k});
			}
			g.state.tiles.push(tile);
		}
	}

	return Object.assign(
		g,
		MasonryGallery(g.state)
	);
}