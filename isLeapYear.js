function isLeapYear (year){
	if (year % 4 === 0 && (year % 400) !== 100 && (year % 400) !== 200 && (year % 400) !== 300){
		return true;
	} else {
		return false;
	}
}

function getBirthDay = birthDay => {birthday % 7};


/*function getCenturyCode (year){
	var century = (Math.floor (year / 100));
	if (century % 4 === 0){ 
		return 0;
	} else if (century % 4 === 1){
		return 5;
	} else if  (century % 4 === 2){
		return 3;
	} else if (century % 4 === 3{
		return 1;
	} else {
		return "Invalid Entry";	
	}
}
function getDecadeCode (year){
	var decade = year % 100;
	var mod1 = decade % 4;
	var multOf4 = (decade - mod1) / 4;
	return (multOf4 * 5 + mod1) / 7;
}
	commented out code above is replaced with a single function below. function about takes up 21 lines. Function below takes up 15 lines
*/
function getCombinedYear (year){
	var modulo4 = year % 4;
	var decade = year % 100;
	var century = Math.floor(year / 100);
	var decadeCode = (decade - mod1) / 4 * 5 + mod1;
	if (century === 16 || century === 20){
		return (decadeCode + 0) % 7;
	} else if (century === 17 || century === 21){
		return (decadeCode + 5) % 7;
	} else if (century === 18 || century === 22){
		return (decadeCode + 3) % 7;
	} else if (century === 19 || century === 23){
		return (decadeCode + 1) % 7;
	} 
}

