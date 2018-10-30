/**********************************
#MESSAGE-CONTROL

Info
		A controller for message boxes. To use this, put this markup in the DOM where you want 
		the message to be:

			<div id="some-id" class="wc-map-message-box">
				<img class="wc-loader-gif" src="path/for/some/loader.gif"> <!-- optional -->
			</div>

		The loader gif is in there so JS can get the correct path from ingeniux.

Notes
[-] 	Originally created to handle the geolocation prompt on the map page.
[-] 	At this point I think we only have css in place for these to work
		on mobile.
[-] 	Right now this is only setup to manage a single message at a time,
		so you can't have more than one on a page (aside from updating the
		content of a single message).
**********************************/
var MessageControl = (function(){
	'use strict';	
	/**********************************
	Settings
	**********************************/
	var s = {
		messageBox:undefined,
		buttonBox:undefined,
		message:undefined,
		params:undefined,
		buttons:undefined,
		loaderGif:undefined
	};

	/**********************************
	Initialize the module

	Notes
	[1]  Make a copy of the loader gif, just to get the correct path.
	**********************************/
	function init(params){
		s.params 		= params;
		s.messageBox 	= $(params.messageBoxID);
		s.loaderGif 	= s.messageBox.find('.wc-loader-gif').first()?s.messageBox.find('.wc-loader-gif').first().clone():undefined;/*[1]*/
		s.message 		= $('<p>');
		s.messageBox.empty();
		setMessage(params.messageText);
		s.messageBox.append(s.message);
		s.buttonBox = $('<div>').addClass('wc-button-box');
		if(params.buttons){
			for (var i = 0; i < params.buttons.length; i++) {
				addButton(params.buttons[i]);
			}
		}
		s.messageBox.append(s.buttonBox);
		if(typeof params.callback == 'function'){
			s.params.callback();
		}
	}

	/**********************************
	Set the message
	**********************************/
	function setMessage(messageText){
		s.message.text(messageText);
	}

	/**********************************
	Add a button
	**********************************/
	function addButton(thisButton){
		var button = $('<a>').addClass('wc-message-box-button');
		button.text(thisButton.text);
		if(thisButton.action){
			button.click(function(){
				thisButton.action();
			});
		}
		s.buttonBox.append(button);
	}

	/**********************************
	Display the loading gif in place of the buttons
	**********************************/
	function loadingGif(){
		clear('buttons');
		s.buttonBox.append(s.loaderGif);
	}

	/**********************************
	Clear stuff
	**********************************/
	function clear(what){
		if(what == 'buttons'){
			s.buttonBox.empty();
			s.buttons = undefined;
		}
		else{
			setMessage('');
			s.buttonBox.empty();
			s.buttons = undefined;			
		}
	}

	return {
		s:s,
		init:init,
		clear:clear,
		setMessage:setMessage,
		addButton:addButton,
		loadingGif:loadingGif
	};
})();