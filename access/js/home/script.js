// JavaScript Document


if (navigator.userAgent.indexOf('Windows') > 0) {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('windows');
}



if(navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./) || navigator.userAgent.indexOf('Edge') >= 0) {
  $('body').on("mousewheel", function () {
    event.preventDefault();
    var wd = event.wheelDelta;
    var csp = window.pageYOffset;
    window.scrollTo(0, csp - wd);
  });
} 

// Anchorlink smooth
jQuery(document).ready(function($) {
   $('a').click(function(){
      $('html, body').animate({
         scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return 
   });     
});

// Dot link　フェードイン
$(window).scroll(function() {
	// フェードイン
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
	
	
	var window_top = $(window).scrollTop();
		
	// mainmenu
	var mainmenu = $('#mainmenu').offset().top
	if (window_top >= mainmenu) {
		$('#dot').show();
	}else{
		$('#dot').hide();
	}
	
	// concept		
	var concept = $('#concept').offset().top
	if (window_top >= concept) {	
		$('#dot span').removeClass('active');
		$('#dot #btn1').addClass('active');
	}else{
		$('#dot #btn1').removeClass('active');
	}
	
	// access
	var access = $('#access').offset().top
	if (window_top >= access) {
		$('#dot span').removeClass('active');
		$('#dot #btn2').addClass('active');
	}else{
		$('#dot #btn2').removeClass('active');
	}
	
	// location
	var location = $('#location').offset().top
	if (window_top >= location) {
		$('#dot span').removeClass('active');
		$('#dot #btn3').addClass('active');
	}else{
		$('#dot #btn3').removeClass('active');
	}
	
	// design
	var design = $('#design').offset().top
	if (window_top >= design) {
		$('#dot span').removeClass('active');
		$('#dot #btn4').addClass('active');
	}else{
		$('#dot #btn4').removeClass('active');
	}
	
	// plan
	var plan = $('#plan').offset().top
	if (window_top >= plan) {
		$('#dot span').removeClass('active');
		$('#dot #btn5').addClass('active');
	}else{
		$('#dot #btn5').removeClass('active');
	}
	
	// conceptroom
	var conceptroom = $('#conceptroom').offset().top
	if (window_top >= conceptroom) {
		$('#dot span').removeClass('active');
		$('#dot #btn6').addClass('active');
	}else{
		$('#dot #btn6').removeClass('active');
	}
	
	// quality
	var quality = $('#quality').offset().top
	if (window_top >= quality) {
		$('#dot span').removeClass('active');
		$('#dot #btn7').addClass('active');
	}else{
		$('#dot #btn7').removeClass('active');
	}
	
	// bland
	var bland = $('#bland').offset().top
	if (window_top >= bland) {
		$('#dot span').removeClass('active');
		$('#dot #btn8').addClass('active');
	}else{
		$('#dot #btn8').removeClass('active');
	}
	
});



$(document).ready(function(e) {
	
	
	function page1(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var posConcept = $(".scene01-01-area").offset().top
		var posConcept2 = $(".scene01-01").height() * 0.5
//		$("html, body").animate({scrollTop:posConcept + posConcept2 + 200}, speed, "swing");
		$("html, body").animate({scrollTop:posConcept + 200}, speed, "swing");
		return false;	
	}
	
	
	function page2(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var posAccess = $(".scene02-01-area").offset().top
		var posAccess2 = $(".scene02-01").height() * 0.5
		$("html, body").animate({scrollTop:posAccess + posAccess2 + 200}, speed, "swing");
		return false;	
	}
	
	function page3(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var posLocation = $(".scene03-01-area").offset().top
		var posLocation2 = $(".scene03-01").height() * 0.5
		$("html, body").animate({scrollTop:posLocation + posLocation2 + 200}, speed, "swing");
		return false;
	}
	
	function page4(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var posDesign = $(".scene04-01-area").offset().top
		var posDesign2 = $(".scene04-01").height() * 0.5
		$("html, body").animate({scrollTop:posDesign + posDesign2 + 200}, speed, "swing");
		return false;
	}
	
	function page5(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var posPlan = $(".scene05-01-area").offset().top
		var posPlan2 = $(".scene05-01").height() * 0.5
		$("html, body").animate({scrollTop:posPlan + posPlan2 + 200}, speed, "swing");
		return false;
	}
	
	function page6(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var posConceptroom = $(".scene06-01-area").offset().top
		var posConceptroom2 = $(".scene06-01").height() * 0.5
		$("html, body").animate({scrollTop:posConceptroom + posConceptroom2 + 200}, speed, "swing");
		return false;
	}
	
	function page7(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var posQuality = $(".scene07-01-area").offset().top
		var posQuality2 = $(".scene07-01").height() * 0.5
		$("html, body").animate({scrollTop:posQuality + posQuality2 + 200}, speed, "swing");
		return false;
	}
	
	function page8(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var posbland = $(".scene08-01-area").offset().top
		var posbland2 = $(".scene08-01").height() * 0.5
		$("html, body").animate({scrollTop:posbland + posbland2 + 200}, speed, "swing");
		return false;
	}
	
	
	$('#dot #btn1').click(function() {
		page1();
	});
	
	$('#dot #btn2').click(function() {
		page2();
	});
	
	$('#dot #btn3').click(function() {
		page3();
	});
	
	$('#dot #btn4').click(function() {
		page4();
	});
	
	$('#dot #btn5').click(function() {
		page5();
	});
	
	$('#dot #btn6').click(function() {
		page6();
	});
	
	$('#dot #btn7').click(function() {
		page7();s
	});
	
	$('#dot #btn8').click(function() {
		page8();
	});
		
});







/*	追従バナー設定
---------------------------------------------------------------- */

$(window).on('load scroll', function() {
  fix_element();
});
   
function fix_element() {
  // 固定配置に使用する要素
  var $fixWrapper = $('.special_wrap');
  var $fix = $('.bnr_campaign');
 
  // 要素がある場合のみ処理
  if($fixWrapper.length && $fix.length) {
    var fixTop = $fixWrapper.offset().top;
    var winScroll = $(window).scrollTop();
    var winheight = $(window).height();
    // 対象位置を通過していない場合
    if(winScroll + winheight -500 < fixTop ) {
      $fix.css({opacity:1,display:'block'});
    } else {
      $fix.css({opacity:0,display:'none'});
    }
  }
 $('.bnr_campaign .close').click(function () {
	$fix.css({opacity:0,display:'none',zIndex:-1});
	 
});
}




/*	ポップアップバナー設定
---------------------------------------------------------------- */
//表示回数のカウント用意
var $visit_num = 1;
var $visit_max = 3;


$(function(){
	
	//ポップアップの存在チェック
	//-------------------------
	if($('.bnr_popup').length){
		
		//訪問回数の合計カウント
		$visit_num = $.cookie('rokkomichi--visit_num') ? parseInt($.cookie('rokkomichi--visit_num')) + $visit_num: $visit_num;
		console.log($visit_num);
		//訪問回数が規定数を以下ならバナーの表示
		if($visit_num <= 3){
			$(".bnr_popup").show()
		}
		
		//訪問回数を追加
		$.cookie('rokkomichi--visit_num', $visit_num, { path: '/rokkomichi/'});
		
		/*
		//対象バナーのID格納
		var $banner_id = $('.bnr_popup').attr('id');
		
		//console.log($.cookie('rokkomichi--popup'));
		
		//ポップアップがあればcookieの判定
		//-------------------------
		//cookieの存在チェック
		if($.cookie('rokkomichi--popup')){
			//バナーIDがクッキーに保存されているか判定
			if($.cookie('rokkomichi--popup').indexOf(','+$banner_id+',') === -1){
				//ポップアップ関数の呼び出し
				func_popup($banner_id);
			}
		}else{
			//ポップアップ関数の呼び出し
			func_popup($banner_id);
		}
		*/
	}
	
	/*
	//ポップアップ関数
	function func_popup($id){
		//バナーの表示
		$(".bnr_popup").show()
		
		//cookieが存在すれば中身を取り出す
		var temp = $.cookie('rokkomichi--popup') ? $.cookie('rokkomichi--popup'): '';
		//カンマ区切りでバナーのIDを追加
		temp += (temp !== '') ? $id+',': ','+$id+',';
		
		//cookieの保存
		$.cookie('rokkomichi--popup', temp, {expires: 30, path: '/rokkomichi/'});
	}
	*/
	//cookieの削除
	$.removeCookie('rokkomichi--popup', {path: '/rokkomichi/'});
	
	$(".bnr_popup .close").click(function(){
		$(".bnr_popup").fadeOut();
	});
	
});
