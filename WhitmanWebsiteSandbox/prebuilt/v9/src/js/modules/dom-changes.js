/**********************************
#DOM-CHANGES

Info
[-] 	This is a module for any misc. DOM changes that don't warrant their own module. 

TODO
[-] 	At this point it's very incomplete, there's a lot in Globals that should be moved here.
**********************************/ 
var DomChanges = (function(){
	'use strict';

	function init(){
		anchorTagFix();
		if ($('.wc-right-content-column.wc-in-body-copy').length > 0) {
			moveRightColumns();
			$.subscribe('window.newMeasurements',function(){
				moveRightColumns();
			})
		}
	}

	/**********************************
	Move Floating Right Columns to the Bottom on Mobile
	**********************************/
	function moveRightColumns(){
		var $rc = $('.wc-right-content-column.wc-in-body-copy').first();
		if(!Globals.s.breakpointChecks.md){
			if($rc.is(':first-child')){
				$('.wc-body-copy').first().append($rc);
			}
		}
		else{
			if(!$rc.is(':first-child')){
				$('.wc-body-copy').first().prepend($rc);
			}
		}
	}

	/**********************************
	A fix for anchor tags. For desktops, the hovering header means that the target is covered up
	so we need to scroll up a bit for each one.

	Notes
	[1] 	Only looking at anchor tags in wc-main-content
	[2] 	Only looking at anchor tags with the name attribute, since that's how ingeniux creates them
			NOTE: apparently the name attribute is deprecated for this, so if Ingeniux ever starts using
			ID's instead we'll need to rebuild this
	[3] 	See _globals.scss for how this class fixes the issue
	**********************************/
	function anchorTagFix(){
		$('.wc-main-content a').each(function(){ /*[1]*/	
			if($(this).attr('name') !== undefined){ /*[2]*/
				$(this).addClass('wc-anchor-fix'); /*[3]*/
			}
		});
	}

	return {
		init:init
	}
})();