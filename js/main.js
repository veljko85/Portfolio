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
		$(this).children().fadeToggle();
	});

	$(".question").hover(function(){
		$(this).animate({"font-size": "10vw", "left": "65vw", "top": "50vh"}, 700);
		$(".hiring").fadeIn(700);
		$(".cont").delay(700).show().animate({"left": "18vw"}, 1000);
		$(".me").delay(700).show().animate({"right": "22vw"}, 1000);
	})
	$("a[data-scroll]").scroller();
});