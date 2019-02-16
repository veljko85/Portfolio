

function hamburger() {

	var line2 = document.getElementById("secondLine").style.display;

	if (line2 == "none") {
		document.getElementById("firstLine").classList.remove("change1");
		document.getElementById("secondLine").style.display = "block";
		document.getElementById("thirdLine").classList.remove("change2");
		document.getElementById("firstBox").style.marginLeft = "-10%";
		setTimeout('document.getElementById("secondBox").style.marginLeft = "-10%";', 200);
		setTimeout('document.getElementById("thirdBox").style.marginLeft = "-10%";', 400);
		setTimeout('document.getElementById("fourthBox").style.marginLeft = "-10%";', 600);

	}	else	{
		document.getElementById("firstLine").classList.add("change1");
		document.getElementById("secondLine").style.display = "none";
		document.getElementById("thirdLine").classList.add("change2");
		document.getElementById("firstBox").style.marginLeft = "45%";
		setTimeout('document.getElementById("secondBox").style.marginLeft = "45%";', 200);
		setTimeout('document.getElementById("thirdBox").style.marginLeft = "45%";', 400);
		setTimeout('document.getElementById("fourthBox").style.marginLeft = "45%";', 600);
	}

}
$(document).ready(function(){
	$("a[data-scroll]").scroller();
});