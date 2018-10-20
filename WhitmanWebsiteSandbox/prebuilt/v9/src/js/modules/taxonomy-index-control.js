/**********************************
#TAXONOMY-LIST-CONTROL

Notes
[-] 	This is the module for managing our taxonomy indexes. Most of 
		the relevant code for how taxonomy indexes work is is in the taxonomy index
		factory function - objects/taxonomy-index.js. This module is primarily for
		finding them on a page and setting them up.
**********************************/
var TaxonomyIndexControl = (function(){
	'use strict';
	
	/****************************************
	Settings
	****************************************/
	var s = {
		componentClass:'.wc-taxonomy-index-component',
		components:[]
	};

	/****************************************
	Initialize the module
	****************************************/
	function init() {
		findComponents();
		s.components.forEach(function(c){
			c.setup();
		});
	}

	/**********************************
	Find components, create objects for them
	**********************************/
	function findComponents(){
		$(s.componentClass).each(function(){
			var data = $(this).data('tnParams');
			if(data){
				if(WcFun.toBool(data.useUrlParams) && s.components.length > 0){
					log('Taxonomy List Control Error: Already using url parameters for a taxonomy list on this page, removing this option');
					data.useUrlParams = 'false';
				}
				var newThing = TaxonomyIndex(data,$(this));
				s.components.push(newThing);
			}
		});
	}

	/****************************************
	Return public API
	****************************************/
	return {
		s:s,
		init:init
	};
})();