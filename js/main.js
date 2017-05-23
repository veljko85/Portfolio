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
	$("a[data-scroll]").scroller();
});