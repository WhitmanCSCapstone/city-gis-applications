/**********************************
#SEARCH-CONTROL

Info
		Controls the search box in the header, most of this is for the auto-results.

Notes
[-] 	Decided to leave some log() statements in here commented out, just so 
		it's easy to use them for debugging in the future.

**********************************/

var SearchControl = (function(){
	'use strict';

	/****************************************
	Settings

	Notes
	[1]		The current action of the form (website/people)
	[2]		The selected/highlighted result for keyboard navigation
	[3]		Indicates if auto-results is working, see initAutoresults()
	[4] 	Used for checking to see when the user stops typing see checkLast()
	[5]		How many auto-results you want to display	
	[6] 	The delay between checking the search box to see if they've stopped
			typing.
	****************************************/
	var s = {
		searchBox:$('#wc-search-box'),
		searchForm:$('#wc-search-form'),
		searchField:$('#wc-search-input'),
		resultsBox:$('#wc-auto-search-results'),
		resultsList:$('#wc-auto-search-results ul'),
		optionsBox:$('#wc-search-options-box'),
		peopleButton:$('#wc-search-people'),
		websiteButton:$('#wc-search-website'),
		peopleAction:$('#wc-action-people'),
		websiteAction:$('#wc-action-website'),
		loader:$('#wc-ajax-loader'),
		websiteSearchUrl:$('meta[name=SearchURL]').first().attr('content'),
		currentAction:'', /*[1]*/
		resultsListElements:{}, 
		selectedResult:null, /*[2]*/
		pageResults:[], 
		promoResults:[],
		combinedResults:[],
		peopleResults:[],
		working:false, /*[3]*/
		query:'', 
		newCharCount:0, /*[4]*/
		totalResults:0, 
		resCount:5, /*[5]*/
		refreshDelay:500, /*[6]*/
		browserOk:true,
		newSearchString:''
	};
	

	/****************************************
	Initializes the module
	****************************************/
	function init(){
		browserCheck();
		bindUIActions();
		s.currentAction = 'website';
		ClickOff.add(s.searchBox,function(){
			SearchControl.hideAll();
			SearchControl.showHideOptions('hide');
		});
		subscriptions();
		showHideOptions('reset');
	}


	/****************************************
	Reset the settings
	****************************************/
	function letsReset(){
		s.resultsListElements 	= {};
		s.selectedResult 		= null;
		s.pageResults 			= [];
		s.promoResults 			= [];
		s.combinedResults 		= [];
		s.peopleResults 		= [];
		s.working 				= false;
		s.query 				= '';
		s.newCharCount 			= 0;
		s.totalResults 			= 0;
	}


	/**********************************
	Checks for compatible browers
	**********************************/
	function browserCheck(){
		if(Globals.s.isIE === false || Globals.s.ieVersion >= 10){
			s.browserOk = true;
		}
		else{
			s.browserOk = false;
		}
	}


	/****************************************
	Assign event handlers for UI actions
	
	Notes
	[1] 	Every keystroke is counted, used to determine when they've stopped typing
	[2]		Keyboard Shortcut - "/"
	[3]		Keyboard Shortcut - esc
	[4][5] 	Submit the form if they tap an option twice.
	****************************************/
	function bindUIActions(){
		if (s.browserOk === true){
			s.searchField.on('input',function(){
				initAutoResults();
				s.newCharCount ++; /*[1]*/
			});
		}
		s.searchBox.click(function(){
			showHideOptions('show');
		});
		s.searchBox.keydown(function(e){
			keyNav(e);
		});
		KeyControl.add(191,function(){ /*[2]*/
			if (!s.searchField.is(':focus')){
				s.searchField.focus();
				showHideOptions('show');
			}
		});
		KeyControl.add(27,function(){ /*[3]*/
			SearchControl.hideAll();
			if (s.searchField.is(':focus')){
				s.searchField.blur();
				showHideOptions('hide');
			}
		});
		s.peopleButton.click(function(e){
			if (s.currentAction != 'people'){
				toggleButton('people');
				switchAction('people');
				s.searchField.focus();
				if (s.browserOk === true){
					initAutoResults();
				}
			}
			else{
				s.searchForm.submit(); /*[4]*/
			}
		});
		s.websiteButton.click(function(e){
			if (s.currentAction != 'website'){
				toggleButton('website');
				switchAction('website');
				s.searchField.focus();
				if (s.browserOk === true){
					initAutoResults();
				}
			}
			else{
				s.searchForm.submit(); /*[5]*/
			}
		});
	}

	/**********************************
	Pub/Sub subscriptions

	Notes
	[1] 	Run this whenever the window size changes (watching Globals.watchWindowSize)
	**********************************/
	function subscriptions(){
		$.subscribe('window.newMeasurements',function(){ /*[1]*/
			if(!Globals.breakpointChecks.md && !Globals.breakpointChecks.lg){
				SearchControl.showHideOptions('reset');
			}
		});
	}

	/****************************************
	Initiate auto results - start working
	
	Notes
	[1]		Initiate autoresults if it hasn't been initiated yet (i.e.
			working == false)
	[2]		Start checking the search query, once they've stopped typing run
			the appropriate search.
	****************************************/
	function initAutoResults(){
		if (s.working === false){ /*[1]*/
			// log('---init auto results---');
			letsReset();
			s.working = true;
			s.newCharCount++;
			clearList();
			s.loader.css({'display':'block'});
			s.resultsBox.show();
			checkLast(function(){ /*[2]*/
				if (s.currentAction === 'website'){
					runWebsiteSearch();
				}
				if (s.currentAction === 'people'){
					runPeopleSearch();
				}
			});
		}
	}
	

	/****************************************
	Checks to see when they've stopped typing

	Notes
	[1] 	Strips out the white space.
	[2] 	If characters have been typed since the last time this ran, set it to zero and keep checking.
			When this is 0, they've stopped typing and we can run the search.
	****************************************/
	function checkLast(callback){
		s.query = encodeURI(s.searchField.val());
		var queryLength = s.searchField.val().replace(/\s+/g, '').length;/*[1]*/
		if (s.newCharCount > 0){ /*[2]*/
			// log('resetting newCharCount');
			s.newCharCount = 0;
			setTimeout(function () {
				checkLast(callback);
			}, s.refreshDelay); //was 200
		}
		else if (queryLength < 3){
			// log('stopped typing, but too short. queryLength - ' + queryLength);
			hideAll();
			done();
		}
		else{
			// log('stopped typing, long enough - ' + queryLength);
			callback();
		}
	}


	/****************************************
	Run the website search 

	Notes
	[1][2]	Format the results and promotions and add them both to 
			s.combinedResults
	[3]		Populate s.resultsList
	[4]		If there are more results than s.resCount, show the more
			link.
	****************************************/
	function runWebsiteSearch(){
		var searchString = s.websiteSearchUrl + s.query;
		// log('running search');
		$.getJSON(searchString, function (data) {
			if (data.items || data.promotions){
				// log('we've got results');
				s.totalResults = data.searchInformation.totalResults;
				if (data.items){ /*[1]*/
					s.pageResults = formatWebsiteResults(data.items);
					addResults();
				}
				if (data.promotions){ /*[2]*/
					s.totalResults += data.promotions.length;
					s.promoResults = formatWebsitePromos(data.promotions);
					addPromotions();
				}
				populateList(s.combinedResults); /*[3]*/
				if (s.totalResults > s.resCount){
					addMoreLink(); /*[4]*/
				}
				s.loader.css({'display':'none'});
				done();
			}
			else{
				hideAll();
				done();
				// log('no results found');
			}
		}).error(function() {
			hideAll();
			done();
		});
	}


	/****************************************
	Run the people search 

	Notes
	[1]		Format the results.
	[2]		Trim the results to s.resCount
	[3]		Populate s.resultsList
	[4]		If there are more results than our limit, show the more
			link.
	****************************************/
	function runPeopleSearch(){
		var searchString = 'https://webapp.whitman.edu/directory/jsonp.cfm?q='+s.query+'&callback=?';
		$.getJSON(searchString, function (data) {
			if (data.results.length > 0){
				s.totalResults	+= data.results.length;
				s.peopleResults = formatPeopleResults(data.results); /*[1]*/
				s.peopleResults = s.peopleResults.slice(0,s.resCount); /*[2]*/
				populateList(s.peopleResults); /*[3]*/
				if (s.totalResults > s.resCount){
					addMoreLink(); /*[4]*/
				}
				s.loader.css({'display':'none'});
				done();
			}
			else{
				hideAll();
				done();
			}
		});
	}


	/****************************************
	Format website results

	Notes
	[1][2]	Strip out the HTML
	[3]		Build the markup for each result
	****************************************/
	function formatWebsiteResults(results){
		var formatted	= [];
		for (var i = 0; i < results.length; i++) {
			var result = {
				type: 'page',
				title: results[i].htmlTitle.replace(/(<([^>]+)>)/ig, ""), /*[1]*/
				link: results[i].link,
				blurb: results[i].htmlSnippet.replace(/(<([^>]+)>)/ig, ""),/*[2]*/
			};
			var pdfNote = ''; /*[3]*/
			if (result.link.indexOf('.pdf') > -1) {
				pdfNote += '<span class="wc-note">pdf</span>';
			}
			if (result.blurb.length > 90){
				result.blurb = result.blurb.substring(0,90) + '...';
			}
			var markup = '<li><a href="' + result.link + '"><span class="wc-link-title">' +pdfNote + result.title + '</span><span class="wc-link-desc">' + result.blurb + '</span></a></li>';
			result.markup = markup;
			formatted.splice(i,0,result);
		}
		formatted = formatted.slice(0,s.resCount);
		return formatted;
	}


	/****************************************
	Format website promos

	Notes
	[1]		Build the markup for each result
	****************************************/
	function formatWebsitePromos(promos){
		var formatted 	= [];
		for (var i = 0; i < promos.length; i++) {
			var promo = {
				type: 'promo',
				title:promos[i].title,
				link:promos[i].link,
				blurb:promos[i].bodyLines ? promos[i].bodyLines[0].title : ''
			};
			var pdfNote = '';/*[1]*/
			if (promo.link.indexOf('.pdf') > -1) {
				pdfNote += '<span class="wc-note">pdf</span>';
			}
			if (promo.blurb.length > 90){
				promo.blurb = promo.blurb.substring(0,90) + '...';
			}
			var markup = '<li><a href="' + promo.link + '"><span class="wc-link-title">' +pdfNote + promo.title + '</span><span class="wc-link-desc">' + promo.blurb + '</span></a></li>';
			promo.markup = markup;
			formatted.splice(i,0,promo);
		}
		return formatted;
	}


	/****************************************
	Format people results
	****************************************/
	function formatPeopleResults(people){
		var formatted 	= [];
		for (var i = 0;i<people.length;i++){
			var person = {
				type: 'person',
				name: people[i].name,
				title: people[i].title,
				email: people[i].mail,
				phone: String(people[i].phone)
			};
			var phoneMarkup = '';
			if (person.phone) {
				if (person.phone.indexOf('-') == -1 && person.phone.length ==7){
					person.phone = person.phone.slice(0,3) + '-' + person.phone.slice(3);
				}
				phoneMarkup = '<a href="tel:1-509-' + person.phone + '" class="wc-person-phone">509-' + person.phone + '</a>';
			}
			var markup 		= '<li><span class="wc-person-name">' + person.name + '</span><span class="wc-person-title">' + person.title + '</span><a class="wc-person-email" href="mailto:' + person.email + '">' + person.email + '</a>'+phoneMarkup+'</li>';
			person.markup 	= markup;
			formatted.splice(i,0,person);
		}
		return formatted;
	}


	/****************************************
	Add the page results to s.combinedResults
	****************************************/
	function addResults(){
		s.combinedResults = s.combinedResults.concat(s.pageResults);
	}


	/****************************************
	Add the promotions to s.combinedResults

	Notes
	[1]		At this point if there are  multiple promotions I think this will
			add them in reverse order
	[2]		Check to see if there are any results that are duplicates of the
			promos, if so remove them.
	****************************************/
	function addPromotions(){
		for (var i = 0; i < s.promoResults.length; i++) { /*[1]*/
			for (var k = 0; k< s.combinedResults.length; k++){ /*[2]*/
				if (s.combinedResults[k].link == s.promoResults[i].link){
					s.combinedResults.splice(k,1);
				}
			}
			s.combinedResults.splice(0,0,s.promoResults[i]);
		}
	}


	/****************************************
	Populate actual <ul> (s.resultsList) with the markup from all of the results
	****************************************/
	function populateList(items){
		for (var i=0; i<items.length; i++){
			s.resultsList.append(items[i].markup);
		}
		s.resultsListElements = $('#wc-auto-search-results ul li');
	}


	/****************************************
	Add the 'More Results' link at the bottom of the list

	Notes
	[1]		We do it this way rather than just using css to show/hide something
			that's already in the DOM because it allows us to easily clear out
			s.resultsList when we need to.
	****************************************/
	function addMoreLink() { /*[1]*/
		s.resultsList.append('<li><a id="wc-submit-search-b"><span class="wc-link-title">See more results...</span></a></li>'); 
		$('#wc-submit-search-b').click(function (event) { /*[2]*/
			$('#wc-search-form').submit();
			event.preventDefault();
		});
	}


	/****************************************
	Show/Hide the search option buttons (website/people)
	****************************************/
	function showHideOptions(select){
		if (select == 'reset'){
			s.optionsBox.addClass('wc-hidden-alt');
		}
		else if (Globals.getWindowWidth() > Globals.breakpoints.sm){
			if (select == 'show'){
				s.optionsBox.removeClass('wc-hidden-alt');
			}
			else if(select == 'hide'){
				s.optionsBox.addClass('wc-hidden-alt');
			}
		}
	}

	/****************************************
	Handles Keyboard navigation for auto-results
	
	Notes
	[1]		Down Arrow
	[2]		Up Arrow
	[3]		Enter/Return
	****************************************/
	function keyNav(e){
		if (s.working === false && s.resultsListElements.length > 0){
			if (e.which == 40) {/*[1]*/
				if (s.selectedResult) {
					if (s.selectedResult.next().length > 0){
						s.selectedResult.removeClass('wc-selected');
						s.selectedResult = s.selectedResult.next().addClass('wc-selected');
					}
				}
				else{
					s.selectedResult = s.resultsListElements.eq(0).addClass('wc-selected');
				}
			}
			else if (e.which == 38) {/*[2]*/
				if (s.selectedResult){
					s.selectedResult.removeClass('wc-selected');
					if (s.selectedResult.prev().length > 0) {
						s.selectedResult = s.selectedResult.prev().addClass('wc-selected');
					}
					else {
						s.selectedResult = null;
					}
				}
			}
			else if (e.which == 13 && s.selectedResult) {/*[3]*/
				e.preventDefault();
				if (s.selectedResult.children('a').first().is('#wc-submit-search-b')){
					s.searchForm.submit();
				}
				else {
					window.location = s.selectedResult.children('a').first().attr('href');
				}
					
			}
		}
	}


	/****************************************
	Switch the forms action
	****************************************/
	function switchAction(thing){
		s.currentAction = thing;
		var action = '';
		if (s.currentAction === 'people'){
			action = $(s.peopleAction).text();
		}
		if (s.currentAction === 'website'){
			action = $(s.websiteAction).text();
		}
		$(s.searchForm)[0].setAttribute('action',action);
	}

	/****************************************
	Clear the results
	****************************************/
	function clearList(){
		s.resultsList.empty();
	}


	/****************************************
	Hide everything, clear the results
	****************************************/
	function hideAll(){
		s.loader.css({'display':'none'});
		clearList();
		s.resultsBox.hide();
	}

	/****************************************
	Highlight buttons when clicked
	****************************************/
	function toggleButton(button){
		if (button === 'people'){
			s.peopleButton.addClass('wc-highlighted');
			s.websiteButton.removeClass('wc-highlighted');
		}
		if (button === 'website'){
			s.websiteButton.addClass('wc-highlighted');
			s.peopleButton.removeClass('wc-highlighted');
		}
	}


	/****************************************
	When done, set working = false
	****************************************/
	function done(){
		s.working = false;
	}


	/****************************************
	Return public API
	****************************************/
	return{
		s:s,
		init:init,
		hideAll:hideAll,
		showHideOptions:showHideOptions
	};
})();