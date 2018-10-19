/**********************************
#INIT

Info
		Initializing the various JS modules, the order is important.

Notes
[-] 	Documentation on how we're writing our Javascript - https://collab.whitman.edu/wiki/display/WEB/Javascript+Notes
**********************************/

/****************************************
#VENDOR-STUFF

[1]		Bootstrap Collapse - Apparently the bootstrap collapse method needs to be initialized on
		the elements before you can use it.
[2] 	Fastclick - removes the 300ms delay for mobile devices.
[3] 	Don't run fastclick if there's something on the page that it conflicts with (ex: embedded
		form script from Slate - meanspa 3.3.17)
****************************************/
function initCollapse(){/*[1]*/
	$('.collapse').collapse({toggle:false});
}
$(function() {/*[2]*/
	if($('.wc-no-fastclick').length > 0){ /*[3]*/
		Globals.s.fastClick = false;
	}
	else{
		Globals.s.fastClick = true;
		FastClick.attach(document.body); 
	}
});
svg4everybody();
objectFitImages();


/****************************************
#OUR-MODULES
****************************************/
Globals.init();
DomChanges.init();
MenuControl.init();
ClickOff.init();
KeyControl.init();
SearchControl.init();
DropdownSliderControl.init();
SliderControl.init();
AutoSizeControl.init();
VideoControl.init();
EventsControl.init();
ImageGalleryControl.init();
SpreadsheetControl.init();
CardGalleryControl.init();
TaxonomyIndexControl.init();
InstagramGalleryControl.init();
MapControl.init();
CardComponentControl.init();

/**********************************
#GLOBAL-ALIASES

Notes
[1]		Just for convenience
**********************************/ 
function log(thing){ /*[1]*/
	Globals.log(thing);
}