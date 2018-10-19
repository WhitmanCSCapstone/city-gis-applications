/**********************************

#KEY-CONTROL

Info
		Keyboard Shortcut Controller, for adding/removing keyboard shortcuts.

**********************************/

var KeyControl = (function(){


	/****************************************
	Settings
	****************************************/
	var s = {
		keys:[]
	};


	/****************************************
	Initializes the module
	****************************************/
	function init(){
		bind();
	}


	/****************************************
	Bind event handler

	Notes
	[-]		When a key is pressed, searches though the keys array for 
			a match and executes the appropriate action.
	[1]		Note the default action is always removed
	****************************************/
	function bind(){
		$(document).keydown(function(e){
			if (!$('input').is(':focus')){
				for (var kdIndex = 0;kdIndex<s.keys.length;kdIndex++){
					if (s.keys[kdIndex].keyCode == e.which){
						s.keys[kdIndex].action();
						e.preventDefault();/*[1]*/
					}
				}
			}
		});
	}


	/****************************************
	Add a new shortcut

	Notes
	[1]		keyCode	- the code for the key that's pressed
	[2]		action 	- the function to run when that key is pressed
	****************************************/
	function add(theCode,theAction){
		var key = {
			keyCode:theCode,
			action:theAction
		};
		var cancel = 0;
		for (var i=0;i<s.keys.length;i++){
			if (s.keys[i].keyCode == key.keyCode){
				cancel = 1;
				log('KeyControl Error: key '+ key.keyCode+' already has an action associated with it.');
			}
		}
		if (cancel === 0){
			s.keys.push(key);			
		}
	}


	/****************************************
	Remove a shortcut
	****************************************/
	function remove(theCode){
		for (var i=0;i<s.keys.length;i++){
			if (s.keys[i].keyCode == theCode){
				s.keys.splice(i,1);
			}
		}
	}

	/****************************************
	Logs the code of all keys pressed - useful for development/debugging
	****************************************/
	function logCode(){
		$(document).keydown(function(e){
			log(e.which);
		});
	}

	/****************************************
	Return public API
	****************************************/
	return {
		s:s,
		init:init,
		add:add,
		remove:remove,
		logCode:logCode
	};
})();