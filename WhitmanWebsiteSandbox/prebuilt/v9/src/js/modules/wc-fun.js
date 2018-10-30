/**********************************
#FUNCTIONS

Info
		Just a module for handy functions we can use throughout the site.
**********************************/
var WcFun = (function(){
	'use strict';

	/****************************************
	Settings
	****************************************/
	var s = {
		months:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		monthsAbv:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	};

	/**********************************
	Format the date in a way that's handy for us

	Notes
	[1] 	Adding one, otherwise January = 0
	**********************************/
	function formatDate(date){
		var formatted = {
			date:date,
			year:date.getFullYear().toString().slice(2),
			month:s.months[date.getMonth()],
			monthAbv:s.monthsAbv[date.getMonth()],
			monthNum:date.getMonth() + 1,
			day:date.getDate(),
			slashDate:undefined,
			time:formatTime(date)
		}
		formatted.slashDate = formatted.monthNum + '/' + formatted.day + '/' + formatted.year;
		return formatted;
	}

	/**********************************
	Format the time so it's usable
	**********************************/
	function formatTime(time){
		var formatted = {
			minute:time.getMinutes(),
			hour:time.getHours(),
			ampm:'AM',
			timeString:''
		};
		if (formatted.hour > 11){
			formatted.ampm = 'PM';
		}
		if (formatted.hour > 12){
			formatted.hour -= 12;
		}
		if (formatted.minute < 10){
			formatted.minute = '0'+formatted.minute;
		}
		formatted.timeString = formatted.hour + ':'+formatted.minute + ' ' + formatted.ampm;
		return formatted;
	}

	/**********************************
	Truncate's the description, add ellipsis
	**********************************/
	function truncate(str,len){
		var formatted = str;
		if (str.length > len){
			formatted = formatted.substr(0, len);
			formatted += '...';
		}
		return formatted;
	}

	/**********************************
	Truncate text with a "more" button to show the rest of it

	Notes
	[1] 	The space before the button tag is deliberate
	[2] 	Unsing the uncollapseText function for uncollapsing the text
	**********************************/
	function collapseText(str,len){
		len = len?len:30;
		if(str && str.length > len){
			var extra = str.substr(len,str.length);
			str = truncate(str,len);
			var moreButton = ' <button class="wc-more-text-button" data-text="'+extra+'" onclick="WcFun.uncollapseText(this)">more</button>'; /*[1]*/ /*[2]*/
			str += moreButton;
		}
		return str;
	}

	/**********************************
	Unccollapse text that was collapsed by the collapseText function

	Notes
	[1] 	Removing 4 characters - 3 periods for the ellipsis and 1 space before the button
	**********************************/
	function uncollapseText(btn){
		var extra = $(btn).data('text')
		var $parent = $(btn).parent();
		$(btn).remove();
		var newText = $parent.text().substr(0, $parent.text().length - 4) + extra; /*[1]*/
		$parent.text(newText)
	}

	/**********************************
	Returns the number of a given letter in the alphabet (A = 0, B = 1 etc.)
	**********************************/
	function charToNum(v){
		v = v.toUpperCase();
		var i = 'ABCDEFGHIJKLMNOPQRSTUFWXYZ'.indexOf(v);
		if(i === -1){
			i = undefined;
		}
		return i;
	}

	/**********************************
	Returns the letter of the alphabet for the given number (0=A, 1=B, 25=Z etc.)
	**********************************/
	function numToChar(i){
		var c;
		if(i>25){
			c = undefined;
		}
		else{
			c = 'ABCDEFGHIJKLMNOPQRSTUFWXYZ'[i]
		}
		return c;
	}

	/*********************************
	Return a random Int
	*********************************/
	function randomInt(min,max){
		return (Math.floor(Math.random() * (max-min+1)) + min);
	}


	/**********************************
	Just a function for converting 'undefined' and 'null' to an empty string
	**********************************/
	function emptyIfNull(string){
		if(string){return string;}
		else{return '';}
	}

	/**********************************
	Just a function for converting an empty string to null
	**********************************/
	function nullIfEmpty(string){
		if(string === '' || string === null || string === undefined){
			return null;
		}
		else{return string;}
	}

	/**********************************
	Randomize the order of an array

	Info
	[-] 	This is the Fisher-Yates Shuffle
			ref: http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
	**********************************/ 
	function shuffleArray(array){
		var currentIndex = array.length, temporaryValue, randomIndex;
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	/****************************************
	This method puts the phab in Alphabatize

	Info
	[1] 	Aphabatize an array of strings
	****************************************/
	function alphabetize(array){
		array.sort(function(itemA,itemB){ /*[1]*/
			return itemA.title.localeCompare(itemB.title);
		});
		return array;
	}

	/**********************************
	Convert a strig to a boolean

	Info
	[-] 	Should return false if it's anything but a string that equals
			'true' or a true boolean. Ignores case.
	**********************************/
	function toBool(str){
		if(str === true){
			return true;
		}
		else if(str){
			return (str.toUpperCase() === 'TRUE');
		}
		else{
			return false;
		}
	}

	/****************************************
	Return public API
	****************************************/
	return{
		s:s,
		formatDate:formatDate,
		formatTime:formatTime,
		truncate:truncate,
		collapseText:collapseText,
		uncollapseText:uncollapseText,
		charToNum:charToNum,
		numToChar:numToChar,
		randomInt:randomInt,
		emptyIfNull:emptyIfNull,
		shuffleArray:shuffleArray,
		nullIfEmpty:nullIfEmpty,
		alphabetize:alphabetize,
		toBool:toBool
	};
})();