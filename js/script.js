$(document).ready(function(){
	var sectionHeight = (window.innerHeight);
	$('.section-wrapper').css("height", sectionHeight+'px');

	$(window).on('resize', function(){

		var sectionHeight = (window.innerHeight);

		$('.section-wrapper').css("height", sectionHeight+'px');

	});

	//NAV ON CLICK
	$('nav').on('click', 'a', function(){
		var seeker = $(this).data('nav');
		$('html,body').animate({
			scrollTop: $(seeker).offset().top
			}, 'slow');
	});

	// $("#menu").click(function () {
	// 	$("#navfix").toggle("slide", {direction: "left"}, 500);
	// });
});

