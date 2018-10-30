/**********************************
#CARD-COMPONENT-FACTORY-FUNCTION

Info
[-] 	This factory function creates CardComponent objects, which are components
		that open a modal box when you click on a button. Note that this is only
		used for creating Card Components that are not in a Card Gallery. For
		the js for Card Components within a Card Gallery, see card-gallery.js.
[-] 	For more info on this confusing setup, see the "Card Component"
		section here - https://wiki.whitman.edu/display/WEB/Component+Index

[-] 	Example Usage:
			var myCardComponent = CardComponent({
				$element:$('#someCardComponent'),
				modal:s.modal
			});
			myCardComponent.setup();


Notes
[1] 	The object that's being returned.
**********************************/
var CardComponent = function(params){
	'use strict';

	var o = {}; /*[1]*/

	var d = params.$element.data('mcParams');

	o.state = {
		$element:params.$element,
		modalContent:d.modalContent,
		$button:$(d.button).first(),
		ariaLabel:d.modalAriaLabel,
		modal:params.modal,
		openCallback:d.openCallback
	}

	o.setup = function(){
		o.state.$button.click(function(event) {
			o.state.modal.updateContent({
				ariaLabel:o.state.ariaLabel,
				content:o.state.modalContent
			})
			if(o.state.openCallback){o.state.openCallback();}
			o.state.modal.open();
		});
	}

	return o;
};