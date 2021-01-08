
/*function isLeapYear(year){
	var century = Math.floor (year / 100);
	var decade = year % 100;
	var leapYear = false;
	if (century % 4 === 0 && decade === 0){
		leapYear = true;
	} else if (century % 4 !== 0 && decade === 0){
		leapYear = false;
	} else if ( decade % 4 === 0){
		leapYear = true;
	} else {
		leapYear = false;
	}
	return leapYear;
} 
	The function commented out is VERY poorly written. It takes up 15 lines and creates 3 variables. 
	The same function is written much better below. It only takes up 7 lines and creates no unnecessary  variables*/
function isLeapYear (year){
	if (year % 4 === 0 && (year % 400) !== 100 && (year % 400) !== 200 && (year % 400) !== 300){
		return true;
	} else {
		return false;
	}
}
function getYearCode(year){
	var decade = year % 100;
	var century = Math.floor (year / 100);
	var decadeCode1 = decade % 4;
	var decadeCode2 = (decade - decadeCode1) / 4 * 5;
	var finalDecadeCode = (decadeCode1 + decadeCode2) % 7;
	var centuryCode = 0;
	if (century === 16 || century === 20){
		centuryCode = 0;
	} else if (century === 17 || century === 21){
		centuryCode = 5;
	} else if (century === 18 || century === 22){
		centuryCode = 3;
	} else if (century === 19 || century === 23){
		centuryCode = 1;
	}
	var yearCode = (finalDecadeCode + centuryCode) % 7; 
	return yearCode;
}

function getMonthCode(birthMonth, birthDay, birthYear){
  var month = birthMonth.toUpperCase();
  var dayCode = birthDay % 7;
  var yearVariable = birthYear;
  var monthCode = 0;
  var leapYearCode = isLeapYear (birthYear);
  if (month === "JANUARY" && birthDay <= 31 && isLeapYear === false){
    monthCode = 6;
  } else if (month === "JANUARY" && birthDay <= 31 && leapYearCode === true){
    monthCode = 5; 
  } else if (month === "FEBRUARY"  && birthDay <= 29 && leapYearCode === false){
    monthCode = 2;
  } else if (month === "FEBRUARY" && birthDay <= 31 && leapYearCode === true){
    monthCode = 1;
  } else if (month === "MARCH" && birthDay <= 31){
    monthCode = 2;
  } else if (month === "APRIL"  && birthDay <= 30){
    monthCode = 5;
  } else if (month === "MAY" && birthDay <= 31){
    monthCode = 0;
  } else if (month === "JUNE" && birthDay <= 30){
    monthCode = 3;
  } else if (month === "JULY" && birthDay <= 31){
    monthCode = 5;
  } else if (month === "AUGUST" && birthDay <= 31){
    monthCode = 1;
  } else if (month === "SEPTEMBER" && birthDay <= 30){
    monthCode = 4;
  } else if (month === "OCTOBER" && birthDay <= 31){
    monthCode = 6;
  } else if (month === "NOVEMBER" && birthDay <= 30){
    monthCode = 2;
  } else if (month === "DECEMBER" && birthDay <= 31){
    monthCode = 4;
  }else {
    monthCode = "Invalid entry";
  } 
  
  var yearCode = getYearCode (birthYear);
  return (monthCode + dayCode + yearCode) % 7;
}



