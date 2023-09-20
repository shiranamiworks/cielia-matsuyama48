$(function(){
	inviewAnime();
});


/*--------------------------------------------------------------------------*
 * INVIEW
 *--------------------------------------------------------------------------*/

function inviewAnime() {
	$('.inview-animate').css('opacity', 0);
	$('.inview-animate').one('inview', function (event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			$(this).stop().animate({
				opacity: 1
			}, 300);
		} else {
			$(this).stop().animate({
				opacity: 0
			}, 300);
		}
	});
}
