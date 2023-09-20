// JavaScript Document



//PC.スマホの切り替え設定
$(window).on("load resize", init);
function init(){
	var _width = (window.innerWidth) ? window.innerWidth : document.body.clientWidth;
	if(_width <= 768){
		//スマホの設定
		$('body').removeClass('pc');
		$('body').addClass('sp');
		$('.js-change').each(function(){
			$(this).attr("src",$(this).attr("src").replace('_pc', '_sp'));
		});
	}
	//PCの設定
	else{
		if($('body').hasClass('sp')){
			$('.changeWidthPc').css('display', '');//画面切り替え時に初期化する
		}
		$('body').removeClass('sp');
		$('body').addClass('pc');
		$('.js-change').each(function(){
			$(this).attr("src",$(this).attr("src").replace('_sp', '_pc'));
		});
	}
	$('ul.class-first_child >li:first-child').addClass('first_child');//class-first_childのあるリストにクラス設定
}


$(function(){
	//ページトップスクロール機能
	var goTopBtn = $('#gotop');	
	goTopBtn.click(function () {
		$('body,html').animate({scrollTop: 0},500);
	  return false;
	});
});

//スマホMENU
$(function(){
var menu = $('.nav'), // スライドインするメニューを指定
    menuBtn = $('.btn_menu'), // メニューボタンを指定
    body = $(document.body),  
	shadow = 10,// スマホメニューの影分
    menuWidth = menu.outerWidth();                
     
    // メニューボタンをクリックした時の動き
    menuBtn.on('click', function(){
    // body に open クラスを付与する
    body.toggleClass('open');
        if(body.hasClass('open')){
            // open クラスが body についていたらメニューをスライドインする
            menu.fadeIn();    
        } else {
            // open クラスが body についていなかったらスライドアウトする
            menu.fadeOut();
        }             
    });
});    

//ナビのアクティブ処理

$(document).ready(function() {
    var activeUrl = location.pathname.split("/")[2];
      navList = $(".nav").find("a");
 
    navList.each(function(){
        if( $(this).attr("href").split("/")[2] == activeUrl ) {
         $(this).addClass("active");
       };
  });
});


//設備仕様ナビのアクティブ処理
$(document).ready(function() {
    var activeUrl = location.pathname.split("/")[3];
      navList = $(".quality_menu").find("a");
 
    navList.each(function(){
        if( $(this).attr("href").split("/")[3] == activeUrl ) {
         $(this).addClass("active");
       };
  });
});



/* ---------------------------------------------------
 * popup
 * ------------------------------------------------ */
$(document).on('click', '.popup', function(){
	var url = $(this).attr('href');
	var width = '800';
	var height = '600';
	var sub_wndow = window.open(url, "plan"+url, "width="+width+",height="+height+",scrollbars=yes, resizable=yes");
	sub_wndow.focus();
	return false;
});



/*	transitionのバグ用
---------------------------------------------------------------- */
$(function(){
    setTimeout(function(){
       $("a").css('transition','all 0.3s');
    },100);
});


/*	ページ内スクロールの動作設定
---------------------------------------------------------------- */
$(function() {
	var headerHeight = $('header').outerHeight();
    var url = $(location).attr('href');
    if(url.indexOf("?id=") != -1){
        var id = url.split("?id=");
        var $target = $('#' + id[id.length - 1]);
        if($target.length){
            var pos = $target.offset().top-headerHeight; //ヘッダの高さ分位置をずらす
            $("html, body").animate({scrollTop:pos}, 1000);
        }
    }
});




