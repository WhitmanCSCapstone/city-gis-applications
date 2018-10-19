/**********************************
#WC-DROPDOWN-SLIDER-CONTROL

Info
	Controls for hiding/showing elements for the dropdown-slider.

Notes
[-]		Obviously Bootstrap does a lot of this, but there is enough that
		we want to do that's slightly different that I decided to create this instead. 
[-] 	Uses Bootstrap's .collapse() method.
[-]		Example Button Markup:
			<button class="wc-dropdown-slider-button wc-profile-slider-button"
				data-target="#wc-profile-slide-1"
				data-button-group="wc-profile-slider-button"
				data-target-group="wc-profile-slide">
[-]		Example Target Markup:
			<div class="wc-dropdown-slide wc-profile-slide collapse in" id="wc-profile-slide-1">
[-]		See the notes for showHide() for how to use the data attributes.
**********************************/

var DropdownSliderControl = (function(){

	/****************************************
	Settings
	****************************************/
	var s = {
		buttons:$('.wc-dropdown-slider-button'),
	};
	
	/****************************************
	Initialize the module
	****************************************/
	function init(){
		bindUIActions();
	}

	/****************************************
	Bind UI actions
	****************************************/
	function bindUIActions(){
		s.buttons.click(function(){
			showHide(this);
		});
	}

	/****************************************
	Shows/hides a target, hides the others

	Notes
	[1]		Points to the thing to show/hide
	[2]		If you want a group of targets to automatically hide when one
			of them is shown, give them all a class and put it in data-target-group.
	[3]		Likewise, if you have a group of buttons that you want to automatically
			untoggle/toggle with the wc-active class when one of them is toggled,
			give them all a class and put it in data-button-group.
	****************************************/
	function showHide(thing){
		var target 			= $(thing).data('target'); /*[1]*/
		var targetGroup 	= $(thing).data('target-group'); /*[2]*/
		var buttonGroup		= $(thing).data('button-group'); /*[3]*/
		$('.'+buttonGroup).removeClass('wc-active');
		$('.'+targetGroup).not(target).collapse('hide');
		$(thing).addClass('wc-active');
		$(target).collapse('show');
	}

	return {
		s:s,
		init:init
	};
})();