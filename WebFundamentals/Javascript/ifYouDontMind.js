var hour = 8;
var minute = 50;
var period = 'AM';
var timeOfDay;

function CanIHaveTheTime(hour, minute, period){
	if (hour < 0 || min < 0) {
		return;
	}

	if (period = "AM") {
		timeOfDay = "in the morning";
	} else {
	  	timeOfDay = "in the evening";
	}

	if (minute <= 30) {
		console.log("It's just past", hour, timeOfDay);
	} else {
	  	console.log("It's almost", (hour + 1), timeOfDay);
	}
}

CanIHaveTheTime(7,15,'AM');