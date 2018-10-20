/**********************************
These are just miscellaneous things that we no longer
need in the map control module, but wanted to hold on to
in case we did in the future. You'll need to add them back
into the module and probably add some properties
to the settings object for them to work
**********************************/



		// /**********************************
		// Add the overlay

		// Notes
		// [1]		If you need to adjust these, see the overlayPositioning()
		// 		function below.
		// **********************************/
		// function addOverlay(){
		// 	var imageBounds = {north: 46.080497990000005, west: -118.34059079999973, south: 46.06574298999996, east: -118.31847690000126}; /*[1]*/
		// 	s.campusOverlay = new google.maps.GroundOverlay(
		// 		s.overlayPath,
		// 		imageBounds);
		// 	s.campusOverlay.setMap(s.map);
		// 	s.campusOverlay.setOpacity(1);
		// }



		// *********************************
		// Add hover and click bindings

		// Notes
		// [2] 	[OLD METHOD] If you leave a feature, clear the highlights. This detects any movement 
		// 		over the map and then just clears the highlights if there was one highlighted.
		// 		I think this method prevents the flickering if you move from the feature to the
		// 		label. Keep this around until you're sure the current method works well though.
		// *********************************
		// function addFeatureBindings(){
		// 	//.....

		// 	// s.campusOverlay.addListener('mousemove',function(){ /*[2]*/ /*[TD2]*/
		// 	// 	log('moving!');
		// 	// 	if(s.hoverID !== null){
		// 	// 		clearHighlights();
		// 	// 		s.placesLayer.revertStyle();
		// 	// 		s.pointsLayer.revertStyle();
		// 	// 		s.featureLabel.close();
		// 	// 		s.hoverID = null;
		// 	// 	}
		// 	// });
			

		// 	//...
		// }



		// /**********************************
		// OVERLAY POSITIONING

		// Notes
		// [-] 	This is just for positioning the overlay during development, not used in
		// 		production at all.
		// [1] 	Run this funciton (you'll need to add it to MapControl's return statement first,
		// 		also add adjustOverlay as well)
		// [2][3] 	Use these shortcuts to move the map around and stretch it to fit correctly
		// [4] 	Once you have it right, check the log and copy the most recent batch of 
		// 		coordinates.
		// **********************************/
		// function overlayPositioning(){ /*[1]*/
		// 	/**********************************
		// 	Moving - up, down, left, right 
		// 	**********************************/
		// 	KeyControl.add(37,function(){ //move west
		// 		MapControl.adjustOverlay(0,0,-1,-1); /*[2]*/
		// 	});
		// 	KeyControl.add(39,function(){//move east
		// 		MapControl.adjustOverlay(0,0,1,1);
		// 	});
		// 	KeyControl.add(38,function(){ //move north
		// 		MapControl.adjustOverlay(1,1,0,0);
		// 	});
		// 	KeyControl.add(40,function(){ //move south
		// 		MapControl.adjustOverlay(-1,-1,0,0);
		// 	});
			
		// 	/**********************************
		// 	Stretching - A,S,D,W
		// 	**********************************/
		// 	KeyControl.add(65,function(){ // A - stretch west
		// 		MapControl.adjustOverlay(0,0,0,-1); /*[3]*/
		// 	});
		// 	KeyControl.add(68,function(){ // D - stretch east
		// 		MapControl.adjustOverlay(0,0,0,1);
		// 	});
		// 	KeyControl.add(87,function(){ // W - stretch north
		// 		MapControl.adjustOverlay(1,0,0,0);
		// 	});
		// 	KeyControl.add(83,function(){ // S - stretch south
		// 		MapControl.adjustOverlay(-1,0,0,0);
		// 	});
		// }

		// /**********************************
		// For scaling the overlay
		// **********************************/
		// function adjustOverlay(north,south,east,west){
		// 	var increment = 0.00005;
		// 	var deezBounds = s.campusOverlay.getBounds();
		// 	var newBounds = {};
		// 	newBounds.north = deezBounds.O.j + (increment * north);
		// 	newBounds.west = deezBounds.j.j + (increment * west);
		// 	newBounds.south = deezBounds.O.O + (increment * south);
		// 	newBounds.east = deezBounds.j.O + (increment * east);
		// 	log(newBounds);
			
		// 	s.campusOverlay.setMap(null);
		// 	s.campusOverlay = new google.maps.GroundOverlay(
		// 		'/images/map/map-overlay-v2.jpg',
		// 		newBounds);
		// 	s.campusOverlay.setMap(s.map);
		// 	s.campusOverlay.setOpacity(1);
		// 	log(newBounds); /*[4]*/
		// }
