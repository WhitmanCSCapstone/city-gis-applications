/**********************************
#SLIDER-CONTROL

Info
		Controls for slideshows, mobile sliders, and anything else that
		uses Slick Slider - https://github.com/kenwheeler/slick.

**********************************/

var SliderControl = (function(){
	'use strict';

	/**********************************
	Settings
	
	Notes
	[1] 	Note that or slide shows, the default width is hard-coded in here as the width
			of a detail page's main content (roughly 3/4 the width of a page). This is what's
			used to calculate the aspect ratio, so slideshows won't have the correct height
			if they're used in places with a width other than that.
	[2] 	The default ratio. See the resize() function for details on how this works
	**********************************/
	var s = {
		sliderclass:'.wc-slider',
		slideShows:[],
		categorySliders:[],
		mobileSliders:[],
		defaultWidth:846, /*[1]*/
		defaultRatio: 310/846 /*[2]*/
	};

	/**********************************
	Initialize

	Notes
	[1][2][3] 	Separating these out so we can control when they're einitialized. Because of
				how Slick works, it's important for the category sliders to be initalized 
				after their children mobileSliders.
	[4] 		If there are nested sliders, make sure to remove the script tags otherwise
				slick treats them like slides.
	**********************************/
	function init() {
		if($(s.sliderclass).length > 0){
			$(s.sliderclass).each(function(){
				var wcParams 		= $(this).data('wcParams');
				var slickParams 	= $(this).data('slickParams');
				if(wcParams){
					if (wcParams.type == 'slideshow' && slickParams){
						s.slideShows.push({
							slider:$(this),
							wcParams:wcParams,
							slickParams:slickParams
						});
					}
					else if(wcParams.type == 'mobileSlider'){
						slickParams = slickParams?slickParams:{};
						s.mobileSliders.push({
							slider:$(this),
							wcParams:wcParams,
							slickParams:slickParams
						});
					}
					else if(wcParams.type == 'categorySlider'){
						s.categorySliders.push({
							slider:$(this),
							wcParams:wcParams,
							slickParams:slickParams
						});
					}
					else{
						log('Slider Error: There was a problem with the parameters');
					}
				}
			});
			for (var i = 0; i < s.slideShows.length; i++) {/*[1]*/
				var slideShow = s.slideShows[i];
				makeSlideshow(slideShow.slider,slideShow.wcParams,slideShow.slickParams,i);
			}
			for (var k = 0; k < s.mobileSliders.length; k++) { /*[2]*/
				var mobileSlider = s.mobileSliders[k];
				makeMobileSlider(mobileSlider.slider,mobileSlider.wcParams,mobileSlider.slickParams);
			}
			for (var j = 0; j < s.categorySliders.length; j++) {/*[3]*/
				var catSlider = s.categorySliders[j];
				$(catSlider.slider).find('script').remove(); /*[4]*/
				makeCategorySlider(catSlider.slider,catSlider.wcParams,catSlider.slickParams);
			}
			subscriptions();
		}
	}

	/**********************************
	Pub/Sub subscriptions

	Notes
	[1] 	Run this whenever the window size changes (watching Globals.watchWindowSize)
	**********************************/
	function subscriptions(){
		$.subscribe('window.newMeasurements',function(){
			resize('all'); /*[1]*/
		});
	}


	/**********************************
	Make Slideshow

	Notes
	[1] 	Necessary to filter out the events that propagate up from the nested sliders
	[2] 	Unhiding the content once the slider is done loading
	**********************************/
	function makeSlideshow(slider,wcParams,slickParams,index){
		resize(index);
		$(slider)
			.on('init',function(event, slick){
				if(slick.$slider.attr('id') == slider.attr('id')){ /*[1]*/
					$(this).removeClass('wc-invisible'); /*[2]*/
				}
			});
		$(slider).slick(slickParams);
	}

	/**********************************
	Make a mobile slider, these only become sliders on the xs breakpoint

	Notes
	[1] 	Necessary to filter out the events that propagate up from the nested sliders
	[2] 	Unhiding the content once the slider is done loading
	[3] 	Adding this so the slides don't have focus styles.
	**********************************/
	function makeMobileSlider(slider,wcParams,slickParams){
		$(slider)
			.on('init',function(event, slick){
				if(slick.$slider.attr('id') == slider.attr('id')){ /*[1]*/
					$(this).removeClass('wc-invisible'); /*[2]*/
				}
			});
		$(slider).slick({
			responsive:[
				{
					breakpoint:9000,
					settings:"unslick"
				},
				{
					breakpoint:768,
					settings:{
						slidesToShow:1,
						dots: true,
						arrows: false,
						speed:300,
						autoplay: wcParams.autoplay,
						autoplaySpeed: wcParams.autoplaySpeed
					}
				}
			],
			accessibility: false /*[3]*/
		});
	}

	/**********************************
	Make a category slider

	Notes
	[1] 	Necessary to filter out the events that propagate up from the nested sliders
	[2] 	Unhiding the content once the slider is done loading
	[3] 	Make the other categories inactive and this one active
	[4] 	Adding this so the slides don't have focus styles.
	**********************************/
	function makeCategorySlider(slider,wcParams,slickParams){
		wcParams.selectButtons 	= $(wcParams.catBox).find('.wc-slider-category');
		wcParams.leftArrow 		= $(wcParams.catBox).find('.wc-left-arrow').first();
		wcParams.rightArrow 	= $(wcParams.catBox).find('.wc-right-arrow').first();
		$(slider)
			.on('init',function(event, slick){
				if(slick.$slider.attr('id') == slider.attr('id')){ /*[1]*/
					$(this).removeClass('wc-invisible');/*[2]*/
				}
			})
			.on('beforeChange',function(event, slick, currentSlide, nextSlide){
				if(slick.$slider.attr('id') == slider.attr('id')){ 
					$(wcParams.selectButtons).removeClass('wc-active');	/*[3]*/
					$(wcParams.selectButtons[nextSlide]).addClass('wc-active');
				}
			});
		$(slider).slick({
			dots:false,
			arrows:false,
			draggable:false,
			swipe:false,
			autoplay:false,
			accessibility: false /*[4]*/
		});
		bindMobileActions($(slider),wcParams);
	}

	/**********************************
	Bind mobile UI Actions

	Notes
	[1[[2] 	We need to bind these ourselves, if slick does it they add css we don't want
	**********************************/
	function bindMobileActions(slider,wcParams){
		if(wcParams.selectButtons){
			wcParams.selectButtons.click(function(){
				var slide = $(this).data('slide-control').slide;
				slider.slick('slickGoTo',slide);
			});
		}
		if(wcParams.leftArrow){
			wcParams.leftArrow.click(function(){/*[1]*/
				slider.slick('slickPrev');
			});
		}
		if(wcParams.rightArrow){
			wcParams.rightArrow.click(function(){/*[2]*/
				slider.slick('slickNext');
			});
		}
	}

	/**********************************
	Next Slide
	**********************************/
	function nextSlide(data){
		var slider = $('.'+ data.slider);
		slider.slick('slickNext');
		toggleCategory(slider,data);
	}
	
	/**********************************
	Previous Slide
	**********************************/
	function prevSlide(data){
		var slider = $('.'+ data.slider);
		slider.slick('slickPrev');
		toggleCategory(slider,data);
	}
		
	/**********************************
	Toggle the active/not active class
	**********************************/
	function toggleCategory(slider, data){
		var currentSlide = slider.slick('slickCurrentSlide') + 1;
		var thing = '{"slider":"'+data.slider+'","slide":"'+currentSlide+'"}';//Using data here to get the string of the slider's class, not the slider itself
		s.selectButtons.removeClass('wc-active');
		s.selectButtons.filter("[data-slide-control='" + thing + "']").addClass('wc-active'); 
	}

	/**********************************
	Resize the Slider according to its aspect ratio

	Notes
	[-] 	This is used to resize the slider for different screen sizes. To do this
			we need to know its initial aspect ratio, and then use that to set its height
			at smaller breakpoints.
	[1][2] 	The aspect ratio is just the height that the user sets divided by the default
			width (roughtly 3/4 the width of the page). Note that this means if they put a slideshow
			in a column that's skinnier than that, the height will be adjusted accordingly, and it won't
			have the exact pixel height they set in Ingeniux.
	**********************************/
	function resize(index){ 
		var slideShow,slideBoxes, slideWidth, ratio, slideHeight;
		if (index === 'all'){
			for(var i=0;i<s.slideShows.length;i++){
				slideShow 	= s.slideShows[i];
				slideBoxes = $(slideShow.slider).find('.wc-slide-box');
				slideWidth 	= slideBoxes.first().width();
				if(slideShow.wcParams.height){
					ratio = slideShow.wcParams.height / s.defaultWidth; /*[1]*/
				}
				else{
					ratio = s.defaultRatio; 
				}
				slideHeight = slideWidth * ratio;
				slideBoxes.height(slideHeight);
			}
		}
		else{
			slideShow 	= s.slideShows[index];
			slideBoxes 	= $(slideShow.slider).find('.wc-slide-box');
			slideWidth 	= slideBoxes.first().width();
			if(slideShow.wcParams.height){
				ratio = slideShow.wcParams.height / s.defaultWidth; /*[2]*/
			}
			else{
				ratio = s.defaultRatio; 
			}
			slideHeight = slideWidth * ratio;
			slideBoxes.height(slideHeight);
		}
	}

	/**********************************
	Cleanup unnecessary aria attributes
	
	Notes
	[1] 	aria-describedby - don't think these are necessary and
			when there are no nav dots they break compatibility
	**********************************/
	function ariaCleanup(){
		/**********************************
		- can't really use this yet because it looks like init fires before the
		aria attributes are added, waiting on slick to fix this - https://github.com/kenwheeler/slick/pull/2030
		- after that's fixed, add this to .on('init',function(){....}) when you create the
		sliders
		**********************************/
		$('.slick-slide').each(function(){
			if($(this).attr('aria-describedby') !== undefined){
				$(this).removeAttr('aria-describedby');
			}
		});
	}


	// Return the public API
	return{
		s:s,
		init:init,
		resize:resize
	};
})();
