// Not sure why this doesn't work

var rate = .01;
var sum = 0;

for (i = 1; 1<= 30; i++){
	if(i==1) {
		rate = .01;
		continue;
	}
	rate = rate *2; 
	sum = sum + rate;
}

console.log(rate);
console.log(sum);

// This will run and for day 1, the ending sum will be .02 instead of .01
var rate = .01;
sum = 0;
for (i=1; i<=30; i++){
	rate = rate + rate;
    sum = sum + rate;
}
console.log(rate);
console.log(sum);

// Start at 2 so the first day's rate is .01 + .01, then add day 1 at the end 
var rate = .01;
sum = 0;
for (i=2; i<=30; i++){
	rate = rate + rate;
    sum = sum + rate;
}
console.log(rate);
console.log(sum + .01);