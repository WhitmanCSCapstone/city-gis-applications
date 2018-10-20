/**********************************
	
#CLICK-OFF-CONTROL

Info
	Manages the click event handler that detects if you've "clicked off"
	of specific elements to close them. E.g. When you open a dropdown, 
	clicking somehwere else on the page closes it.

**********************************/

var ClickOff = (function(){
	/****************************************
	Settings

	Notes
	[1] 	Array of 'click-off' objects, when these are open, you can click off
			of them and they'll close or do whatever other stuff you specify. See add().
	****************************************/
	var s = {
		clickOffs:[] /*[1]*/
	};

	/****************************************
	Initializes the module
	****************************************/
	function init(){
		bind();
	}

	/****************************************
	Binds the clickoff events

	Notes
	[1] 	Adds a click event handler to the whole page. When the user clicks
			anywhere on the page it loops through each item in s.clickOffs and
			checks to see if the click occurred outside of that item's element(s).
			If so, it runs that item's action.
	[2]		It's important to use a uniquely named index here. Otherwise when it runs
			the item's action that code might contain a for loop with a generic
			index variable (like i, k, etc.) and then you got problems. Definitely
			learned this the hard way.
	****************************************/
	function bind(){ /*[1]*/
		clearClickOffs();
		$('html').click(function(event) {
			for (var clickIndex=0; clickIndex < s.clickOffs.length; clickIndex++){ /*[2]*/
				if (!$(event.target).closest(s.clickOffs[clickIndex].elements).length){
					s.clickOffs[clickIndex].action();
				}
			}
		});
	}

	/****************************************
	Add items to the clickOffs array

	Notes
	[1]		elements 	- Jquery selector for element(s) 
	[2]		action 		- The function to run when you click off of that element
	****************************************/
	function add(theElements,theAction){
		var thing = {
			elements:theElements, /*[1]*/
			action:theAction /*[2]*/
		};
		var cancel = 0;
		for (var i=0;i<s.clickOffs.length;i++){
			if (thing.elements == s.clickOffs[i].elements){
				cancel = 1;
			}
		}
		if (cancel === 0){
			s.clickOffs.push(thing);
		}
	}

	/****************************************
	Remove item from clickOffs array

	Notes
	[-]		When adding a clickoff element, you can add ClickOff.remove()
			to its action so after it's triggered it removes itself from the 
			clickOffs[] array. Think this through though, if you have multiple
			clickOff's for a given element this can be problematic.
	****************************************/
	function remove(theElements){
		log('removing clickoff listener');
		for (var i = 0; i<s.clickOffs.length; i++){
			if (s.clickOffs[i].elements[0] == theElements[0]){
				log('found it - removing');
				s.clickOffs.splice(i,1);
			}
		}
	}

	/****************************************
	Clear all clickOffs from html. 

	Notes
	[-]		Be careful with this, might be other scripts on the page that 
			rely on global click events.
	****************************************/
	function clearClickOffs(){ /*[4]*/
		$('html').off();
	}

	/****************************************
	Return public API
	****************************************/
	return {
		s:s,
		init:init,
		add:add,
		remove:remove
	};
})();