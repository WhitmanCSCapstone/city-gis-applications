/**********************************
#CARD-COMPONENT-CONTROL

Info
		This module manages Card Components that are not in a Card Gallery. For
		the js for Card Components within a Card Gallery, see card-gallery.js.
[-] 	For more info on this confusing setup, see the "Card Component"
		section here - https://wiki.whitman.edu/display/WEB/Component+Index

Notes
[-] 	See card-component.js for the CardComponent factory function
[1] 	Adding these so you can set these variables in the HTML of the page
		to change how the lightboxes look. Example: "At the Hub" article x42910
**********************************/
var CardComponentControl = (function(){
	'use strict';

	var s = {
		componentClass:'.wc-card-component',
		template:'',
		closeButtonClass:'',
		components:[],
		modal:null
	};


	/**********************************
	Initialize the Module

	Notes
	[1] 	Setup templates for special magazine articles (Example: whitman.edu/at-the-hub))
	**********************************/
	function init(){
		if($('html').hasClass('wc-magazine-page') && $('html').hasClass('wc-white-modal')){
			s.closeButtonClass	= 	'.wc-lightbox-close-button';
			s.template 			=	'<div class="wc-lightbox wc-magazine-lightbox wc-body-copy-lightbox modal-dialog" role="document">'+
										'<div class="wc-magazine-lightbox-topbar">'+
											'<button class="wc-lightbox-close-button" role="Close" aria-label="Close">'+
												'<svg viewBox="0 0 32 32">'+
													'<use xlink:href="${svgPath}#icon-menu-x"></use>'+
												'</svg>'+
											'</button>'+
										'</div>'+
										'${content}'+
									'</div>';
		}

		findCardComponents();
	};

	/**********************************
	Find Components

	Notes
	[1] 	For the first component we find, create a modal
	**********************************/ 	
	function findCardComponents(){
		$(s.componentClass).each(function() {
			if($(this).data('mcParams')){
				if(!s.modal){
					s.modal = Modal({ /*[1]*/
						id:'wc-card-component-modal',
						template:s.template,
						closeButton:s.closeButtonClass
					});
				}
				var mc = CardComponent({
					$element:$(this),
					modal:s.modal
				});
				mc.setup();
				s.components.push(mc);
			}
		});
	}

	return {
		s:s,
		init:init
	}
})();