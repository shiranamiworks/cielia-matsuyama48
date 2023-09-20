

$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
				$(this).css('filter','blur(0px)');
            }else {
                    $(this).css('opacity','0');
                $(this).css('transform','translateY(30px)');
				$(this).css('filter','blur(6px)');
                }
        });
    });
});
$(function(){
    $(window).scroll(function (){
        $('.fadeinleft').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translate(0)');
				$(this).css('filter','blur(0px)');
            }else {
                    $(this).css('opacity','0');
                $(this).css('transform','translate(-50px)');
				$(this).css('filter','blur(6px)');
                }
        });
    });
});
$(function(){
    $(window).scroll(function (){
        $('.fadeinright').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translate(0)');
				$(this).css('filter','blur(0px)');
            }else {
                    $(this).css('opacity','0');
                $(this).css('transform','translate(50px)');
				$(this).css('filter','blur(6px)');
                }
        });
    });
});
$(function(){
    $(window).scroll(function (){
        $('.fadein-pc').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
				$(this).css('filter','blur(0px)');
            }else {
                    $(this).css('opacity','0');
                $(this).css('transform','translateY(30px)');
				$(this).css('filter','blur(6px)');
                }
        });
    });
});
