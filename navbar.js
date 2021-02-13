$(window).scroll(function(){
	if ($(this).scrollTop() >=100) {
		document.getElementById("navbar").classList.add("fixed");
		document.getElementById("bar").classList.add("fixeda");
	} else {
		document.getElementById("navbar").classList.remove("fixed");
		document.getElementById("bar").classList.remove("fixeda");
	}
});