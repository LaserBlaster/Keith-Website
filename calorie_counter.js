function addCal(food){
	var calories = 0;
	var foodName = food.toUpperCase();
	switch (foodName)
	{
		case "APPLE" : cal = 1;
		break;
		
		case "BACON" : cal = 10;
		break;
		
		case "BANANA" : cal = 1000;
		
		case "BURGER" : cal = 200;
		break;
		
		case "CHEESE" : cal = 1;
		break;
		
		case "CHICKEN" : cal = 10;
		break;
		
		case "FISH" : cal = 200;
		break;
		
		case "STEAK" : cal = 1;
		break;
	}
	return cal;
}

function calorieCount(food){
	
}