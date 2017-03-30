$(document).ready(function(){

	var tempImg = '';
	
	$('img').click(function(){

		tempImg = $(this).attr("src");
		$(this).attr("src", $(this).attr("src2"));
		$(this).attr("src2", tempImg);
		console.log("src");
		console.log("src2");
	});
});