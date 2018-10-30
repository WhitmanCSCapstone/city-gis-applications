/**********************************
#SPREADSHEET-CONTROL

Notes
[-] 	Using the google sheets API and datatables
		- https://developers.google.com/sheets/
		- https://datatables.net/ 
[-] 	Right now, you can only use this component once on a page, otherwise 
		datatables will throw an error. I'm not sure if it's possible to have
		multiple data tables on a single page with independent parameters
		- ref https://www.datatables.net/examples/basic_init/multiple_tables.html
**********************************/
var SpreadsheetControl = (function(){
	'use strict';
	/**********************************
	Settings
	**********************************/ 
	var s = {
		componentClass:'.wc-spreadsheet-component',
		components:[]
	};

	/**********************************
	Initialize the client

	Notes
	[1][2] 	Need to wait for the datatables JS and Google API client library to load before using them
	[3] 	Note that because of how google is returning its errors, right 
			now I don't think this hideLoaders() will trigger if the .js file
			isn't there. :( Leaving it in there just to show my good intentions (and
			maybe this will change in the future #whoknows) - meanspa 9.26.16
	**********************************/
	function init(){
		findComponents();
		if(s.components.length > 0){
			for (var i = s.components.length - 1; i >= 0; i--) {
				s.components[i].$component.append(s.components[i].$loader);
			}
			var resources = [
				'../plugins/datatables/datatables.min.js',
				'https://apis.google.com/js/client.js',
				'../plugins/datatables/datatables_wc.min.css'
			];
			Globals.getStuff(resources)
				.then(function(){
					gapi.load('client',function(){/*[1]*/
						var discoveryUrl  = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
						gapi.client.setApiKey(Globals.s.apiKeys.GoogleDrive);
						gapi.client.load(discoveryUrl).then(loadSheets);
					})
				})
				.catch(hideLoaders); /*[3]*/
		}
	}

	/**********************************
	Find the components and format their data

	Notes
	[1] 	Build the range of the data you want (ex: wcSheet2!A:D). Note that we 
			only want whole columns from rangeStart and rangeEnd, not specific cells.
			The google sheets api could specific cells, but it would screw up our
			truncated column calculations in buildTable().
	**********************************/
	function findComponents(){
		$(s.componentClass).each(function(){
			var params = $(this).data('sParams');
			if(params && params.docID){
				var c = {
					$component:$(this),
					$table:$(this).find('.wc-spreadsheet-table').first(),
					$loader: $('<div/>').addClass('wc-loader wc-medium-loader').text('Loading...'),
					id:$(this).attr('id'),
					docID:params.docID,
					params:params,
					range:params.sheetName+'!'+params.rangeStart+':'+params.rangeEnd /*[1]*/
				}
				c.params.responsive = (c.params.responsive.toUpperCase() === 'TRUE');
				c.params.paging = (c.params.paging.toUpperCase() === 'TRUE');
				c.params.searching = (c.params.searching.toUpperCase() === 'TRUE');
				c.params.truncateLength = parseInt(c.params.truncateLength,10);
				s.components.push(c);
			}
			else{
				log('Spreadsheet Component Error: error initializing component - insufficient parameters');
			}
		});
	}

	/**********************************
	Get the data from Google
	**********************************/
	function loadSheets(){
		for (var i = 0; i < s.components.length; i++) {
			var c = s.components[i];
			gapi.client.sheets.spreadsheets.values.get({
				spreadsheetId:c.docID,
				range:c.range
			}).then(function(response){
				c.data = response.result;
				buildTable(c);
			})
		}
	}

	/**********************************
	Build the table

	Notes
	[1] 	Need to separate out the headers for passing to DataTables
	[2] 	Check to see if this column should be hidden on desktop. Need to 
			adjust for c.params.rangeStart.
	[3]		Removing headers from the data
	[4] 	Truncate the columns that need to be truncated
	[5] 	Need to adjust for c.params.rangeStart
	**********************************/
	function buildTable(c){
		c.colHeaders = [];
		for (var i = 0; i < c.data.values[0].length; i++) { /*[1]*/
			var header = {
				title:c.data.values[0][i],
				defaultContent: ''
			};
			if(c.params.hideColumns && c.params.hideColumns.indexOf(WcFun.numToChar(i + WcFun.charToNum(c.params.rangeStart)))>-1){ /*[]*/
				header.className =  'none';
			}
			c.colHeaders.push(header);
		}
		c.data.values.shift(); /*[3]*/
		if(c.params.truncateColumns){ /*[4]*/
			c.params.truncateLength = c.params.truncateLength?c.params.truncateLength:40;
			var cols = c.params.truncateColumns.split(',');
			for (var m = 0; m < cols.length; m++) {
				cols[m] = WcFun.charToNum(cols[m]) - WcFun.charToNum(c.params.rangeStart); /*[5]*/
			}
			for (var k = 0; k < cols.length; k++) {
				for (var j = 0; j < c.data.values.length; j++) {
					c.data.values[j][cols[k]] = WcFun.collapseText(c.data.values[j][cols[k]],c.params.truncateLength);
				}
			}
		}
		c.$table.DataTable({
			data: c.data.values,
			columns:c.colHeaders,
			responsive: c.params.responsive,
			paging:c.params.paging,
			searching:c.params.searching,
			stripe: true,
			initComplete: function() {
				hideLoaders(c);
			}
		});
	}

	/**********************************
	Hide the loaders
	**********************************/
	function hideLoaders(c){
		if(c){
			c.$loader.remove();
		}
		else{
			for (var i = s.components.length - 1; i >= 0; i--) {
				s.components[i].$loader.remove();
			}
		}
	}

	return {
		s:s,
		init:init
	}
})();