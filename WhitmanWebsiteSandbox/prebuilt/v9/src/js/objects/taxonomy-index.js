/**********************************
#TAXONOMY-LIST-FACTORY-FUNCTION

Info
[-] 	This factory function creates Taxonomy List objects.
**********************************/ 	

var TaxonomyIndex = function(params,$e){
	'use strict';

	var ob = {};

	/**********************************
	State Object

	Notes
	[1] 	Information for the category filter (e.g. radio button, dropdown, etc.)
	[2]		Subset of s.results that's been filtered by the category
			selected in the $catSelect dropdown.
	[3]		Subset of s.categorySelection that's been filtered by the letter selected
			in $alphaLinks
	**********************************/
	ob.state = {
		params: params,
		id:$e.attr('id'),
		alphabet:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
		$resultsList: $e.find('.wc-taxonomy-list').first(),
		$alphaLinks: $e.find('.wc-alphabet-list-box').first(),
		$listBox: $e.find('.wc-taxonomy-list-box').first(),
		$collapseButton: $e.find('.wc-collapse-button').first(),
		catSelect: { /*[1]*/
			type:params.catSelectType,
			$box:$e.find('.wc-list-filter-box').first(),
			allTitle:params.catAllTitle
		},
		collapseSettings:{
			collapseHeight:208,
		 	expandedHeight:0,
		},
		allPages: params.pageList,
		catList: params.catList,
		alphaSort: WcFun.toBool(params.alphaSort),
		alphaGroup: WcFun.toBool(params.alphaGroup),
		useUrlParams: WcFun.toBool(params.useUrlParams),
		collapse:WcFun.toBool(params.collapse),
		categorySelection:[],/*[2]*/
		finalSelection:[]/*[3]*/
	}

	/****************************************
	Initialize

	Notes
	[1] 	Update the category filter (dropdown)
	[2] 	Need to trigger the change manually in this case.
	[3] 	Update the category filter (radio buttons)
	****************************************/
	ob.setup = function(){
		ob.state.categorySelection = WcFun.alphabetize(ob.state.allPages);
		ob.state.finalSelection = ob.state.categorySelection;
		ob.buildCategorySelect();
		ob.bindings();
		ob.buildAlphabetList();
		if(!ob.state.alphaGroup){
			ob.state.$resultsList.addClass('wc-item-list wc-highlight-link-list');
		}
		if(ob.state.useUrlParams && Globals.s.urlParameters.cat){
			var cat = Globals.s.urlParameters.cat;
			if(ob.state.catSelect.type === 'Dropdown'){ /*[1]*/
				ob.state.catSelect.$dropdown.find('option[value="'+cat+'"]').first().prop('selected',true);
				ob.state.catSelect.$dropdown.change(); /*[2]*/
			}
			else if(ob.state.catSelect.type === 'RadioButtons'){ /*[3]*/
				ob.state.catSelect.$radioButtons.filter('input[value=' + cat +']').click();
			}
		}
		else{
			ob.populateResultsList();
		}
		if(ob.state.collapse){
			ob.setupCollapse();
		}
	}

	/****************************************
	Assign event handlers for UI actions

	Notes
	[1] 	Alphabet Links
	[2] 	Dropdown category filter
	[3] 	Radio button category filter
	****************************************/
	ob.bindings = function(){
		if (ob.state.alphaSort){/*[1]*/
			ob.state.$alphaLinks.click(function(e){
				var d = $(e.target).data('tl-filter');
				if(d){
					ob.alphaFilter(d);
				}
			});
		}
		if (ob.state.catSelect.type ==='Dropdown'){/*[2]*/
			ob.state.catSelect.$dropdown.change(function(){
				ob.filterByCategory(this.value);
				if(ob.state.collapse){
					ob.expandList();
				}
			});
		}
		else if(ob.state.catSelect.type === 'RadioButtons'){ /*[3]*/
			ob.state.catSelect.$radioButtons.change(function(){
				ob.filterByCategory(this.value);
				if(ob.state.collapse){
					ob.expandList();
				}
			})
		}
	}

	/**********************************
	Setup the collapse button

	Notes
	[-] 	Note that we didn't use the wc-collapse method in Globals.js
			because we needed to change the height based on the size of
			the list (which changes when you use the category filter).
	**********************************/
	ob.setupCollapse = function(){
		ob.state.collapseSettings.collapseHeight = $(ob.state.$listBox.find('li')[4]).position().top + $(ob.state.$listBox.find('li')[4]).height() + 10;
		ob.state.$collapseButton = $(
			'<button class="wc-collapse-button">'+
				'<svg viewbox= "0 0 32 32"><use xlink:href="'+Globals.s.svgFilePath+'#icon-arrow-down"></use></svg>'+
			'</button>');
		$e.append(ob.state.$collapseButton);
		ob.collapseList();
		ob.state.$collapseButton.click(function(){
			if(ob.state.$listBox.hasClass('wc-collapsed')){
				ob.expandList();
			}
			else{
				ob.collapseList();
			}
		})
	}

	/**********************************
	Collapse the list
	**********************************/
	ob.collapseList = function(){
		ob.state.$listBox.height(ob.state.collapseSettings.collapseHeight);
		ob.state.$listBox.addClass('wc-collapsed');
		ob.state.$collapseButton.addClass('wc-collapsed');
	}

	/**********************************
	Expand the list

	Notes
	[-] 	We also use this for updating the list box height when the category
			filter is used.
	**********************************/
	ob.expandList = function(){
		ob.state.$listBox.height(ob.state.$resultsList.height());
		ob.state.$listBox.removeClass('wc-collapsed');
		ob.state.$collapseButton.removeClass('wc-collapsed');
	}

	/**********************************
	Build the category select
	**********************************/
	ob.buildCategorySelect = function(){
		// Dropdown
		if (ob.state.catSelect.type ==='Dropdown'){
			ob.state.catSelect.$box
				.addClass('wc-dropdown-filter-box')
				.append('<label for="wc-category-filter">Filter by:</label>');
			ob.state.catSelect.$dropdown = $('<select class="wc-rounded-dropdown wc-category-filter-dropdown" name="wc-category-filter" title="Filter by categories"></select>');
			ob.state.catSelect.$dropdown.append('<option value="all">'+ob.state.catSelect.allTitle+'</option>');
			ob.state.catList.forEach(function(cat){
				ob.state.catSelect.$dropdown.append('<option value="'+cat.id+'">'+cat.name+'</option>');
			});
			ob.state.catSelect.$box.append(ob.state.catSelect.$dropdown);
		}

		// Radio Button
		else if(ob.state.catSelect.type === 'RadioButtons'){
			ob.state.catSelect.$box
				.addClass('wc-radio-filter-box');
			var filterName = ob.state.id+'_filter';
			var markup = '';
			ob.state.catList.forEach(function(cat){
				markup += 
					'<div class="wc-radio-option-box">'+
						'<input type="radio" name="'+filterName+'" id="'+filterName+'_'+cat.id+'" value="'+cat.id+'">'+
						'<label for="'+filterName+'_'+cat.id+'" id="'+filterName+'_'+cat.id+'_label">'+cat.name+'</label>'+
						'<div class="wc-radio-btn" data-target="#'+filterName+'_'+cat.id+'_label">'+
							'<div class="wc-radio-btn-inner"></div>'+
						'</div>'+
					'</div>';
			})
			markup += 
				'<div class="wc-radio-option-box">'+
					'<input type="radio" name="'+filterName+'" id="'+filterName+'_all" value="all" checked>'+
					'<label for="'+filterName+'_all" id="'+filterName+'_all_label">'+ob.state.catSelect.allTitle+'</label>'+
					'<div class="wc-radio-btn" data-target="#'+filterName+'_all_label">'+
						'<div class="wc-radio-btn-inner"></div>'+
					'</div>'+
				'</div>';
			ob.state.catSelect.$box.append(markup);
			ob.state.catSelect.$radioButtons = $('input[type=radio][name='+filterName+']');
		}
	}


	/****************************************
	Populate the DOM list of alphabet links at the top

	Notes
	[1] 	If it's the current letter, make it a gray span so you can't click
			on it.
	[2]		If the letter has results for it, add a link for it
	[3] 	...otherwise just add a grayed out span.
	****************************************/
	ob.buildAlphabetList = function(currentLetter){
		if (ob.state.alphaSort) {
			var allMarkup 	= '';
			if (!currentLetter){
				allMarkup =  '<span class="wc-no-link">All</span> <span class="wc-dash">-</span> ';
			}
			else{
				allMarkup = '<a class="wc-all-link" data-tl-filter="all">All</a> <span class="wc-dash">-</span> ';
			}
			ob.state.$alphaLinks.empty();
			ob.state.$alphaLinks.append(allMarkup);
			for (var i =0; i<ob.state.alphabet.length; i++){
				var letter 	= ob.state.alphabet[i],
					markup 	= '',
					subset 	= ob.state.categorySelection.filter(function(item){
						var title = item.title.toUpperCase();
						return(title[0] == letter);
					});
				if (subset.length > 0){
					if (ob.state.alphabet[i] == currentLetter){
						markup = '<span class="wc-current-letter">'+letter+'</span>';/*[1]*/
					}
					else{
						markup = '<a data-tl-filter="'+letter+'">'+letter+'</a>';/*[2]*/
					}
					ob.state.$alphaLinks.append(markup);
				}
				else{
					markup = '<span class="wc-no-link">'+letter+'</span>';/*[3]*/
					ob.state.$alphaLinks.append(markup);
				}
			}
			ob.state.$alphaLinks.removeClass('wc-hidden');
		}
	}

	/****************************************
	Populate the DOM list

	Notes
	[1]		Groups and displays the links by letter.
	[2] 	If there are links for this letter, add a letter link up top
	[3]		...otherwise add a grayed out letter
	****************************************/
	ob.populateResultsList = function(){
		ob.state.$resultsList.empty();
		if(ob.state.alphaGroup){
			for(var i=0;i<ob.state.alphabet.length;i++){ /*[1]*/
				var letter 	= ob.state.alphabet[i],
					markup 	= '',
					subset 	= ob.state.finalSelection.filter(function(item){
						var title = item.title.toUpperCase();
						return (title[0] == letter);
					});
				if (subset.length > 0){
					markup = '<li class="wc-category"><h2>'+letter+'</h2><ul class="wc-item-list wc-highlight-link-list">';
					for (var k=0;k<subset.length;k++){
						markup += '<li><a href="'+subset[k].url+'">'+subset[k].title+'</a></li>';
					}
					markup += '</ul></li>';
					ob.state.$resultsList.append(markup);
				}
			}
		}
		else{
			for (var i = 0; i < ob.state.finalSelection.length; i++) {
				var markup = '<li><a href="'+ob.state.finalSelection[i].url+'">'+ob.state.finalSelection[i].title+'</a></li>';
				ob.state.$resultsList.append(markup);
			}
		}
	}

	/****************************************
	Filter the selection by a category
	****************************************/
	ob.filterByCategory = function(cat){
		if (cat == 'all'){
			if(ob.state.useUrlParams){ Globals.removeUrlParameter('cat'); }
			ob.state.categorySelection 	= WcFun.alphabetize(ob.state.allPages);
			ob.state.finalSelection 	= ob.state.categorySelection;
		}
		else{
			if(ob.state.useUrlParams){ Globals.addUrlParameter('cat',cat); }
			ob.state.categorySelection = ob.state.allPages.filter(function(item){
				return (item.tags.indexOf(cat) > -1);
			});
			ob.state.finalSelection	= ob.state.categorySelection;
		}
		ob.buildAlphabetList();
		ob.populateResultsList();
	}

	/****************************************
	Filter the selection by the title's first letter
	****************************************/
	ob.alphaFilter = function(letter){
		if (letter == 'all'){
			ob.state.finalSelection = ob.state.categorySelection;
			ob.buildAlphabetList();
		}
		else if (ob.state.alphabet.indexOf(letter) > -1){
			ob.state.finalSelection = ob.state.categorySelection.filter(function(item){
				var title = item.title.toUpperCase();
				return (title[0] == letter);
			});
			ob.buildAlphabetList(letter);
		}
		else{
			ob.state.finalSelection = ob.state.categorySelection;
			ob.buildAlphabetList();
		}
		ob.populateResultsList();
	}

	return ob;
}