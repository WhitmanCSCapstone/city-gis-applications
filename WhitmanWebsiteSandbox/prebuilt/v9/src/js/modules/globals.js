/**********************************
#GLOBALS

Info
		This is intended to be for JS that applies to various places throughout the website. Over
		time it's also turned into sort of a catch-all for anything that doesn't have its own module.
**********************************/
var Globals = (function(){
	'use strict';

	/****************************************
	Settings 

	Notes
	[1] 	Version number, just for troubleshooting.
	[2]		Bootstrap breakpoints, need to keep these synced with whatever they are in the CSS/SCSS.
			Note that these correspond to the maximum values. E.g. s.breakpoints.xs = $screen-xs-max,
			hence there isn't one for lg.
	[3] 	For checking to see what breakpoint you're at, true = the screen is at least that big. 
	[4] 	Count of lightboxes on the page, just used for giving them unique ID's
	[5] 	An array for storing promises that need to be globally accessible, Ex. psSetup() in masonry-gallery.js
	****************************************/
	var s = {
		v:2, /*[1]*/
		windowWidth:0,
		windowHeight:0,
		headerHeight:0,
		breakpoints:{ /*[2]*/
				xs: 767,
				sm: 1024,
				md: 1199
		},
		breakpointChecks:{ /*[3]*/
			xs:false,
			sm:false,
			md:false,
			lg:false
		},
		currentBreakpoint:undefined,
		isFirefox:false,
		isIE:false,
		ieVersion:0,
		urlParameters:{},
		apiKeys:{},
		footer:$('#wc-footer'),
		contentWrap:$('.wc-content-wrap'),
		bgVideos:[],
		cssFolderPath:undefined,
		jsFolderPath:undefined,
		svgFilePath:undefined,
		lightBoxCount:0, /*[4]*/
		addedScripts:[],
		addedStylesheets:[],
		promises:[] /*[5]*/
	};

	/****************************************
	Initializes the module

	Notes
	[1] 	Just for mobile accordions - hiding things initially that
			shouldn't be hidden for desktop
	[2] 	Collapse these boxes on mobile (ex. sections of the mobile main nav)
			Not sure why this is different from note [1], might want to combine them
			at some point.
	[3] 	Set the max height for lightboxes
	[4] 	Check for high contrast URL parameter
	[5] 	Trigger the newElements binding
	****************************************/
	function init(){
		getUrlParameters();
		getAPIKeys();
		browserDetect();
		miscSetup();
		initCollapse();
		updateMeasurements();
		bindings();
		sameHeight();
		addCaptions();
		lightboxSetup();
		applyEllipsis();
		randomBGImage();
		videoBackgrounds();

		if(s.windowWidth <= s.breakpoints.xs){ /*[1]*/
			$('.wc-mobile-default-collapse').collapse('hide'); 
		}

		if(!s.breakpointChecks.md){ /*[2]*/
			$('.wc-mobile-collapse-box').addClass('collapse');
		}

		addCSS('.wc-lightbox img{max-height:'+Math.floor((s.windowHeight * 0.9)) +'px;}'); /*[3]*/

		if(s.urlParameters['hc'] === '1'){ /*[4]*/
			highContrast();
		}

		$.publish('dom.newElements'); /*[5]*/
	}

	/**********************************
	Misc setup things

	Notes
	[1][2][3] 	Get these paths so it's independent of how Ingeniux links to them.
	[4] 		This should be at the bottom of layout.cshtml
	**********************************/
	function miscSetup(){
		var mainCSSLink = $('head link').filter('link[href*="wc-style.css"]')[0];
		if(mainCSSLink && mainCSSLink.href.length > 0){
			s.cssFolderPath = mainCSSLink.href.substring(0,mainCSSLink.href.indexOf('wc-style')); /*[1]*/
		}
		else{
			log('Globals.miscSetup error: wc-styles.css not found');
		}
		var mainJSLink = $('#wc-scripts-tag')[0];
		if(mainJSLink && mainJSLink.src.length > 0){
			s.jsFolderPath =  mainJSLink.src.substring(0,mainJSLink.src.indexOf('wc-scripts')); /*[2]*/
		}
		else{
			log('Globals.miscSetup error: wc-sripts.css not found');
		}
		var svgPathSpan = $('#wc-svg-path'); /*[3][4]*/
		if (svgPathSpan) {
			s.svgFilePath = svgPathSpan.data('svgPath');
		}
	}

	/**********************************
	Event handlers

	Notes
	[1] 	Adds a "click off" listener so quick links will close when you click off
			of it.
	**********************************/
	function bindings(){
		ClickOff.add($('#wc-quick-links-links, #wc-quick-links-button'),function(){ /*[1]*/
			$('#wc-quick-links-links').collapse('hide');
		});


		/**********************************
		When the window is resized, update things accordingly
		**********************************/
		$(window).resize($.throttle(500,function(){
				updateMeasurements();
			})
		);
		$.subscribe('window.newMeasurements',function(){
			cleanUp();
			sameHeight();
		})

		/**********************************
		When elements are added to the DOM , update things accordingly. 

		Notes
		[-] 	This means you need to add $.publish('dom.newElements') in your code whenever
				you add stuff
		[1] 	Remove the focus styles after you click on a button. This shouldn't interfere with
				keyboard focus.
		**********************************/
		$.subscribe('dom.newElements',function(){
			$.each(document.getElementsByTagName('button'), function(i,e) { /*[1]*/
				e.onmouseup = function(){this.blur();}
			});
			sameHeight();
		})

		/**********************************
		Collapsed Navigation Stuff

		Notes
		[-] 	Example: the navigation on the landing pages
		[1] 	Toggling a class to make the navigation opaque when it's open. Using
				bootstrap's events here to keep it synched with bootstrap's collapse method.
		[2] 	When you expand a submenu, close the other ones. Trying to keep the menu from
				getting too long, only works for the first level of submenus.
		[3] 	Resize the page so the section nav never goes below the bottom of it.
		**********************************/
		var $navRow = $('.wc-collapsed-nav-row').first();
		if(s.breakpointChecks.sm && $navRow.length > 0){
			var $innerBox = $navRow.find('#wc-left-column-inner-box');
			var $leftCol = $('#wc-left-column');
			$innerBox
				.on('show.bs.collapse',function(e){ /*[1]*/
					if($innerBox.get(0) === e.target){
						$leftCol.addClass('wc-collapsed');
					}
				})
				.on('hide.bs.collapse',function(e){
					if($innerBox.get(0) === e.target){
						$leftCol.removeClass('wc-collapsed');
					}
				});
			ClickOff.add($leftCol,function(){
				$innerBox.collapse('hide');
			});
			$navRow.find('.wc-section-nav-list>li>.wc-nav-expander').click(function(){/*[2]*/
				var $clickedBtn = $(this);
				$navRow.find('.wc-section-nav-list>li>.wc-nav-expander:not(.collapsed)').each(function(){
					if($(this).get(0) != $clickedBtn.get(0)){
						$(this).get(0).click();
					}
				});
			});
			$innerBox.on('shown.bs.collapse hidden.bs.collapse',function(e){ /*[3]*/
				var minHeight = ($leftCol.height() - $('.wc-footer').height() + 50);
				minHeight = minHeight<1?1:minHeight;
				$('.wc-expand-for-nav').first().css({
					'min-height':minHeight +'px'
				});
			});
		}
		collapseButtons();
		clickTriggers();
	}

	/**********************************
	Collapse Buttons - our custom collapse function.

	Note
	[-] 	This is our own custom collapse/expand function. We're also still using the
			bootstrap collapse function in several places because it handles expanding to
			a non-static height element pretty well.
	[-] 	Making this a separate function so it can be called again later for elements
			that are added to the DOM by JS.
	[1] 	Note that this might be multiple id's/classes.
	**********************************/
	function collapseButtons($e){
		if(!$e){
			$e = $('.wc-collapse-button');
		}
		$e.click(function(){
			var targetSelector = $(this).data('target'); /*[1]*/
			$(targetSelector).toggleClass('wc-collapsed');
		});
	}

	/**********************************
	Click Triggers - things you click on that click on other things when you click on them

	Notes
	[-] 	Making this a separate function so it can be called again later for elements
			that are added to the DOM by JS.
	**********************************/	
	function clickTriggers($e){
		if(!$e){
			$e = $('.wc-click-trigger');
		}
		$e.click(function(){
			var targetSelector = $(this).data('target');
			$(targetSelector).click();
		})
	}

	/****************************************
	Measure things (like the window size)
	
	Notes
	[-]		Can't use $(window).width() / .height() because it fails to account
			for scrollbars.
	[1] 	Only tiggering this after we confirm there's been a change. Would like to 
			check height here too, but scrolling on mobile seems to return a change in
			height for some reason.
	[2] 	Note that this does not account for scrollbars. Using it instead of
			window.innerWidth because that yields inconsistent measurements on
			mobile Safari
	[3]		Check to see what css breakpoint you're at
	[4] 	Publish this event so other modules can watch for it
	****************************************/
	function updateMeasurements(){
		var thing1 = window,
			thing2 = 'inner';
		if (!('innerWidth' in window )) {
			thing2 = 'client';
			thing1 = document.documentElement || document.body;
		}
		var tempwidth = thing1[ thing2+'Width' ];
		if(s.windowWidth != tempwidth){ /*[1]*/
			s.windowWidth = tempwidth;
			s.windowHeight = $(window).height();/*[2]*/
			s.headerHeight = $('#wc-site-header').height();
			s.breakpointChecks.lg = ($('#wc-breakpoint-check-lg').css('display') === 'block'); /*[3]*/
			s.breakpointChecks.md = ($('#wc-breakpoint-check-md').css('display') === 'block');
			s.breakpointChecks.sm = ($('#wc-breakpoint-check-sm').css('display') === 'block');
			s.breakpointChecks.xs = ($('#wc-breakpoint-check-xs').css('display') === 'block');
			if(s.breakpointChecks.lg){s.currentBreakpoint = 'lg';}
			else if(s.breakpointChecks.md){s.currentBreakpoint = 'md';}
			else if(s.breakpointChecks.sm){s.currentBreakpoint = 'sm';}
			else if(s.breakpointChecks.xs){s.currentBreakpoint = 'xs';}
			$.publish('window.newMeasurements'); /*[4]*/
		}
	}

	/****************************************
	Shift margins/sizes of things according to the browser size
	
	Notes
	[1] 	If the search options have been shown/hidden in desktop view,
			this resets them for mobile view.
	****************************************/
	function cleanUp(){
		if (s.windowWidth > s.breakpoints.sm){
			MenuControl.mobileSearchToggle('reset');
			MenuControl.mobileNavToggle('reset');
		}

		/**********************************
		Apply ellipsis
		**********************************/
		applyEllipsis();

		/**********************************
		Resize the home page video on smaller screens

		Notes
		[1] 	Remember to update this if you change it in the CSS
		[2] 	Keeps it at less than 65% of the total height of the window
		**********************************/
		var videoInitHeight = 620;/*[1]*/
		if(($('#wc-main-feature').height() < 620 || $('#wc-main-feature').height() > (s.windowHeight * 0.7)) && s.windowWidth > s.breakpoints.sm){
			var max = videoInitHeight, min = 250;
			var newHeight = (s.windowHeight * 0.65) > max ? max:(s.windowHeight * 0.65) < min ? min: (s.windowHeight * 0.65);/*[2]*/
			$('#wc-main-feature').height(newHeight);
		}

		/**********************************
		Move components in the left column for mobile

		Notes
		[1] 	If they're link lists, leave them there
		**********************************/
		if(!s.breakpointChecks.sm){
			var componentRows = $('#wc-left-column .wc-component-row');
			for (var i = 0; i < componentRows.length; i++) {
				if($(componentRows[i]).find('.wc-link-list-component').length < 1){ /*[1]*/
					$(componentRows[i]).appendTo('#wc-reader-content');
				}
			}
		}
	}

	/**********************************
	Browser Detection

	Info
			Using modernizr's feature detection as much as possible, but there are some things it can't 
			check for...

	Notes
	[1] 	...like when a browser has dropdown arrows for its select elements that look terrible with
			a border-radius because they're from 1995 (*cough* firefox).
	[2] 	Setting s.ieVersion to 99 for any version of IE past 10 since it's hard to get
			that from the ua string.
	**********************************/ 
	function browserDetect(){
		var ua = window.navigator.userAgent;
		s.isFirefox = ua.toLowerCase().indexOf('firefox') > -1; /*[1]*/
		if (s.isFirefox){
			$('html').addClass('firefox');
		}

		var msIEIndex 		= ua.toLowerCase().indexOf("msie");
		var tridentIndex 	= ua.toLowerCase().indexOf("trident");
		if (msIEIndex > -1 || tridentIndex > -1){
			s.isIE = true;
			$('html').addClass('ie-yes');
			if (msIEIndex > -1){
				s.ieVersion = parseInt(ua.substring(msIEIndex + 5, ua.indexOf(".", msIEIndex)));
			}
			else{
				s.ieVersion = 99;
			}
			ieFixes();
		}
		else{
			s.isIE = false;
		}
	}

	/**********************************
	Misc Fixes for Internet Explorer
	**********************************/
	function ieFixes(override){
		var ieClass = 'ie-';
		if(s.ieVersion === 99){
			ieClass+='11+';
		}
		else if(s.ieVersion < 9){
			ieClass+='old';
		}
		else{
			ieClass+=s.ieVersion;
		}
		$('html').addClass(ieClass);
		

		/**********************************
		Fix for IE9's css selector limit

		Info
			IE9 has a per-file css selector limit of 4096. To deal with this, grunt makes a copy of the wc-styles.css file
			and breaks it into chunks that are smaller than that. Then we use this JS to link to those files in the 
			head if the browser is IE9 or below.

		Notes
		[1]		If we ever need more files than 2 *shudder*, update this array with the new file names. 
		[2] 	First check to see if the split CSS files are there
		[3] 	...if they are then remove the original css file
		[4] 	...and add the new ones.
		**********************************/
		if (s.ieVersion < 10 || override === true){
			var ieCSSFiles = [
				'wc-style_part_1.css',/*[1]*/
				'wc-style_part_2.css'
			];
			checkUrl(s.cssFolderPath + ieCSSFiles[1], function(m){/*[2]*/
				if(m === 'success'){
					$(mainCSSLink).remove(); /*[3]*/
					for (var i = 0; i < ieCSSFiles.length; i++) {/*[4]*/
						var path 	= s.cssFolderPath + ieCSSFiles[i];
						var link 	= document.createElement('link');
						link.rel  	= 'stylesheet';
						link.type 	= 'text/css';
						link.href 	= path;
						link.media 	= 'all';
						document.getElementsByTagName('head')[0].appendChild(link);
					}
				}
			});
		}
	}

	/**********************************
	Check to see if a URL is broken or not
	**********************************/
	function checkUrl(url,callback){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if(xhr.status < 400){
					callback('success');
				}
				else{
					callback('fail');
				}
			}
		};
		xhr.open('HEAD', url);
		xhr.send();
	}

	/**********************************
	Get URL/GET parameters

	Notes
	[1] 	Converts all parameter names to lower-case
	**********************************/
	function getUrlParameters(){
		/**********************************
		Credit: @gion_13 - http://stackoverflow.com/questions/12049620/how-to-get-get-variables-value-in-javascript
		**********************************/
		if(document.location.toString().indexOf('?') !== -1) {
			var query = document.location.toString()
				.replace(/^.*?\?/, '')
				.replace(/#.*$/, '')
				.split('&');
			for(var i=0, l=query.length; i<l; i++) {
			   var aux = decodeURIComponent(query[i]).split('=');
			   s.urlParameters[aux[0].toLowerCase()] = aux[1]; /*[1]*/
			}
		}

		/**********************************
		Update URL parameters when somebody hits "back"
		
		Notes
		[1] 	If we've edited the history with addUrlParameter(), then hitting the
				back button will yield a 'popstate' event, but it won't actually reload
				the page.
		[2] 	We use this event to retrieve the urlParameters object that we stored
				in the state object (see note [3] in urlParameters()), then we can update
				Globals.s.urlParameters and use those values to update hte page accordingly
		**********************************/
		$(window).on('popstate',function(e){ /*[1]*/
			var state = e.originalEvent.state;
			if(state && state.hasOwnProperty('urlParameters')){ /*[2]*/
				s.urlParameters = state['urlParameters'];
				$.publish('window.back-popstate');
			}
			
		});
	}

	/**********************************
	Get API Keys from meta tags

	Notes:
	[-] 	So we can keep our production and dev keys separate:
	**********************************/ 
	function getAPIKeys(){
		$('meta[name=APIKey]').each(function(){
			var arr = $(this).attr('content').split(':');
			s.apiKeys[arr[0]] = arr[1];
		})
	}

	/**********************************
	Gives all child elements the same height

	Notes
	[-] 	Two ways of using this
			- 	.wc-same-height-children: give all child elements the same height
			- 	.wc-same-height-group-X: where X is a letter of the alphabet, give
				all elements with that class (not their children) the same height
	[-] 	Note that this use to use the class .wc-same-height but it no longer does
	[1] 	Grouped by classes, works with .wc-same-height-group- and any letter
			of the alphabet
	[2]  	We only want to do this for the bigger breakpoints
	[3] 	Using the imagesLoaded plugin - http://imagesloaded.desandro.com/
	[4]		Need to reset their height first, in case this function has already 
			run (like when resizig a window)
	**********************************/
	function sameHeight(){
		var groups = [];
		var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; /*[1]*/
		alphabet.forEach(function(l){
			if($('.wc-same-height-group-' + l).length !== 0){
				groups.push($('.wc-same-height-group-' + l));
			}
		})
		$('.wc-same-height-children').each(function(){
			groups.push($(this).children());
		})
		groups.forEach(function($g){
			if (s.windowWidth >= s.breakpoints.xs) { /*[2]*/
				$g.imagesLoaded().always(function() { /*[3]*/
					var height = 0;
					$g.each(function(){
						$(this).height(''); /*[4]*/
						if(height < $(this).height() ){
							height = $(this).height();
						}						
					});
					$g.each(function(){
						$(this).height(height);
					})
				});
			}
		})
	}

	/**********************************
	Load Background Videos

	Notes
	[1] 	No video for mobile or IE
	[2] 	Play at randomize starting points
	[3][4]	Wait until the video has started playing at the statpoint before showing everything
	[5][6] 	Need both of these because if they don't have JS enabled the stupid html video controls
			still show up in Chrome
	[7] 	Pause the video when the user moves to a different tab. Play again when they return
	**********************************/
	function videoBackgrounds(){
		$('.wc-video-background').each(function(){
			var params = $(this).data('bgVidParams');
			if(!params || !params.fallbackImageBox){
				revert('Video Error: insufficient parameters');
				return false;
			}
			s.bgVideos.push(params);
			var i = 0;
			var theVideo = $(params.theVideo);
			theVideo.on('error',function(){
				theVideo.remove();
				revert('Video failed to load');
			});

			if(s.windowWidth > s.breakpoints.sm && !s.isIE){ /*[1]*/
				var path = '';
				if(Modernizr.video && Modernizr.video.webm && params.videoPaths.webm){
					path = params.videoPaths.webm;
				}
				else if(Modernizr.video && Modernizr.video.ogg && params.videoPaths.ogg){
					path = params.videoPaths.ogg;
				}
				else if(Modernizr.video && Modernizr.video.h264 && params.videoPaths.h264){
					path = params.videoPaths.h264;
				}
				else{
					theVideo.remove();
					revert('No working video format');
				}
				if(params.startTimes && params.startTimes.length > 0){ /*[2]*/
					var time = params.startTimes[Math.floor(Math.random()*params.startTimes.length)];
					path += '#t=' + time;
					theVideo.on('timeupdate',function(){ /*[3]*/
						if(theVideo.get(0).currentTime > time){
							theVideo.css({'opacity':'1'}); /*[5]*/
							$(params.fallbackImageBox).css({
								'transition': 'all .3s',
								'opacity':'1'}); /*[6]*/
							theVideo.off('timeupdate');
						}
					});
				}
				else{
					theVideo.on('timeupdate',function(){ /*[4]*/
						if(theVideo.get(0).currentTime > 0){
							theVideo.css({'opacity':'1'});
							$(params.fallbackImageBox).css({
								'transition': 'all .3s',
								'opacity':'1'});
							theVideo.off('timeupdate');
						}
					});
				}
				theVideo.attr('src',path);
				$(document).on({/*[7]*/
					'show':function(){theVideo.get(0).play();},
					'hide':function(){theVideo.get(0).pause();}
				});
			}
			else{
				theVideo.remove();
				revert();
			}

			function revert(message){
				if(message){log(message);}
				if(params && params.fallbackImageBox){
					$(params.fallbackImageBox).css({
						'transition': 'all .3s',
						'opacity':'1'});
				}
			}
		});
	}


	/**********************************
	Random background images

	Notes
	[1] 	In the <script> tag we hide the element and then show it here, that way
			we can have a fallback bg image for people with js turned off, and it
			won't flash before switching to the randomized image.
	**********************************/
	function randomBGImage(){
		$('.wc-random-bg-image').each(function(){
			try{
				var images = $(this).data('bgImages');
				var i = WcFun.randomInt(0,images.length - 1 );
				$(this).css({'background-image':'url("'+images[i]+'")'});
				$(this).css('visibility', 'visible');
			}
			catch(e){
				log('randomBGImage() error: ' + e);
			}
		});
	}
	

	/**********************************
	A function for using an Ingeniux folder URL in javascript. 

	Example - igxUrl('some/folder?Preview=true&IncludeAllPages=true','/filename.png') => 'some/folder/filename.png?Preview=true&IncludeAllPages=true'

	See the map tiles in map-control.js for one place it's being used
	**********************************/
	function igxUrl(url,str){
		var newUrl;
		if(url.indexOf('?') !== -1){
			newUrl = url.slice(0,url.indexOf('?')) + str + url.slice(url.indexOf('?'),url.length);
		}
		else{
			newUrl = url + str;
		}
		return(newUrl);
	}


	/****************************************
	Open .pdfs, .docs and non-whitman urls in new window
	****************************************/
	$("a[href^='http']").each(function() {
		if ($(this).attr("href").indexOf("whitman.edu") == -1) {
			$(this).attr("target", "_blank");
		}
	});
	$('a[href$=".doc"], a[href$=".pdf"]').attr('target', '_blank');


	/***************************************
	Video Component - call fitvids to enable responsive video 

	Notes
	[-] 	For this to work well, you probably need the iframe to have height and
			width properties (like it does by default when copying from youtube)
	[1] 	You can use fitvids on other iframes by adding the .wc-fit-vids class to
			the iframe
	[2] 	...or you can add .wc-fit-vids-box class to the parent, since for some
			reason Ingeniux's tinyMCE implementation strips classes off of 
			iframes.
	***************************************/
	$(".wc-content-wrap").fitVids();
	$(".wc-content-wrap").fitVids({ /*[1]*/
		customSelector: ".wc-fit-vids"
	});
	$(".wc-fit-vids-box").fitVids({ /*[2]*/
		customSelector: "iframe"
	});

	/**********************************
	Add captions to any images with a .wc-caption... classes

	Notes
	[1] 	Need to wait until all images are loaded before this runs, otherwise firefox (and
			maybe safai?) return incorrect measurements.
	[2] 	Wrap the image in a div, and give the div the same css and classes as the image
	[3] 	Remove the image's css and classes because we've added them to the containing
			DIV instead
	**********************************/
	function addCaptions(){
		var images = $('.wc-caption-image, .wc-caption-image-left, .wc-caption-image-right');
		$(window).load(function(){ /*[1]*/
			for (var i = 0; i < images.length; i++) {
				var image = $(images[i]);
				image.wrap('<figure style="'+WcFun.emptyIfNull(image.attr('style'))+ ' width:' + image.outerWidth()+'px;" class="'+WcFun.emptyIfNull(image.attr('class'))+'"></figure>');/*[2]*/
				image.attr('style','').attr('class',''); /*[3]*/
				if(image.attr('title')){
					image.parent().append('<figcaption class="wc-image-caption">'+image.attr('title')+'</figcaption>');
				}
			}
		});
	}

	/**********************************
	Setup Lightboxes

	Info
			Uses Bootstrap's modal plugin. Loops through all of the lightbox links on the page
			and makes lightboxes for the images inside them.

	Notes
	[1] 	You can pass it a specific element to create a lightbox for, otherwise it
			runs for all lightbox links on a page.
	[2] 	Uses the image the link points to for the lightbox image
	[3] 	If the link doesn't point to an image, use the image itself as a fallback
	[4] 	Build the lightbox
	[5] 	Using s.lightBoxCount for unique ID's instead of a timestamp becuase the timestamp was
			still resulting in duplicate ID's
	[6] 	Bind the modal method to the lightbox links
	**********************************/
	function lightboxSetup(element){
		var lbLinks = $();
		if (element){
			lbLinks = lbLinks.add(element); /*[1]*/
		}
		else{
			lbLinks = $('a.wc-lightbox-link');
		}
		for (var i = 0; i < lbLinks.length; i++) {
			if($($(lbLinks[i]).find('img')).length > 0){
				var image = $($(lbLinks[i]).find('img')).first();
				var bigImagePath = $(lbLinks[i]).attr('href'); /*[2]*/
				var urlChecks = ['http://#','https://#','#'];
				var useFallback = 0;
				for (var k = 0; k < urlChecks.length; k++) { 
					if(bigImagePath === urlChecks[k]){
						useFallback++;
					}
				}
				if(useFallback > 0){
					bigImagePath = image.attr('src'); /*[3]*/
				}
				var captionMarkup = (image.attr('title') && image.attr('title').length > 0)?'<p class="wc-image-caption">'+image.attr('title')+'</p>' :'';
				var lightBox = $( /*[4]*/
					'<div class="modal fade wc-modal" id="wc-lightbox-'+s.lightBoxCount+'" tabindex="-1" role="dialog" aria-labelledby="ImageLightbox">'+ /*[5]*/
						'<div class="wc-lightbox">'+
							'<img  src="'+bigImagePath+'">'+
							captionMarkup+
						'</div>'+
					'</div>');
				$('body').append(lightBox);
				$(lbLinks[i]).data({'lightBoxID':s.lightBoxCount});
				$(lbLinks[i]).click(function(event){ /*[6]*/
					event.preventDefault();
					var lightBoxID = $(this).data('lightBoxID');
					if(!isNaN(lightBoxID)){
						$('#wc-lightbox-' + lightBoxID).modal({keyboard:true});
					}
				});
				s.lightBoxCount++;
			}
		}
	}
	

	/**********************************
	Ellipsis - truncates text in an element

	Notes
	[-] 	To use these, you'll need to explicitely give the element data-ellipsis-X values
			for every breakpoint you want ellipsis for.
			e.g. <p class="wc-description" data-ellipsis-xs="80" data-ellipsis-sm="100"...> 
	**********************************/
	function applyEllipsis(){
		if(s.breakpointChecks.lg){
			$('[data-ellipsis-lg]').each(function(){
				var count = $(this).attr('data-ellipsis-lg');
				if (count < $(this).text().length){
					$(this).text($(this).text().substring(0,count) + '...');
				}
			});
		}
		else if(s.breakpointChecks.md){
			$('[data-ellipsis-md]').each(function(){
				var count = $(this).attr('data-ellipsis-md');
				if (count < $(this).text().length){
					$(this).text($(this).text().substring(0,count) + '...');
				}
			});
		}
		else if(s.breakpointChecks.sm){
			$('[data-ellipsis-sm]').each(function(){
				var count = $(this).attr('data-ellipsis-sm');
				if (count < $(this).text().length){
					$(this).text($(this).text().substring(0,count) + '...');
				}
			});
		}
		else if(s.breakpointChecks.xs){
			$('[data-ellipsis-xs]').each(function(){
				var count = $(this).attr('data-ellipsis-xs');
				if (count < $(this).text().length){
					$(this).text($(this).text().substring(0,count) + '...');
				}
			});
		}
	}

	/**********************************
	Apply Hight Contrast Styles
	**********************************/
	function highContrast(){
		var link 	= document.createElement('link');
		link.rel  	= 'stylesheet';
		link.href 	= s.cssFolderPath + 'wc-high-contrast.css';
		$('head').append(link);
	}


	/**********************************
	Check if an image has finished loading
	**********************************/
	function checkImageLoaded(img){
		if (!img.complete) {
			return false;
		}
		if (typeof img.naturalWidth !== "undefined" && img.naturalWidth === 0) {
			return false;
		}
		return true;
	}

	/**********************************
	Returns a promise that resolves when the image is loaded
	**********************************/
	function imageLoaded(img){
		return new Promise(function(resolve,reject){
			var checkInterval = setInterval(function(){
					if(checkImageLoaded(img)){
						clearInterval(checkInterval);
						resolve();
					}
				},50);
		});
	}

	/****************************************
	Just a console.log() function for debugging.
	****************************************/
	function log(thing){
		if (s.isIE === false || s.ieVersion >= 10){
			if(s.urlParameters['dev'] === '1'){
				console.log(thing);
			}
		}
	}

	/**********************************
	Add a parameter to the URL

	Notes
	[1] 	Add the new variable to the array of existing URL parameters
	[2] 	Rebuild the URL with the updated list of URL parameters, this way 
			we don't lose any when we add a new one.
	[3] 	Adding the url parameters to the state object, so they can be retrieved
			if somebody uses the "back" button.
	**********************************/
	function addUrlParameter(name, val){
		if(WcFun.nullIfEmpty(val)){
			s.urlParameters[name] = val; /*[1]*/
		}
		else{
			delete s.urlParameters[name];
		}
		var newUrl = window.location.pathname;
		if(Object.keys(s.urlParameters).length > 0){ /*[2]*/
			newUrl+= '?';
			Object.keys(s.urlParameters).forEach(function(key,i){
				if(i>0){
					newUrl+='&';
				}
				newUrl += (key + '=' + s.urlParameters[key]);
			});
		}
		if (s.isIE === false || s.ieVersion >= 10){
			history.pushState({'urlParameters':s.urlParameters}, 'Map', newUrl); /*[3]*/
		}
	}


	/**********************************
	Remove a url parameter
	**********************************/
	function removeUrlParameter(name){
		addUrlParameter(name,'');
	}

	/**********************************
	Adds new css rules

	Notes
	[-] 	You probably don't want to add this to clean() or anything else that fires repeatedly, otherwise
			you're going to have tons of divs added with conflicting CSS rules, and that's just tacky.
	**********************************/
	function addCSS(rule){
		var div = $('<div />',{
				html: '<style>' + rule + '</style>',
				class:'wc-style-box'
			})
			.attr('aria-hidden','true')
			.appendTo('body');
	}

	/**********************************
	Append a stylesheet to the head

	Notes
	[-] 	Note that these styles won't take effect unti lafter all JS has run
	[-] 	Tried numerous approaches to having a callback when the stylesheet was
			loaded, or even just confirming that the url was valid before loading it,
			never found a good solution. See https://www.wrike.com/open.htm?id=114779499
	**********************************/
	function addStylesheet(url){
		if(url.indexOf('http') !== 0){
			url = s.cssFolderPath + url;
		}
		var abort = 0;
		if(s.addedStylesheets.indexOf(url) === -1){
			$('head').find('link').each(function(){
				if($(this).attr('href') === url){
					abort ++;
				}
			});			
			if(abort === 0){
				var link = $('<link>',{href:url,rel:'stylesheet'});
				$('head').append(link);
				s.addedStylesheets.push(url);
			}
		}
	}

	/**********************************
	Add a script

	Notes
	[-] 	This returns an ES6 promise
	[1] 	Add the prebuilt folder path if it's one of our scripts
	[2] 	Using $.ajax instead of $.getScript() here so we can use caching. 
	[3] 	Aside from the logged error we want this to still return a success 
			so it doesn't thwart callbacks.
	**********************************/
	function addScript(url){
		return new Promise(function(resolve,reject){
			if(url.indexOf('http') !== 0){
				url = s.jsFolderPath + url; /*[1]*/
			}
			if(s.addedScripts.indexOf(url) === -1){
				s.addedScripts.push(url);
				$.ajax({ /*[2]*/
						url: url,
						dataType: 'script',
						cache: true
					})
					.done(function(){
						resolve();
					})
					.fail(function(){
						log('Globals.addScript Error: failed to load this script - ' + url);
						reject();
					});
			}
			else{
				log('Globals.addScript: script already added - '  + url);
				resolve(); /*[3]*/
			}
		});
	}

	/**********************************
	Add a group of scripts/stylesheets

	Info
	[-] 	Pass this funciton an array of JS and CSS file urls and it will load them all
			and return a promise that resolves after all of the JS files are loaded. See
			image-gallery-control for an example of how it's used.
			
	Notes
	[1] 	Note that there's no promise/callback for these, so the success/failure of
			loading the css files doesn't effect this at all (see notes for addStylesheet)
	[2] 	Note that if any of these fail this promise fails, even though some might
			have succeeded in loading
	**********************************/
	function getStuff(urls){
		return new Promise(function(resolve,reject){
			var urls_css = urls.filter(function(u){return u.indexOf('.css') !== -1});
			var urls_js = urls.filter(function(u){return u.indexOf('.js') !== -1});
			urls.forEach(function(s){
				if(urls_js.indexOf(s) === -1 && urls_css.indexOf(s) === -1){
					log('Globals.getStuff Error: don\'t recognize this url as CSS or JS - ' + s);
				}
			})
			if(urls_css.length > 0){
				urls_css.forEach(function(url){
					addStylesheet(url); /*[1]*/
				})				
			}
			if(urls_js.length > 0){
				var jsPromises = [];
				urls_js.forEach(function(url){
					jsPromises.push(addScript(url));
				})
				Promise.all(jsPromises) /*[2]*/
					.then(resolve)
					.catch(reject);
			}
			else if (urls_css.length > 0){
				resolve();
			}
			else{
				log('Globals.getStuff Error: no files provided were recognized as JS or CSS');
				reject();
			}
		});
	}

	/****************************************
	Return public API
	****************************************/
	return{
		s:s,
		getWindowWidth:function(){return s.windowWidth;},
		getWindowHeight:function(){return s.windowHeight;},
		breakpoints:s.breakpoints,
		breakpointChecks:s.breakpointChecks,
		videoBackgrounds:videoBackgrounds,
		init:init,
		log:log,
		addCSS:addCSS,
		updateMeasurements:updateMeasurements,
		igxUrl:igxUrl,
		lightboxSetup:lightboxSetup,
		addUrlParameter:addUrlParameter,
		removeUrlParameter:removeUrlParameter,
		ieFixes:ieFixes,
		checkImageLoaded:checkImageLoaded,
		imageLoaded:imageLoaded,
		addStylesheet:addStylesheet,
		addScript:addScript,
		getStuff:getStuff,
		sameHeight:sameHeight,
		collapseButtons:collapseButtons,
		clickTriggers:clickTriggers
	};
})();