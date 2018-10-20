/**********************************
#MODAL-FACTORY-FUNCTION

Info
[-] 	This factory function creates Modal objects using Bootstrap
		modals.
[-] 	Example Usage:
			var myModal = Modal({
				template: '<div class="wc-lightbox wc-card-lightbox modal-dialog" role="document">${content}</div>',
				id:"someID",
				content:''
			});
			myModal.updateContent({ //Note that this needs to happen each time you open the modal
				ariaLabel:'This is the ARIA label',
				content:'<p>This is some content for the modal</p>'
			});
			myModal.open();

Notes
[1] 	The object being returned
**********************************/
var Modal = function(params){
	'use strict';

	var o = {}; /*[1]*/

	/**********************************
	State object

	Notes
	[1] 	Fallback standard light box template
	**********************************/ 
	o.state = {
		template:params.template?params.template:'<div class="wc-lightbox modal-dialog" role="document">${content}</div>', /*[1]*/
		id:params.id + '_modal',
		$element: $('<div class="modal fade wc-modal '+params.modalClass+'" id="'+params.id + '_modal" tabindex="-1" role="dialog" aria-hidden="true"></div>'),
		content:params.content,
		closeButton:params.closeButton
	};


	/**********************************
	Setup

	Notes
	[1] 	For a white backgrop, we need to do this since we don't have control
			over the backgrop markup itself.
	[2] 	Empty the modal after it's closed
	[3] 	If there's a close button, add its bindings
	**********************************/
	$('body').append(o.state.$element);
	o.state.$element.on('hide.bs.modal',function(){ /*[2]*/
		o.state.$element.empty();
	});
	if(o.state.closeButton){ /*[3]*/
		o.state.$element.on('click',o.state.closeButton,function(e){
			e.preventDefault();
			o.state.$element.modal('hide');
		});
	}

	/**********************************
	Update the content of the modal

	Notes
	[1]		Add an aria label for accessibility if one is provided
	**********************************/ 
	o.updateContent = function(params){
		o.state.content = params.content;
		if (params.ariaLabel) {
			o.state.ariaLabel = params.ariaLabel;
			o.state.$element.attr('aria-label',o.state.ariaLabel);/*[1]*/
		}
		o.state.$element.html(o.state.template.template({content:o.state.content,svgPath:Globals.s.svgFilePath}));
	}

	/**********************************
	Open the modal
	**********************************/
	o.open = function(){
		o.state.$element.modal();
	}

	return o;
}