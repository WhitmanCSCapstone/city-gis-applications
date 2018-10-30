/**********************************
#MENU-CONTROL

Info
[-] 	This is the module for controlling how the mobile menu and
		search show and hide. For the rest of the JS that handles
		search, see SearchControl.js.
**********************************/
var MenuControl = (function(){

	/**********************************
	Settings
	**********************************/
	var s = {
		$mainNav:$('#wc-main-nav'),
		mobileNavCollapsed:1,
		$mobileNavButton:$('#wc-mobile-nav-button'),
		$mobileSearchButton:$('#wc-mobile-search-button'),
		$searchBox:$('#wc-search-box'),
		mobileSearchCollapsed:1
	}

	/**********************************
	Initialize the module
	**********************************/
	function init(){
		bindings();
	}

	/**********************************
	Bindings
	**********************************/
	function bindings(){
		s.$mobileNavButton.click(function(){
			mobileNavToggle();
		});
		s.$mobileSearchButton.click(function(){
			mobileSearchToggle();
		});
	}

	/**********************************
	Show/hide the main navigation for mobile

	Notes
	[1] 	It's important for this to be the first thing that happens, for 
			note [4] to work right.
	[2] 	When it's being opened, use autoshrink to hide everything else.
	[3] 	If the search is open, hide it.
	[4] 	When it's being closed, show everything else again. Unless search 
			is open, in which case don't do anything because we want stuff to stay
			hidden until it's closed.
	**********************************/
	function mobileNavToggle(select){
		if(select == 'reset'){
			s.$mainNav.css({'display':''});
			s.mobileNavCollapsed = 1;
			s.$mobileNavButton.removeClass('wc-toggled').attr('aria-expanded','false');
			autoShrink('unshrink');
		}
		else{
			if(s.mobileNavCollapsed === 1){
				s.mobileNavCollapsed = 0; /*[1]*/
				autoShrink('shrink'); /*[2]*/
				s.$mainNav.slideDown();
				s.$mobileNavButton.addClass('wc-toggled').attr('aria-expanded','true');
				if (s.mobileSearchCollapsed === 0){ /*[3]*/
					mobileSearchToggle();
				}
			}
			else{
				s.mobileNavCollapsed = 1; /*[1]*/
				s.$mainNav.slideUp();
				if (s.mobileSearchCollapsed == 1){ /*[4]*/
					autoShrink('unshrink');
				}
				s.$mobileNavButton.removeClass('wc-toggled').attr('aria-expanded','false');
			}
		}
	}

	/**********************************
	Show/hide the search box for mobile

	Notes
	[1] 	It's important for this to be the first thing that happens, for 
			note [4] to work right.
	[2] 	When it's being opened, use autoshrink to hide everything else.
	[3] 	If the search is open, hide it.
	[4] 	When it's being closed, show everything else again. Unless search 
			is open, in which case don't do anything because we want stuff to stay
			hidden until it's closed.
	**********************************/
	function mobileSearchToggle(select){
		if(select == 'reset'){
			s.$searchBox.css({'display':''});
			s.mobileSearchCollapsed = 1;
			s.$mobileSearchButton.removeClass('wc-toggled').attr('aria-expanded','false');
			autoShrink('unshrink');
		}
		else{
			if(s.mobileSearchCollapsed === 1){
				s.mobileSearchCollapsed = 0; /*[1]*/
				autoShrink('shrink'); /*[2]*/
				s.$searchBox.slideDown();
				s.$mobileSearchButton.addClass('wc-toggled').attr('aria-expanded','true');
				if (s.mobileNavCollapsed === 0){ /*[3]*/
					mobileNavToggle();
				}
			}
			else{
				s.mobileSearchCollapsed = 1; /*[1]*/
				s.$searchBox.slideUp();
				if (s.mobileNavCollapsed == 1){ /*[4]*/
					autoShrink('unshrink');
				}
				s.$mobileSearchButton.removeClass('wc-toggled').attr('aria-expanded','false');
			}
		}
	}

	/**********************************
	Shrink everything on the page other than the header. Right now just using this
	for the mobile nav and mobile search, to hide everything behind them when they're
	open, and thus collapsing the page to only be as tall as they are.
	**********************************/
	function autoShrink(method){
		if (method == 'shrink'){
			$('body').children(':not(.wc-header)').addClass('wc-mm-collapse');
			$('body').addClass('wc-body-go-blue');
		}
		if (method == 'unshrink'){
			$('body').children(':not(.wc-header)').removeClass('wc-mm-collapse');
			$('body').removeClass('wc-body-go-blue');
		}
	}

	return {
		s:s,
		init:init,
		mobileNavToggle:mobileNavToggle,
		mobileSearchToggle:mobileSearchToggle
	}

})();