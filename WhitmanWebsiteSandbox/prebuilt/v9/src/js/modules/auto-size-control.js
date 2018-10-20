/**********************************
#AUTO-SIZE-CONTROL

Info
		Automatically resizes elements with the "data-auto-size" data attribute to have
		100% width and keep the correct aspect ratio on different screen sizes.

		Example Markup: <div data-auto-size='{"width": "640", "height":"360" }'></div>

		*Note*  The FitVid plugin already does this for embedded videos like youtube and vimeo.
		It's best to use that for videos if possible - https://github.com/davatron5000/FitVids.js
**********************************/ 

var AutoSizeControl = (function(){
	'use strict';
	var s = {
		things:null
	};

	function init(){
		s.things = $('[data-auto-size]');
		if (s.things.length > 0 ) {
			resize();
			subscriptions();
		}
	}

	/**********************************
	Resize the things according to their aspect ratio
	**********************************/
	function resize(){
		s.things.each(function(){
			var params = $(this).data('auto-size');
			var ratio = parseInt(params.height,10)/parseInt(params.width,10);
			$(this).css({'width':'100%'}).height($(this).width() * ratio);
		});
	}

	/**********************************
	Pub/Sub subscriptions

	Notes
	[1] 	Run this whenever the window size changes (watching Globals.watchWindowSize)
	**********************************/
	function subscriptions(){
		$.subscribe('window.newMeasurements',function(){
			resize();
		});
	}

	return {
		s:s,
		resize:resize,
		init:init
	}
})();