/*******************************
Map Control

Notes
[-] 	Terms
			Features: Generic term for all shapes and points and things.
			
			Places/Polygons: These are polygons for buildings and locations, etc.
			
			Points: Points are the markers that are only used when the map is zoomed out enough. They
				display on the google map like a marker, but they're not actually markers (I think), 
				so you can't use all of the marker class's methods/properties with them. Most of
				our points have a corresponding polygon/place associated with them that you see when
				you zoom in far enough.
[1] 	From js/map/map-styles.js
[2] 	The currently selected features, so when clearing the highlighted styles these will 
		keep them.
[3] 	The current selected feature itself (not just an ID). Right not just using this for editing
		polygons when you click on them, not used when you select one from the controls

**********************************/
var MapControl = (function($){
	'use strict';

	/**********************************
	Settings
	**********************************/
	var s = {
		map:null,
		placesGeoJson:null,
		pointsGeoJson:null,
		featureGeoJson:null,
		uniqueTags:null,
		imagesUrl:null,
		initCenter: undefined,
		currentCenter: undefined,
		mapTileBounds:null,
		initBounds:null,
		initZoom: 17,
		maxZoom:19,
		minZoom: 9,
		mapStyles:mapStyles, /*[1]*/
		mapTileFolder:'',
		generalStyles:{
			highlightStrokeWeight: 5,
		},
		buildingStyles:{
			strokeWeight: 0,
			fillOpacity: 0,
			highlightOpacity: 0,
			highlightStrokeColor: '#FFC72C',
			highlightStrokeOpacity: 1
		},
		outdoorStyles:{
			strokeWeight: 0,
			fillOpacity: 0,
			highlightOpacity: 0,
			highlightStrokeColor: '#FFC72C',
			highlightStrokeOpacity: 1
		},
		waterStyles:{
			strokeWeight: 0,
			fillOpacity: 0,
			highlightOpacity: 0,
			highlightStrokeColor: '#FFC72C',
			highlightStrokeOpacity: 1
		},
		mapBoxID:'wc-map-box',
		placesLayer:null,
		pointsLayer:null,
		additionalFeatureLayer:null,
		hoverID:null,
		highlightMarkers:[],
		selectedFeatureIDs:[], /*[2]*/
		selectedFeature:null, /*[3]*/
		isMobile:false,
		mapReady:false,
		positionMarker:null,
		controls:{
			mapControlsBox:$('#wc-map-controls'),
			slideTrack:'#wc-mc-slide-track',
			featuresList:[],
			featuresListLookup:{},
			placesDOMList:$('#wc-map-places-list'),
			categoriesList:[],
			categoriesDOMList:$('#wc-map-categories-list'),
			placesButton:$('#wc-map-places-button'),
			categoriesButton:$('#wc-map-categories-button'),
			toursButton:$('#wc-map-categories-button'),
			allDetailBoxes:$('.wc-mc-detail-box'),
			baseDetailBox:'#wc-mc-detail-box-base',
			hideButtonClass:'wc-mc-hide-button',
			baseZIndex:10,
			maxZ:10,
			notReady:0
		},
		messageBoxID:'#wc-map-message-box',
		letsEdit:false,
		controlMeasurements:null
	};

	/**********************************
	Initialize the module

	Notes
	[1] 	Check to see if the map is ready
	[2]  	If not subscribe to the ready event, then go to the url location
	[3] 	If the user has been clicking on things, hitting 'back' won't reload
			the page, so we subscribe to 'window.back-popstate'* so when when 
			that happens we know to show the correct place based on the url
			parameters.

	*See Globals.getUrlParameters()
	**********************************/
	function init(){
		if($('#wc-map').length > 0){
			var params = $('#wc-map').data('mapParams');
			console.log(params);
			var promise = Globals.addScript('https://maps.googleapis.com/maps/api/js?key='+Globals.s.apiKeys.GoogleMaps);
			promise.then(function(){
				if (!(Globals.s.isIE && Globals.s.ieVersion <10)) {
					$('html').addClass('wc-map-page');
					s.isMobile = !Globals.s.breakpointChecks.sm;
					s.placesGeoJson = dataCleanUp(params.places,'places');
					s.pointsGeoJson = params.points;
					s.featureGeoJson = params.additionalFeatures;
					var allTags = [];
					var index = 0;
					//Store tags in dictionary for later showing specific data
					for(var i = 0; i < s.featureGeoJson.features.length; i++) {
						for(var j = 0; j < s.featureGeoJson.features[i].properties.tags.length; j++) {
							allTags[index] = s.featureGeoJson.features[i].properties.tags[j];
							index++;
						}						
					}

					//Remove Duplicates from allTags
					function removeDups(tags) {
						let unique = {};
						tags.forEach(function(i) {
						  if(!unique[i]) {
							unique[i] = true;
						  }
						});
						return Object.keys(unique);
					}
					  
					s.uniqueTags = removeDups(allTags);

					s.imagesUrl = params.imagesUrl;
					s.mapTileFolder = params.mapTileFolder;
					s.initCenter = new google.maps.LatLng(params.center.lat,params.center.long);
					s.currentCenter = new google.maps.LatLng(params.center.lat,params.center.long);
					mapSetup();
					controlsSetup();
					if(s.mapReady){ /*[1]*/
						showUrlPlace();
					}
					else{ /*[2]*/
						$.subscribe('map.ready',function(){
							showUrlPlace();
						});
					}
					$.subscribe('window.back-popstate',function(){ /*[3]*/
						showUrlPlace();
					});
				}
			});
		}
	}

	/**********************************
	Setup the map
	**********************************/
	function mapSetup(){
		createMap();
		addFeatures();
		addTiles();
		addFeatureBindings();
	}

	/**********************************
	Clean up/format the data

	Notes
	[1]		Splitting string of tags into an array.
	[2] 	If tags isn't already an array, convert it to one.
	**********************************/
	function dataCleanUp(data,type){
		if(type == 'places'){
			for (var i = 0; i < data.features.length; i++) { /*[1]*/
				var feature = data.features[i];
				if(feature.properties.tags.constructor !== Array){/*[2]*/
					var tagsAarray = feature.properties.tags.split(',');
					feature.properties.tags = tagsAarray;
				}
			}
		}
		return data;
	}

	/**********************************
	Create the map
	**********************************/
	function createMap(){
		var mapOptions = {
			zoom: s.initZoom,
			minZoom: s.minZoom,
			maxZoom: s.maxZoom,
			center: s.initCenter,
			scrollwheel: true,
			draggable: true,
			overviewMapControl: true,
			zoomControl: true,
			mapTypeControlOptions: {
				mapTypeIds: []
			},
			streetViewControl:!s.isMobile,
			streetViewControlOptions:{
				position: google.maps.ControlPosition.LEFT_TOP
			},
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.SMALL,
				position: google.maps.ControlPosition.LEFT_CENTER
			},
			panControl: false
		};

		s.map = new google.maps.Map(document.getElementById(s.mapBoxID),mapOptions);
		google.maps.event.addListenerOnce(s.map, 'idle', function(){
			s.initBounds = s.map.getBounds();
			$.publish('map.ready');
		});

		/**********************************
		Style the map
		**********************************/
		s.map.set('styles', s.mapStyles);

		/**********************************
		Add zoom level listener - when zoom changes, hide/show makers and 
		places accordingly
		**********************************/
		s.map.addListener('zoom_changed',function(){
			//BOGUS BOOLEAN FOR TESTING
			// s.pointsLayer.setMap(s.map);
			// s.placesLayer.setMap(s.map);
			// s.additionalFeatureLayer.setMap(s.map);
			// var showTrees = true;
			// if (showTrees) {
			// 	s.pointsLayer.setMap(null);
			// 	s.placesLayer.setMap(null);
			// 	s.additionalFeatureLayer.setMap(s.map);
			// } else 
			if(s.map.getZoom() > 13) {
				s.pointsLayer.setMap(null);
				s.placesLayer.setMap(s.map);
			}
			else {
				s.pointsLayer.setMap(s.map);
				s.additionalFeatureLayer.setMap(null);
				s.placesLayer.setMap(null);
			}
		});
	}

	/**********************************
	Add the tiles
	**********************************/
	function addTiles(){
		s.mapTileBounds = new google.maps.LatLngBounds(
			new google.maps.LatLng(46.065704, -118.340604),
			new google.maps.LatLng(46.080511, -118.318437));
		var mapMinZoom = 13;
		var mapMaxZoom = 19;

		var maptiler = new google.maps.ImageMapType({
			getTileUrl: function(coord, zoom) { 
				var proj = s.map.getProjection();
				var z2 = Math.pow(2, zoom);
				var tileXSize = 256 / z2;
				var tileYSize = 256 / z2;
				var mapTileBounds = new google.maps.LatLngBounds(
					proj.fromPointToLatLng(new google.maps.Point(coord.x * tileXSize, (coord.y + 1) * tileYSize)),
					proj.fromPointToLatLng(new google.maps.Point((coord.x + 1) * tileXSize, coord.y * tileYSize))
				);
				var y = coord.y;
				var x = coord.x >= 0 ? coord.x : z2 + coord.x;
				if (s.mapTileBounds.intersects(mapTileBounds) && (mapMinZoom <= zoom) && (zoom <= mapMaxZoom)){
					return Globals.igxUrl(s.mapTileFolder,'/'+zoom + '/' + x + '/' + y + '.png');
				}
			},
			tileSize: new google.maps.Size(256, 256),
			isPng: true,
			opacity: 1.0
		});	
		s.map.overlayMapTypes.insertAt(0, maptiler);
	}

	/**********************************
	Add the features

	Notes
	[1] 	Initially, add the polygons to the map but not the points. Then use
			checkZoom to switch that if you zoom out enough.
	**********************************/
	function addFeatures(){
		s.placesLayer = new google.maps.Data();
		s.placesLayer.addGeoJson(s.placesGeoJson);
		s.placesLayer.setMap(s.map);/*[1]*/
		s.pointsLayer = new google.maps.Data();
		s.pointsLayer.addGeoJson(s.pointsGeoJson);
		// s.pointsLayer.setMap(s.map);
		s.additionalFeatureLayer = new google.maps.Data();
		s.additionalFeatureLayer.addGeoJson(s.featureGeoJson);

		
		/**********************************
		Style the polygons

		Notes
		[1] 	Just some cumbersome math to get the stroke weight to adjust as you zoom
				in and out.
		[2] 	It looks like this also acts as a listener, so whenever a property of
				a feature is changed, this runs again.
		[3]		Used for editing shapes, see the letsEdit() function
		**********************************/
		s.placesLayer.setStyle(function(feature){ /*[2]*/
			var dynamicStrokeWeight = ((s.map.getZoom() - 13 )* 2)-(8-s.generalStyles.highlightStrokeWeight);/*[1]*/
			dynamicStrokeWeight = (dynamicStrokeWeight<2)?2:dynamicStrokeWeight;

			var styles = {};
			if(feature.getProperty('objectType').toUpperCase() == 'BUILDING'){
				styles = jQuery.extend({},s.buildingStyles);
			}
			else if(feature.getProperty('objectType').toUpperCase() == 'OUTDOOR'){
				styles = jQuery.extend({},s.outdoorStyles);
			}
			else if(feature.getProperty('objectType').toUpperCase() == 'WATER'){
				styles = jQuery.extend({},s.waterStyles);
			}
			if(feature.getProperty('highlighted')){
				styles.fillColor 		= styles.highlightColor;
				styles.fillOpacity 		= styles.highlightOpacity;
				styles.strokeWeight 	= dynamicStrokeWeight;
				styles.strokeColor 		= styles.highlightStrokeColor;
				styles.strokeOpacity 	= styles.highlightStrokeOpacity;
				if(s.letsEdit){
					styles.draggable = true; /*[3]*/
					styles.editable = true;
				}
				else{
					styles.draggable = false;
					styles.editable = false;
				}
			}
			return {
				fillColor: styles.fillColor,
				strokeColor: styles.strokeColor, 
				fillOpacity: styles.fillOpacity,
				strokeWeight: styles.strokeWeight,
				draggable: styles.draggable,
				editable: styles.editable,
				strokeOpacity: styles.strokeOpacity
			};
		});
	}

	/**********************************
	Add hover and click bindings

	Notes
	[1] 	If you enter a feature, clear all highlights and then highlight it.
	**********************************/
	function addFeatureBindings(){
		if(s.controls.notReady < 0){
			s.controls.notReady = 0;
		}

		/**********************************
		Places - Hover
		**********************************/
		s.placesLayer.addListener('mouseover',function(event){/*[1]*/
			var feature = event.feature;
			clearHighlights();
			var id = feature.getProperty('id');
			s.hoverID	= id;
			s.placesLayer.revertStyle();
			feature.setProperty('highlighted',true);
		});
		s.placesLayer.addListener('mouseout',function(){
			if(s.hoverID !== null){
				clearHighlights();
				s.placesLayer.revertStyle();
				s.pointsLayer.revertStyle();
				s.additionalFeatureLayer.revertStyle();
				s.hoverID = null;
			}
		});

		/**********************************
		Places - Click
		**********************************/
		s.placesLayer.addListener('click',function(event){
			showPlace(event.feature.getProperty('id'));
			s.selectedFeature = event.feature;
		});


		/**********************************
		Points - Hover
		**********************************/
		s.pointsLayer.addListener('mouseover',function(event){
			console.log("Hover");
			var id = event.feature.getProperty('id');
			s.hoverID	= id;
		});

		/**********************************
		Points - Click
		**********************************/
		s.pointsLayer.addListener('click',function(event){
			var feature 	= event.feature;
			var polygonId	= feature.getProperty('polygonId');
			showPlace(polygonId,'boxB','boxA');
		});

	}

	/**********************************
	Clear highlights

	Notes
	[1] 	If it's not selected, clear it.
	**********************************/
	function clearHighlights(){
		s.placesLayer.forEach(function(feature){
			if (s.selectedFeatureIDs.indexOf(feature.getProperty('id')) == -1){ /*[1]*/
				feature.setProperty('highlighted',false);
			}
		});
		clearMarkers();
	}


	/**********************************
	Clear selections
	**********************************/
	function clearSelection(){
		s.selectedFeatureIDs = [];
		clearHighlights();
	}


	/**********************************
	Focus on something

	Notes
	[1]			If it's within the current map's bounds and you're not zoomed out, then pan to it.
	[2]	 		If its within the initial bounds, the initial zoom level is probably fine, so
				just pan to it and use that.
	[3] 		If it's way out there, shift the bounds so that it contains the point as well as
				the center of campus. (but not for mobile)
	[4]			If it's a group, don't use a zoom that's closer than the initial zoom
	**********************************/
	function focusMap(type,id,tag){
		clearSelection();
		if (type == 'Polygon'){
			s.placesLayer.forEach(function(feature){
				if (feature.getProperty('id') == id){
					s.selectedFeatureIDs.push(id);
					feature.setProperty('highlighted',true);
					var position = getPolyCenter(feature.getGeometry());
					if (s.map.getBounds().contains(position) && s.map.getZoom() >= s.initZoom){/*[1]*/
						s.map.panTo(position);
						s.currentCenter = s.map.getCenter();
					}
					else if(s.initBounds.contains(position) || s.isMobile){/*[2]*/
						s.map.panTo(position);
						s.currentCenter = s.map.getCenter();
						s.map.setZoom(s.initZoom);
					}
					else{/*[3]*/
						var tempBounds = new google.maps.LatLngBounds();
						tempBounds.extend(position);
						tempBounds.extend(s.initCenter);
						s.map.fitBounds(tempBounds);
						s.map.panTo(position);
						s.currentCenter = s.map.getCenter();
					}
				}
			});
		}
		else if (type == 'Group'){
			var tempBounds = new google.maps.LatLngBounds();
			s.placesLayer.forEach(function(feature){
				if(feature.getProperty('tags').indexOf(tag) !== -1){
					var position = getPolyCenter(feature.getGeometry());
					feature.setProperty('highlighted',true);
					tempBounds.extend(position);
					s.selectedFeatureIDs.push(feature.getProperty('id'));
				}
			});
			s.map.fitBounds(tempBounds);
			if(s.map.getZoom() > s.initZoom){s.map.setZoom(s.initZoom); } /*[4]*/
			s.currentCenter = s.map.getCenter();
		}
		else if (type === 'additionalFeatures') {
			console.log('additionalFeatures');
			s.map.setZoom(s.initZoom);
			s.currentCenter = s.map.getCenter();
		}
		else if (type == 'additionalFeature') {
			console.log("additionalFeature");
			console.log("ID", id);
			s.additionalFeatureLayer.forEach(function(feature){
				if (feature.getProperty('id') === id){
					var geometry = feature.getGeometry().get();
					s.map.panTo(geometry);
					s.map.setZoom(s.initZoom);
				}
			});
		}
	}

	/**********************************
	Add a marker
	**********************************/
	function addMarker(position){
		var marker = new google.maps.Marker({
			position: position,
			map: s.map,
			icon:Globals.igxUrl(s.imagesUrl,'map/icon-map-pin.png')
		});
		s.highlightMarkers.push(marker);
	}

	/**********************************
	Clear Markers
	**********************************/
	function clearMarkers(){
		for (var i = 0; i < s.highlightMarkers.length; i++) {
			s.highlightMarkers[i].setMap(null);
		}
		s.highlightMarkers = [];
	}

	/**********************************
	Get the center of a polygon
	**********************************/
	function getPolyCenter(geometry) {
		var tempBounds = new google.maps.LatLngBounds();
		var geometryArray = geometry.getArray()[0].getArray();
		geometryArray.forEach(function (g) {
			tempBounds.extend(g);
		});
		return tempBounds.getCenter();
	}

	/****************************************
	Alphabetizes arrays
	****************************************/
	function alphabetize(type,array){
		if(type == 'features'){
			array.sort(function(itemA,itemB){
				return itemA.name.localeCompare(itemB.name);
			});
		}
		else if (type == 'default'){
			var uniqueElements = [];
			$.each(array,function(i,element){
				if(uniqueElements.indexOf(element) === -1 && $.trim(element) !== ""){
					uniqueElements.push(element);
				}
			});
			array = uniqueElements;
			array.sort(function(itemA,itemB){
				return itemA.localeCompare(itemB);
			});
		}
		return array;
	}

	/**********************************
	Setup the controls
	**********************************/
	function controlsSetup(){
		populatePlacesList();
		populateCategoriesList();
		addControlsBindings();
		$(s.controls.baseDetailBox).css({'z-index':s.controls.baseZIndex});
		
		/**********************************
		Mobile Setup

		Notes
		[1] 	Hiding the controls initially and waiting a bit before showing them so they don't flash on
				the screen before sliding into place
		[2] 	Set the height for the .wc-mc-detail-box-content's for hiding/collapsing the controls on mobile
		[3] 	This shows the controls again. (see note [1])
		**********************************/
		if(s.isMobile){
			$(s.controls.mapControlsBox).css({'top':'2000px'}); /*[1]*/
			// toggleCategories('places');
			s.controls.mobileDetailBoxContentHeight = Globals.s.windowHeight - (Globals.s.headerHeight + 140); /*[2]*/
			var styleString = '.wc-map-controls .wc-mc-detail-box .wc-mc-detail-box-content{height: '+s.controls.mobileDetailBoxContentHeight+'px;} ';
			styleString += '.wc-map-controls.wc-mc-hidden{bottom: -'+s.controls.mobileDetailBoxContentHeight+'px;} ';
			Globals.addCSS(styleString);
			setTimeout(function() {
				mobileSizing();
				$(s.controls.mapControlsBox).css({'top':'auto'}); /*[3]*/
			}, 10);
			
			setupGeolocationMessage();
		}
		else{
			showHideControls('show');
		}
	}

	/**********************************
	Map Controls - add bindings

	Notes
	[1] 	Wait for the controls to be ready
	[2] 	Need to wait until the animation has finished before removing the contents and 
			letting the user perform other actions
	**********************************/
	function addControlsBindings(){
		s.controls.mapControlsBox.on('click', '.wc-mc-button', function(event) {
			event.preventDefault();
			if(s.controls.notReady < 0){
				log('s.controls.notReady is less than 0, resetting it');
				s.controls.notReady = 0;
			}
			if(s.controls.notReady === 0){ /*[1]*/
				var elem = $(this);
				// Places toggle button
				if(elem.get(0) === s.controls.placesButton.get(0)){
					toggleCategories('places'); 
				}
				// Categories toggle button
				if(elem.get(0) === s.controls.categoriesButton.get(0)){
					toggleCategories('categories');
				}
				// Hide Buttons
				if(elem.hasClass(s.controls.hideButtonClass)){
					showHideControls();
				}
				// Back Buttons
				if(elem.hasClass('wc-mc-back-button')){
					clearSelection();
					var box = elem.closest('.wc-mc-detail-box');
					s.controls.notReady++;
					hideDetailBox(box);
					if(s.isMobile){
						mobileSizing(-10);
					}
					setTimeout(function() { /*[2]*/
						removeDetailBox(box);
						refocus();
						s.controls.notReady--;
					}, 400);
				}
				// Categories
				if(elem.hasClass('wc-mc-category-button')){
					showCategory(elem.data('show-cat'));
				}
				// Places
				if(elem.hasClass('wc-mc-place-button')){
					var placeData =  jQuery.parseJSON(elem.data('show-place').replace(/'/g,'"'));
					showPlace(placeData.placeId);
				}
				// Close Buttons
				if(elem.hasClass('wc-mc-close-button')){
					showHideControls('hide');
				}
			}
			else{
				log('click ignored - not ready');
			}
		});
	}

	/**********************************
	Refocuses the map on whatever the top detail box is
	**********************************/
	function refocus(){
		var theBox = topDetailBox();
		if(typeof theBox.data().boxOptions !== 'undefined' && theBox.data().boxOptions.selectedCategory !== 'undefined'){
			showAdditionalFeatures(theBox.data().boxOptions.selectedCategory);
		} else {
			s.additionalFeatureLayer.setMap(null);
		}
	}


	/**********************************
	Create a new detail box

	Info
	[-] 	Detail boxes are the main elements of the map controls, any information or menu within
			the controls will be within a detail box. They're the element that slides in and out 
			with different content.
	[-] 	With the exception of the base detail box, all detail boxes are created with JS.

	Notes
	[1] 	Make sure it's on top of everything else in the slide track
	[2] 	Attaching the options data here so we can use it with refocus(). For instance,
			if you select a category and then a specific place and want to back up to the
			category, this will help that category's selection to display again.
	**********************************/
	function newDetailBox(options){
		s.controls.maxZ+=10;/*[1]*/
		var box = $('<div/>',{class:'wc-mc-detail-box ' + WcFun.emptyIfNull(options.customClass)})
				.css({'z-index':s.controls.maxZ})
				.data('boxOptions',options); /*[2]*/
		box.appendTo(s.controls.slideTrack);
		var headerbox, headerContentMarkup;
		
		/**********************************
		Feature Box
		**********************************/
		if(options.boxType	=== 'featureBox'){
			headerbox = $('<div />',{'class':'wc-mc-header-box'}).appendTo(box);
			if (s.isMobile){
				headerContentMarkup =					
					'<a class="wc-mc-close-button wc-mc-back-button wc-mc-button wc-mc-icon-button"><svg viewbox="0 0 32 32"><use xlink:href="'+Globals.s.svgFilePath+'#icon-menu-x" /></svg></a>'+
					'<a class="wc-mc-mobile-header-button wc-mc-mobile-hide-button wc-mc-hide-button wc-mc-button wc-toggle wc-toggled">'+
						'<span class="wc-text">'+options.featureName+'</span>'+
						'<svg class="wc-icon" viewbox="0 0 32 32"><use xlink:href="'+Globals.s.svgFilePath+'#icon-arrow-down" /></svg>'+
					'</a>';
			}
			else{
				headerContentMarkup = 
					'<a class="wc-back-link wc-mc-back-button wc-mc-button">'+
						'<svg viewbox= "0 0 32 32"><use xlink:href="'+Globals.s.svgFilePath+'#icon-arrow-left"></use></svg><span class="wc-text">Back</span>'+
					'</a>'+
					'<h2 class="wc-mc-heading">'+options.featureName+'</h2>';
			}
			headerbox.append(headerContentMarkup);
		}

		/**********************************
		Category Box
		**********************************/
		else if (options.boxType === 'categoryBox'){
			headerbox = $('<div />',{'class':'wc-mc-header-box'}).appendTo(box);
			headerContentMarkup = 
				'<a class="wc-back-link wc-mc-back-button wc-mc-button">'+
					'<svg viewbox= "0 0 32 32"><use xlink:href="'+Globals.s.svgFilePath+'#icon-arrow-left"></use></svg><span class="wc-text">Back</span>'+
				'</a>'+
				'<h2 class="wc-mc-heading">'+options.selectedCategory+'</h2>'+
				'<hr class="wc-mc-header-divider"/>';
			headerbox.append(headerContentMarkup);
		}

		return box;
	}

	/**********************************
	Show a detail box

	Notes
	[-] 	Making this a separate function so you can put stuff in the box before showing it
	**********************************/
	function showDetailBox(box){
		box.css({'left':'0'});
	}

	/**********************************
	Show a detail box
	**********************************/
	function hideDetailBox(box){
		box.css({'left':'100%'});
	}

	/**********************************
	Remove a detail box

	Notes
	[1] 	If this detail box has a description box on it, send it back to the
			queue so it's not deleted.
	**********************************/
	function removeDetailBox(box){
		var descriptionBox = box.find('.wc-mc-description').first();
		if(descriptionBox.length){ /*[1]*/
			descriptionBox.appendTo('#wc-mc-descriptions-queue');
		}
		box.remove();
		s.controls.maxZ-=10;
	}

	/**********************************
	Show/hide the controls, defaults to a toggle
	**********************************/
	function showHideControls(method){
		if(method == 'show'){
			s.controls.mapControlsBox.removeClass('wc-mc-hidden');
			$('.'+s.controls.hideButtonClass).addClass('wc-toggled');
		}
		else if(method == 'hide'){
			s.controls.mapControlsBox.addClass('wc-mc-hidden');
			$('.'+s.controls.hideButtonClass).removeClass('wc-toggled');
		}
		else{
			s.controls.mapControlsBox.toggleClass('wc-mc-hidden');
			$('.'+s.controls.hideButtonClass).toggleClass('wc-toggled'); 
		}
	}
	
	/**********************************
	Places/Categories toggle
	**********************************/
	function toggleCategories(which){
		if (which == 'places') {
			s.controls.placesButton.addClass('wc-toggled');
			s.controls.categoriesButton.removeClass('wc-toggled');
			s.controls.categoriesDOMList.addClass('wc-hidden');
			s.controls.placesDOMList.removeClass('wc-hidden');
		}
		else if (which == 'categories') {
			s.controls.placesButton.removeClass('wc-toggled');
			s.controls.categoriesButton.addClass('wc-toggled');
			s.controls.categoriesDOMList.removeClass('wc-hidden');
			s.controls.placesDOMList.addClass('wc-hidden');
		}
		else{
			s.controls.placesButton.toggleClass('wc-toggled');
			s.controls.categoriesButton.toggleClass('wc-toggled');
			s.controls.categoriesDOMList.toggleClass('wc-hidden');
			s.controls.placesDOMList.toggleClass('wc-hidden');				
		}
	}

	/**********************************
	Map Controls - Populate the places list

	Notes
	[1] 	Just using the polygons, not the points
	**********************************/
	function populatePlacesList(){
		//PLACES
		var data = s.placesGeoJson;
		var additionalFeatures = s.featureGeoJson;
		for(var i=0; i<data.features.length;i++){
			var feature = data.features[i];
			s.controls.featuresList.push(feature.properties);
		}
		for(var i = 0; i < additionalFeatures.features.length; i++) {
			var feature = additionalFeatures.features[i];
			s.controls.featuresList.push(feature.properties);
		}

		s.controls.featuresList = alphabetize('features',s.controls.featuresList);

		s.controls.featuresListLookup = {};
		for (var k = 0; k < s.controls.featuresList.length; k++) {
			s.controls.featuresListLookup[s.controls.featuresList[k].id] = s.controls.featuresList[k];
		}

		for (var j = 0; j < s.controls.featuresList.length; j++) {
			var thisFeature = s.controls.featuresList[j];
			var markup = 
				'<li role="menuitem">'+
					'<a class="wc-item-link wc-mc-place-button wc-mc-button" data-show-place="{\'placeId\'\:\''+thisFeature.id+'\'}" title="'+thisFeature.name+'">'+
						'<span class="wc-text">'+thisFeature.name+'</span>'+
						'<svg class="wc-icon" viewbox="0 0 32 32"><use xlink:href="'+Globals.s.svgFilePath+'#icon-arrow-right" /></svg>'+
					'</a>'+
				'</li>';
			s.controls.placesDOMList.append(markup);
		}
	}

	/**********************************
	Map Controls - Poppulate the categories list
	**********************************/
	function populateCategoriesList(){
		var data = s.placesGeoJson;
		var additionalFeatures = s.featureGeoJson;
		for (var i=0;i<data.features.length;i++){
			var feature = data.features[i];
			var tags = feature.properties.tags;
			s.controls.categoriesList = s.controls.categoriesList.concat(tags);
		}
		for(var i = 0; i < additionalFeatures.features.length; i++) {
			var feature = additionalFeatures.features[i];
			var tags = feature.properties.tags;
			s.controls.categoriesList = s.controls.categoriesList.concat(tags);
		}

		s.controls.categoriesList = alphabetize('default',s.controls.categoriesList);
		for (var k = 0; k < s.controls.categoriesList.length; k++) {
			var category = s.controls.categoriesList[k];
			var markup = 
				'<li role="menuitem">'+
					'<a class="wc-item-link wc-mc-category-button wc-mc-button" data-show-cat="'+category+'" title="'+category+'">'+
						'<span class="wc-text">'+category+'</span>'+
						'<svg class="wc-icon" viewbox="0 0 32 32"><use xlink:href="'+Globals.s.svgFilePath+'#icon-arrow-right" /></svg>'+
					'</a>'+
				'</li>';
			s.controls.categoriesDOMList.append(markup);
		}
	}

	/**********************************
	Map Controls - Show category

	Notes
	[1] 	Need to add a bit of delay to make sure the slide happens
	**********************************/
	function showCategory(category){
		console.log(category);
		var box = newDetailBox({
					selectedCategory:category,
					boxType:'categoryBox'
				});
		showAdditionalFeatures(category);
		var categoryListMarkup =
			'<div class="wc-mc-detail-box-content">'+
				'<ul class="wc-mc-items-list">';
		for (var i = 0; i < s.controls.featuresList.length; i++) {
			var thisFeature = s.controls.featuresList[i];
			if (thisFeature.tags.indexOf(category) !== -1){
				var listItemMarkup =
					'<li role="menuitem">'+
						'<a class="wc-item-link wc-mc-place-button wc-mc-button" data-show-place="{\'placeId\'\:\''+thisFeature.id+'\'}" title="'+thisFeature.name+'">'+
							'<span class="wc-text">'+thisFeature.name+'</span><svg class="wc-icon" viewBox="0 0 32 32"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="'+Globals.s.svgFilePath+'#icon-arrow-right"></use></svg>'+
						'</a>'+
					'</li>';
				categoryListMarkup += listItemMarkup;
			}
		}
		categoryListMarkup += '</ul></div>';
		box.append(categoryListMarkup);
		setTimeout(function() {showDetailBox(box);}, 100);/*[1]*/
		
	}

	function showAdditionalFeatures(category) {
		var isAdditionalFeatureTag = false;
		for (var i = 0; i < s.uniqueTags.length; i++) {
			if (category === s.uniqueTags[i]) {
				isAdditionalFeatureTag = true;
				break;
			}
		}
		
		s.additionalFeatureLayer = new google.maps.Data();

		if(isAdditionalFeatureTag) {
			s.pointsLayer.setMap(null);
			s.placesLayer.setMap(null);
			console.log("FEATURE GEO JSON");
			console.log(s.featureGeoJson);
			var chosenFeaturesGeoJson = {
				"type": "FeatureCollection",
				"features": []
			}
			var j = 0;
			for (var i = 0; i < s.featureGeoJson.features.length; i++) {
				for(var p = 0; p < s.featureGeoJson.features[i].properties.tags.length; p++) {
					if(s.featureGeoJson.features[i].properties.tags[p] == category) {
						chosenFeaturesGeoJson.features[j] = s.featureGeoJson.features[i];
						j++;
					}
				}
			}
			console.log("CHOSEN FEATURES: ");
			console.log(chosenFeaturesGeoJson);
			
			s.additionalFeatureLayer.addGeoJson(chosenFeaturesGeoJson);
			s.placesLayer.setMap(null);
			s.pointsLayer.setMap(null);

			/**********************************
			AdditionalFeatures - Click
			**********************************/
			s.additionalFeatureLayer.addListener('click',function(event){
				console.log("CLICK LISTENER");
				var feature 	= event.feature;
				var polygonId	= feature.getProperty('polygonId');
				
				showPlace(polygonId,'boxB','boxA');
			});
			/**********************************
			AdditionalFeatures - hover
			**********************************/
			s.additionalFeatureLayer.addListener('mouseover',function(event){
				console.log("Hover LISTENER");

			});

			s.additionalFeatureLayer.setMap(s.map);
			
			
			focusMap('additionalFeatures', '', category);
		} else {
			focusMap('Group','',category);
			s.additionalFeatureLayer.setMap(null);
			// newFeatureLayer.setMap(null);
			s.placesLayer.setMap(s.map);
		}
	}

	/**********************************
	Map Controls - Show the place's information

	Notes
	[1]		Go grab the content for this feature (they should all be in
			#wc-mc-descriptions-queue) and move it into this detail box
	[2] 	Need to add a bit of delay otherwise the slide doesn't happen
	[3] 	Clean up the place detail boxes, need to delay this until after the
			slide animation is finished
	[4] 	Need to add this clause for it to work properly when the user hits "back"
	**********************************/
	function showPlace(id){
		//DOING FIRST ONE FOR DEBUGGING SHOULD BE A LOOP OVER ALL TAGS ON OBJECT AND IF
		//ANY ARE IN THE DICTIONARY CALL SHOW ADDITIONAL FEATURE WITH THAT FEATURE
		var isFeature = false;
		for (var i = 0; i < s.controls.featuresListLookup[id].tags.length; i++) {
			for (var j = 0; j < s.uniqueTags.length; j++) {
				if (s.controls.featuresListLookup[id].tags[i] === s.uniqueTags[j]) {
					isFeature = true;
					break;
				}
			}
		}
		if(isFeature) {
			console.log("IN SHOW PLACE CORRECT");
			focusMap('additionalFeature', id, "Trees");
		} else {
			focusMap('Polygon',id);
		}
		console.log("COMMENT1", s.controls.featuresListLookup)
		console.log("COMMENT2", s.controls.featuresListLookup[id]);
		var feature 	= s.controls.featuresListLookup[id],
			box 		= newDetailBox({
							customClass:'wc-mc-place-detail-box',
							boxType:'featureBox',
							featureName:feature.name
						});
		$('#wc-mc-desc-'+id).appendTo(box); /*[1]*/
		setTimeout(function() { /*[2]*/
				showDetailBox(box);
				mobileSizing();
			}, 100);
		if(s.isMobile){
			showHideControls('hide');
		}
		else{
			showHideControls('show');
		}
		s.controls.notReady++;
		setTimeout(function() { /*[3]*/
			cleanupDetailBoxes('.wc-mc-place-detail-box');
			s.controls.notReady--;
		}, 400);
		if(!(Globals.s.urlParameters.hasOwnProperty('plc') && Globals.s.urlParameters.plc === id)){ /*[4]*/
			Globals.addUrlParameter('plc',id);
		}
	}

	/**********************************
	Resize the mobile controls to accomodate the header's changing size

	Notes
	[1]	 	iOS bug: this returns 0 the first time it runs unless the detail box has a min-height. See 
			the note for .wc-mc-detail-box-base in _map.scss
	**********************************/
	function mobileSizing(zOffset){
		if(s.isMobile){
			var headerHeight = topDetailBox(zOffset).find('.wc-mc-header-box').outerHeight(); /*[1]*/
			$(s.controls.slideTrack).height(s.controls.mobileDetailBoxContentHeight + headerHeight); 
		}
	}

	/**********************************
	Returns the detail box that's on top, based on z-index

	Notes
	[1] 	Using zOffset so you can get a detail box other than the one that's on top
	**********************************/
	function topDetailBox(zOffset){
		if(isNaN(zOffset)){zOffset = 0;}
		var topBox;
		$('.wc-mc-detail-box').each(function(){
			if(+$(this).css('z-index') === (+s.controls.maxZ + zOffset)){ /*[1]*/
				topBox = $(this);
			}
		});
		return topBox;
	}

	/**********************************
	Clean up detail boxes

	Info
	[-] 	This deletes anything with a lower z-index than the top detail box (based on the
			selector). Example: when you click around on buildings on the map, it's creating new detail 
			boxes and laying them on top of the old ones. This deletes the old ones so when you hit
			"back" it doesn't just go back to the previous building you clicked on.

	Notes
	[1] 	Go through each of them and remove anything that's not on top. This will also
			decrease the s.controls.maxZ value.
	[2]		Using a copy of s.controls.maxZ here because we'll be changing it as we loop through this.
	[3] 	Take whatever is leftover (should just be the top element) and decrease its z value to whatever
			s.controls.maxZ is now.
	**********************************/ 
	function cleanupDetailBoxes(selector){
		var tempMaxZ = s.controls.maxZ;
		$(selector).each(function(){ /*[1]*/
			if(+$(this).css('z-index') < +tempMaxZ){ /*[2]*/
				removeDetailBox($(this));
			}
		});
		$(selector).each(function(){ /*[3]*/
			if(+$(this).css('z-index') > +s.controls.maxZ){
				$(this).css({'z-index':s.controls.maxZ});
			}
		});
	}

	/**********************************
	Add Geolocation Message
	**********************************/
	function setupGeolocationMessage(){
		var params = {
			messageBoxID:s.messageBoxID,
			messageText:'Would you like to use GPS to display your location on the map?',
			buttons:[
				{
					text:'No Thanks',
					action:function(){
						MessageControl.s.messageBox.css({'transform':'translateY(100%)'});
					}
				},
				{
					text:'Sure',
					action:function(){
						MessageControl.loadingGif();
						MapControl.letsGeolocate(
							function(){
								MessageControl.s.messageBox.css({'transform':'translateY(100%)'});
							},
							function(failureMessage){
								MessageControl.clear();
								MessageControl.setMessage(failureMessage);
								MessageControl.addButton(
									{
										text:'Ok',
										action: function(){
											MessageControl.s.messageBox.css({'transform':'translateY(100%)'});
										}
									}
								);
							}
						);
					}
				}
			],
			callback:function(){MessageControl.s.messageBox.css({'transform':'translateY(0)'});}
		};
		MessageControl.init(params);
	}

	/**********************************
	 * CAPSTONE WORK
	 * Things to do:
	 * 1. Write out function call map
	 * 		- Look carefully for how to input the data in such a way to enable the disabling of trees or enabiling or trees
	 * 2. Convert tree data into json file like city-gis-applications/WhitmanWebsiteSandbox/redesign/src/html/pieces/map-data.html
	 * 3. put tree data into use using map-control.js and map.html
	 * 4. Add to command panel tree data, or some sort of button that enables tree view or disables it (Make sure it uses a url)
	 */
	function addTrees() {
		
	}




	
	/**********************************
	Geolocation
	
	Notes
	[-] 	For a lot of the geolocation code - credit: Ryan Connolly - http://jsfiddle.net/ryanoc/86Ejf/
	[1] 	You can use this for testing, these bounds don't contain boyer house
	[2] 	Checks if they're within the bounds of the map.
	[3] 	Start tracking movement if they're using iOS or Android
	**********************************/
	function letsGeolocate(successCallback,failureCallback){
		var options = {};
		var useragent = navigator.userAgent;
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
					log('kapow!');
					var thisPosition 	= new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
					/*[1]*/ // s.mapTileBounds 	= new google.maps.LatLngBounds(new google.maps.LatLng(46.068891,-118.333118), new google.maps.LatLng(46.071042,-118.331745));
					if(s.mapTileBounds.contains(thisPosition)){ /*[2]*/
						updatePositionMarker(position);
						if(typeof successCallback == 'function'){
							successCallback();
						}
						if ( useragent.indexOf('iPhone') !== -1 || useragent.indexOf('Android') !== -1 ) { /*[3]*/
							navigator.geolocation.watchPosition( 
								updatePositionMarker, 
								handleGeolocationError, 
								{
									enableHighAccuracy: true,
									maximumAge: 30000,
									timeout: 27000
								}
							);
						}
					}
					else{
						if(typeof failureCallback == 'function'){
							failureCallback('You\'re too far from campus to display your location on the map. Once you\'re closer to campus you can refresh this page to try again.');
						}
					}
				}, function(e) {
					if(typeof failureCallback == 'function'){
						failureCallback('I\'m sorry, we were unable to use your device\'s GPS. Please ensure that GPS is enabled for your browser.');
					}
					log('Geolocation Error:');
					log(e);
				}, options);
		} else {
			if(typeof failureCallback == 'function'){
				failureCallback('I\'m sorry, we were unable to use your device\'s GPS.');
			}
		}
	}

	/**********************************
	Geolocation error handling

	Notes
	[1] 	For testing on mobile (since you can't view the console)
	**********************************/
	function handleGeolocationError(error) {
		var errorMessage = [ 
			'Error: Not sure what went wrong.',
			'Error: Permission to find your location was denied.',
			'Error: Your position could not be determined.',
			'Error: Timed out.'
		];
		if(s.isMobile && Globals.s.urlParameters['dev'] == '1'){/*[1]*/
			alert(errorMessage[ error.code ]);
		}
		log(errorMessage[ error.code ] );
	}
	
	/**********************************
	Update the position marker

	Notes
	[1] 	If there's no marker, make one darnit
	[2] 	otherwise just update its position
	**********************************/
	function updatePositionMarker(pos){
		pos = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
		if ( !s.positionMarker ) { /*[1]*/
			var image = new google.maps.MarkerImage(
				Globals.igxUrl(s.imagesUrl,'map/bluedot_retina.png'),
				null, // size
				null, // original
				new google.maps.Point( 8, 8 ), // anchor (move to center of marker)
				new google.maps.Size( 17, 17 ) // scaled size (required for Retina display icon)
			);
			s.positionMarker = new google.maps.Marker({
				flat: true,
				icon: image,
				map: s.map,
				optimized: false,
				position: pos,
				title: 'Your location',
				visible: true
			});
			s.map.setCenter(pos);
		}
		else { /*[2]*/
			s.positionMarker.setPosition(pos);
		}
	}

	/**********************************
	If there's a place ID in the url, show that place
	**********************************/
	function showUrlPlace(){
		if(Globals.s.urlParameters.hasOwnProperty('plc')){
			var urlPlace = Globals.s.urlParameters.plc;
			if(s.controls.featuresListLookup[urlPlace] !== undefined){
				showPlace(urlPlace);
			}
			else{
				log('Unable to find this place - ' + urlPlace);
			}
		}
	}

	/**********************************
	Polygon Editing
	
	Notes
	[-] 	This is for making edits to the polygons. To use this:
			-	Load the web page in the browser
			-	In the console run the command:
				MapControl.letsEdit()
			-	Click on the building you want to edit
			-	Edit it
			-	When you're done, in the console run this command
				copy(MapControl.getPolyCoords(MapControl.s.selectedFeature));
			-	The New coordinates should be copied to your clipboard.
			- 	If you're updating the ingeniux component for that feature, paste
				the copied coordinates in there. If you're updating places.js paste
				them in there.
			- 	Before saving, copy the first coordinate and paste it at the end. (The first and
				last coordinates need to be the same)
			- 	If you're editing the ingeniux component, make sure to place the whole
				group of coordinates in an additional set of brackets []
			- 	Save and you're good to go.
			- 	Note that currently this probably won't work for editing features with mutliple
				polygons (like the amphitheatre), when you copy the coordinates after editing it will just
				copy one of the polygons.
	[1] 	If you want to turn this off and view your overlays without the editing
			tools, just run MapControl.letsEdit(false)
	**********************************/
	function letsEdit(toggle){
		log('lets edit!');
		s.letsEdit = toggle === false?false:true; /*[1]*/
	}

	/**********************************
	Gets the coordinates for a polygon

	Notes
	[1] 	Using shapeIndex to specify which shape to get, if there's more than one
	[2] 	After getting the geometry, getArray() returns an array of LinearRings's,
			(should be just one if it's a simple shape I think). These are themselves basically
			an array of LatLng's.
	[3] 	Run getArray() to get the actual array of LatLng's, then toString() on each of those
			to get the actual coordinates in a string format.
	**********************************/
	function getPolyCoords(thing,shapeIndex){
		if(!shapeIndex){shapeIndex = 0;} /*[1]*/
		var theString = '';
		if(!thing){
			thing = s.selectedFeature;
		}
		var linearRing = thing.getGeometry().getArray()[shapeIndex]; /*[2]*/
		for (var i = 0; i < linearRing.getLength(); i++) {
			theString += '[' + linearRing.getArray()[i].lng() + ',  '+linearRing.getArray()[i].lat() +'],';/*[3]*/
		}
		return theString; 
	}

	return {
		s:s,
		init:init,
		focusMap:focusMap,
		showCategory:showCategory,
		showPlace:showPlace,
		showHideControls:showHideControls,
		getPolyCoords:getPolyCoords,
		letsEdit:letsEdit,
		letsGeolocate:letsGeolocate,
		topDetailBox:topDetailBox
	};
})(jQuery);