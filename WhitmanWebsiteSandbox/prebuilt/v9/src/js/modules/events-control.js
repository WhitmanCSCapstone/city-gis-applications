/**********************************
#EVENTS-CONTROL

Info
		Handles the events components, pulling in events from the localist API
**********************************/
var EventsControl = (function(){
	'use strict';
	
	/****************************************
	Settings
	****************************************/
	var s = {
		eventComponents:[]
	};

	/****************************************
	Initializes the module

	Notes
	[1] 	params.recurreingEvents determines if we get all occurances of recurring
			events as well as how we display them.
	****************************************/
	function init(){
		$('.wc-events-component').each(function(){
			if($(this).data('eventsParams')){
				var params = $(this).data('eventsParams');
				var eventComponent = {
					element:$(this),
					domList:$(this).find('.wc-events-list').first(),
					params:params,
					recurringEvents:(params.recurringEvents)?params.recurringEvents.toLowerCase():'distinct',
					distinctEvents:(!params.recurringEvents || params.recurringEvents.toLowerCase() === 'distinct')?true:false, /*[1]*/
					events:[]
				}
				s.eventComponents.push(eventComponent);
			}
		});
		for (var i = 0; i < s.eventComponents.length; i++) {
			getEvents(s.eventComponents[i]);
		}
	}

	/**********************************
	Run the AJAX call to get the events from localist

	Notes
	[1] 	Get events for the next year, only grab one instance
			of recurring events.
	**********************************/
	function getEvents(component){
		var paramString = '&days=365';/*[1]*/
		for (var i = 0; i < component.params.types.length; i++) {
			if (component.params.types[i]){
				paramString += '&type[]=' + component.params.types[i];
			}
		}
		for (var i = 0; i < component.params.excludes.length; i++) {
			if (component.params.excludes[i]){
				paramString += '&exclude_type[]=' + component.params.excludes[i];
			}
		}
		if (component.params.featuredOnly === 'true') {
		    paramString += '&featured=true';
		}
		if (component.params.count){
			paramString += '&pp=' + component.params.count;
		}
		if (component.params.match){
			paramString += '&match=' + component.params.match;
		}
		if(component.distinctEvents){
			paramString += '&distinct=true';
		}
		component.queryString = 'https://calendar.whitman.edu/api/2/events?'+paramString+'&callback=?';
		$.getJSON(component.queryString, function (data){
			component.events = data.events;
			prepData(component);
			populateList(component);
		});
	}

	/**********************************
	Prepare the data

	Notes
	[1] 	For compact duplicate dates, need to remove all duplicates and add them to
			the wcInstances array for making the dropdown
	**********************************/
	function prepData(component){
		if(component.recurringEvents === 'compact'){ /*[1]*/
			var unique = [];
			var what = [];
			for (var i = 0; i < component.events.length; i++) {
				var event = component.events[i].event;
				event.wcInstances = [];
				if(unique.indexOf(event.id) === -1){
					var same = $.grep(component.events,function(e){return e.event.id === event.id});
					for (var k = 0; k < same.length; k++) {
						var thisInstance = WcFun.formatDate(new Date(same[k].event.event_instances[0].event_instance.start));
						thisInstance.allDay = same[k].event.event_instances[0].event_instance.all_day;
						event.wcInstances.push(thisInstance);
					}
					event.wc_unique = true;
					unique.push(event.id);
				}
				else{
					event.wc_unique = false;
				}
			}
			component.events = $.grep(component.events,function(e){return e.event.wc_unique});
		}
	}


	/**********************************
	Populate the DOM list
	**********************************/ 	
	function populateList(component) {
		for (var i = 0; i < component.events.length; i++) {
			if (component.events[i]){
				var markup,description,moreDatesMarkup = '';
				var thisEvent 	= component.events[i].event;
				var wcInstances	= (thisEvent.wcInstances)?thisEvent.wcInstances:null;
				var eventDate 	= WcFun.formatDate(new Date(thisEvent.event_instances[0].event_instance.start));
				var ariaLabel 	= thisEvent.title + ', ' + eventDate.month + ' ' + eventDate.day;
				var detailsString = (thisEvent.event_instances[0].event_instance.all_day)?thisEvent.location_name: (thisEvent.location_name.length > 0)? eventDate.time.timeString + ' • ' + thisEvent.location_name:eventDate.time.timeString;

				/**********************************
				Markup for the more dates box (used for the compact recurring events option)
				**********************************/
				if(component.recurringEvents === 'compact' && wcInstances.length > 1){
					moreDatesMarkup = '<div class="wc-more-dates-box">';
					var dateBoxID = $(component.element).attr('id') + '_DateBox' + thisEvent.id;
					moreDatesMarkup += '<span class="wc-date-range">' + wcInstances[0].slashDate + ' - ' + wcInstances[wcInstances.length - 1].slashDate + '</span>';
					moreDatesMarkup += 
						'<button class="wc-more-link wc-more-dates-button collapsed" data-toggle="collapse" data-target="#'+dateBoxID+'">'+
							'<span class="wc-text">View All Dates</span>'+
							'<svg class="wc-spins" viewbox="0 0 32 32" aria-hidden="true"> <use xlink:href="'+Globals.s.svgFilePath+'#icon-arrow-right"></use></svg>'+
						'</button>'+
						'<ul class="collapse" id="'+dateBoxID+'">';
					for (var k = 0; k < wcInstances.length; k++) {
						moreDatesMarkup += '<li>' + wcInstances[k].slashDate + (wcInstances[k].allDay?'':' • ' + WcFun.formatTime(wcInstances[k].date).timeString) + '</li>';
					}
					moreDatesMarkup += '</ul></div>';
				}

				/**********************************
				Markup for home page events list (FeaturedEventsListComponent)
				**********************************/
				if(component.params.format === 'home'){
					markup = 
						'<li>'+
							'<div class="wc-date-box" aria-hidden="true">'+
								'<span class="wc-month">' + eventDate.monthAbv + '</span>'+
								'<span class="wc-day">' + eventDate.day + '</span>'+
							'</div>'+
							'<div class="wc-item-content">'+
								'<a href="' + thisEvent.localist_url + '" class="wc-title-link wc-item-title" aria-label="'+ariaLabel+'">'+ thisEvent.title +'</a>'+
								'<p class="wc-event-details wc-small"><span class="wc-no-flex-date">'+eventDate.month + ' ' + eventDate.day+' </span>' + detailsString + '</p>'+ '</div>'+
						'</li>';
				}

				/**********************************
				Markup for the standard events list (EventsListComponent)
				**********************************/
				else if (component.params.format === 'default'){
					description = WcFun.truncate(thisEvent.description_text,150);
					markup	= '<li>'+
								'<div class="wc-date-box" aria-hidden="true">'+
									'<span class="wc-month">'+eventDate.monthAbv+'</span>'+
									'<span class="wc-day">'+eventDate.day+'</span>'+
								'</div>'+
								'<div class="wc-item-content">'+
									'<a href="' + thisEvent.localist_url + '" class="wc-title-link wc-item-title" aria-label="'+ariaLabel+'">'+ thisEvent.title +'</a>'+
									'<p class="wc-event-details"><span class="wc-no-flex-date">'+eventDate.month + ' ' + eventDate.day+' </span>'+detailsString+'</p>'+
									moreDatesMarkup;
					if (component.params.showAbstracts !== 'false') {
						markup += '<p class="wc-item-description">' + description + '</p>';
					}
					if (component.params.moreLinks != 'false'){
						markup +=  '<a href="'+thisEvent.localist_url+'" class="wc-bb-more-link wc-box-button" aria-label="'+ariaLabel+'">'+
										'<span class="wc-text">More</span>'+
									'</a>';
					}
					markup += '</div></li>';
				}

				else{log('EventsControl error: unrecognized format - '  + component.params.format);}
				component.domList.append(markup);
			}
		};
		if (component.events == null || component.events.length == 0) {
			component.domList.append("<li>No scheduled events to display</li>")
		}
		$.publish('dom.newElements');
	}

	/****************************************
	Return public API
	****************************************/
	return{
		s:s,
		init:init
	};
})();