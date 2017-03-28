$(document).ready(function(){
	// click
	$("#click button").click(function() {
		alert("Yay! You clicked the button!")
	});

	// hide
	$("#hide button").click(function() {
		$("#hide img").hide("slow");
	});	

	// show
	$("#show button").click(function() {
		$("#show img").show("slow");
	});

	// toggle
	$("#toggle button").click(function() {
		$(".toggle").toggle();
	});

	// slideDown
	$("#slideDown button").click(function() {
		$(".slideDown").slideDown(1200, function(){
		});
	});

	// slideUp
	$("#slideUp button").click(function() {
		$(".slideUp").slideUp(1200, function(){
			$(".slideUp").fadeOut(400);
		});
	});

	// slideToggle
	$("#slideToggle button").click(function() {
		$(".slideToggle").slideToggle("slow");
	});

	// fadeIn
	$("#fadeIn button").click(function() {
		$(".fadeIn").fadeIn("slow");
	});

	// fadeOut
	$("#fadeOut button").click(function() {
		$("#fadeOut img").fadeOut("slow");
	});

	// addClass
	$("#addClass button").click(function() {
		$("#addClass").addClass("party");
	});

	// before
	$("#before button").one("click", function() {
		$(this).before("<img src='./images/pyramid.png'>");
	});

	// after
	$("#after button").one("click", function() {
		$("#click p").after("<img src='./images/pack.png'>");
		$("#click").addClass("group");
		$("#after img").hide();
	});

	// html
	$("#html button").click(function() {
		$("#html h1").html("HTML")
	});

	// append
	$("#append button").click(function() {
		$("h1").append("()").prepend(".")
	});

	// attr
	$("#attr button").click(function() {
		$("#attr p").text($("#attr img").attr("alt"));
	});

	// val
	// Need to figure out how to only allow 1 click
	$("#val button").one("click", function() {
  		var color = $( this ).text();
  		$("input").val(color);
  		if(color == "pink"){
  			$("#val button:nth-of-type(3)").after("<img class = 'canva_pony' src='./images/pink-canva.png'>");
  		} else if (color == "blue") {
  			$("#val button:nth-of-type(3)").after("<img class = 'canva_pony' src='./images/blue-canva.png'>");
  		} else {
  			$("#val button:nth-of-type(3)").after("<img class = 'canva_pony' src='./images/all-canva.png'>");
  		}
	});
 
	// text
	$("#text button").click(function() {
		$("#text").text("Friendship is Magic!");
		$("#text").addClass('friendship');
	});

	// data
	$("#data button").click(function() {
		$("#data p").data( "event", { type: "birthday party", who: "purple pony"});
		$("#data p").html( "It's a " + $("#data p").data("event").type);
		$("p.dataInput").text( "For " + $("#data p").data("event").who);
	});
});