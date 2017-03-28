
function DaysUntilMyBirthday(){
	var days= 60;

	while (days <= 60) {
		if (days > 30 && days <= 60) {
			console.log("My birthday is so far away!! ::sad face::");
		} else if (days <= 30 && days > 5) {
			console.log("My birthday is getting close!");
		} else if (days <=5 && days > 0) {
			console.log("OMG it's so close!");
		} else if (days == 0) {
			console.log("It's my birthday!");
			return;
		} 
		
		days = days - 1;
	}
}

DaysUntilMyBirthday();