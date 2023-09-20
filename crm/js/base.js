/* ============================================================ 
ver.2020.04.01

//CRM領域

=============================================================== */


/*--------------------------------------

// 外部ファイル読み込み //

--------------------------------------*/

function parts(rootDir,File){
    $.ajax({
        url: rootDir + "library/" + File,
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}





/*--------------------------------------

crm--mainSlide
// TOP ナビ―ゲーション内　スライド //

--------------------------------------*/
$(document).ready(function() {
$('.crm--slider').slick({
  centerMode: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed:11000,
  easing:'ease-in-out',
  centerPadding: '30%',
  slidesToShow: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        centerPadding: '20%',
      }
    },{
      breakpoint: 768,
      settings: {
        centerPadding: '0',
      }
    }
  ]
});
});

$('.crm--slider').on('beforeChange',function(event, slick, currentSlide, nextSlide){
  if(nextSlide > 0) {
    $('.crm--slider').slick('slickSetOption', 'autoplaySpeed', 4000, true);
  } else {
    $('.crm--slider').slick('slickSetOption', 'autoplaySpeed', 4000, true);
  }
});



/*--------------------------------------

Navigation

--------------------------------------*/
// ハンバーガーメニュー開閉 //
$(function(){		
    var menuflag = 0;
    $('.spMenuBtn').click(function () {
        if(menuflag==0){
            $(this).addClass('open');
            menuflag = 1;
            $('.gnav').addClass('open');
        }else{
            $(this).removeClass('open');
            menuflag = 0;
            $('.gnav').removeClass('open');
        }
        return false();
    });
    $('.crm--btnNavClose').click(function () {
            $('.spMenuBtn').removeClass('open');
            $('.gnav').removeClass('open');
    });
});

// スペシャルコンテンツ開閉 //
$(function(){		
    var menuflag = 0;
    $('.navSp .btnOpen').click(function () {
        if(menuflag==0){
            $(this).addClass('open');
            menuflag = 1;
            $('.navSpWrap').slideDown();
        }else{
            $(this).removeClass('open');
            menuflag = 0;
            $('.navSpWrap').slideUp();
        }
        return false();
    });
});



/*--------------------------------------

 crm--pageTop

--------------------------------------*/
$(function() {
    var showFlag = false;
    var topBtn = $('.crm--pageTop');        
    topBtn.css('bottom', '-100px');
    var showFlag = false;
    $(window).scroll(function () {
        if ($(this).scrollTop() > 350) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({'bottom' : '2%'}, 400); 
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({'bottom' : '-100px'}, 400); 
            }
        }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

