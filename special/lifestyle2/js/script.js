$(function(){
	$('.planTab li').on('click', function(){

		var id = $(this).attr('id');

		$('.planTab li,.planContent > ul > li').removeClass('active');
		$('.planTab li#'+id).addClass('active');
		$('.planContent > ul > li#'+id).addClass('active');
	});
});



// tab click jump
$(function(){
	var header = parseInt($('.Page').css('margin-top'));

	$('.planContent + .planTab li').on('click', function(){
		$("html,body").animate({scrollTop:$('.planContent').offset().top - header});
	});
});



// parameter
$(function(){
	if(location.search == '?type=wide'){
		$('.planTab li,.planContent > ul > li').removeClass('active');
		$('.planTab li#wide').addClass('active');
		$('.planContent > ul > li#wide').addClass('active');
	}
});

