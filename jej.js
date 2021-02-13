 $(window).scroll(function() {
	if ($(this).scrollTop()>=600) {
		document.getElementById("one").classList.add("animate__fadeInLeft");
		document.getElementById("two").classList.add("animate__fadeInLeft");
		document.getElementById("three").classList.add("animate__fadeInLeft");
		document.getElementById("four").classList.add("animate__fadeInLeft");
		document.getElementById("five").classList.add("animate__fadeInLeft");
		document.getElementById("six").classList.add("animate__fadeInLeft");
		document.getElementById("seven").classList.add("animate__fadeInLeft");
		document.getElementById("eight").classList.add("animate__fadeInLeft");
 	}
 	else {
		document.getElementById("one").classList.remove("animate__fadeInLeft");
		document.getElementById("two").classList.remove("animate__fadeInLeft");
		document.getElementById("three").classList.remove("animate__fadeInLeft");
		document.getElementById("four").classList.remove("animate__fadeInLeft");
		document.getElementById("five").classList.remove("animate__fadeInLeft");
		document.getElementById("six").classList.remove("animate__fadeInLeft");
		document.getElementById("seven").classList.remove("animate__fadeInLeft");
		document.getElementById("eight").classList.remove("animate__fadeInLeft");
 	}
 });
