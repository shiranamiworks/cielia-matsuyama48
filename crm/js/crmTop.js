/* ============================================================ 
ver.2020.04.01

//CRM領域

=============================================================== */



/*--------------------------------------

body
crm--blockBrand

// 初回セッション時のみ全画面ビジュアル表示
// 他のページから遷移時は非表示
// ブラウザクローズでリセット

--------------------------------------*/
var webStorage = function(){
  var $brand = $('body');
  
  if(sessionStorage.getItem('access')){
    $brand.addClass('is-active');
  } else {
    $brand.removeClass('is-active');
    sessionStorage.setItem('access', 0);
  }
}

webStorage();



/*--------------------------------------

body
// 読み込み完了後にページ表示

--------------------------------------*/
$(window).on('load', function() {
  $('body').attr('data-loading', 'true');
});



/*--------------------------------------

crm--InfoArea
// 複数登録時に高さを自動取得

--------------------------------------*/
(function(){
	window.addEventListener('message', function(e){
		var changeHeight = e.data + 'px';
		$('#crmInfo').animate({height: changeHeight}, 300);
	},false);

})();



/*--------------------------------------

crm--blockBrand
// 全画面ビジュアル

--------------------------------------*/

// 時間制御 //
$(window).on('load', function() {
    setTimeout(function(){
        $('body').addClass('switch');
 //    },6000);
   },9000);
});

// クリックアクション //
$(function(){
    $('.crm--blockBrand .btn').click(function () {
        $('body').addClass('switch');
    });
});

// ビジュアル高さ自動取得 //
$(window).on('resize',function(){
    winH = $(window).height();
    $('.crm--blockBrand').outerHeight(winH);
});




/*--------------------------------------

crm--secDegitalSalon
// スライド //

--------------------------------------*/

// pre スライド3点 （プレ期）//
$(document).ready(function() {
$('.crm--salonSlider.pre').slick({
  centerMode: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed:4000,
  easing:'ease-in-out',
  slidesToShow: 3,
  dots: false,
  responsive: [
      {
      breakpoint: 768,
      settings: {
        centerPadding: '10%',
        slidesToShow: 1,
        dots: true,  
      }
    }
  ]
});
});

// senchaku スライド2点（優先期以降） //
$(document).ready(function() {
$('.crm--salonSlider.senchaku').slick({
  centerMode: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed:4000,
  easing:'ease-in-out',
  slidesToShow: 2,
  dots: false,
  responsive: [
      {
      breakpoint: 768,
      settings: {
        centerPadding: '10%',
        slidesToShow: 1,
        dots: true,  
      }
    }
  ]
});
});