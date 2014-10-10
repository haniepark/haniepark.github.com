$(document).ready(function(){
	var sectionHeight = (window.innerHeight);
	$('.section-wrapper').css("min-height", sectionHeight+'px');

	$(window).on('resize', function(){

		var sectionHeight = (window.innerHeight);

		$('.section-wrapper').css("min-height", sectionHeight+'px');

	});
	$(window).scroll(function() {
	    var windscroll = $(window).scrollTop();
	    if (windscroll >= 200) {
		    $("#top").show();
	    } else {
	    	$("#top").hide();
	    }
	}).scroll();

    $("#top").on('click', 'a', function(){
		var moveTop = $(this).data('nav');
		$('html,body').animate({
			scrollTop: $(moveTop).offset().top 
			}, 'slow');	
	});

	$('article').addClass("hidden").viewportChecker({
        classToAdd: 'transition',
        offset: 100
    });
});

