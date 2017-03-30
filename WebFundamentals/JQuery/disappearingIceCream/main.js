$(document).ready(function(){
	
	// Create dynamic images
	var iceCreamCone = "<img src='./images/cones.png 'alt='ice cream cone'>";
	var images = '';

	for (var i = 1; i <= 8; i++) {
		images += iceCreamCone;
	}
	console.log(images);

	$("h1").after(images);

	$("img").on('click', function(){
		$(this).addClass("hidden");
	});
 
 	$('button').on('click', function() {
    	location.reload();
  	});

});