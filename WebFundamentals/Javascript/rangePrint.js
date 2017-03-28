var one; 
var two;
var three;

function rangePrint(one, two, three) {
	for (var i = one; i < two; i+=three) {
		console.log(i);
	}
}

rangePrint(2, 10, 2);