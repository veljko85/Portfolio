$(document).ready(function(){

	$(".hamburger").click( function() {
		
		$(".druga").fadeToggle();
		$(".prva").toggleClass("ukrstanje");
		$(".treca").toggleClass("ukrstanje-suprotno");

		$(".first").toggle( "slide", 600 );
		$(".second").delay(200).toggle( "slide", 600 );
		$(".third").delay(400).toggle( "slide", 600 );
		$(".fourth").delay(600).toggle( "slide", 600 );
	});
	
	$(".squere").hover(function() {
		$(this).children(".info").fadeToggle();
	});

	$(".question").hover(function(){
		$(this).animate({"font-size": "3vw", "left": "52vw", "top": "40vh"}, 700);
		$(".hiring").fadeIn(700);
		$(".cont").delay(700).show().animate({"left": "37.5vw"}, 1000);
		$(".me").delay(700).show().animate({"right": "44.5vw"}, 1000);
	});

	$(window).scroll(function() {
  		if ($(document).scrollTop() > 50) {
    		$(".header").fadeOut();
    		$(".navigation").addClass("navDown");
    		$("#top").show();
  		}
  		else {
    	$(".header").show();
    	$(".navigation").removeClass("navDown");
    	$("#top").hide();
  	};
	});


	$("a[data-scroll]").scroller();
});