// 来場者専用お問い合わせボタン //
$(function() {
    var showFlag = false;
    var bnrInquery = $('.crm--bnrInquery .crm--bnr');      
    $(window).scroll(function () {
        if ($(this).scrollTop() > 350) {
            if (showFlag == false) {
                showFlag = true;
                bnrInquery.stop().animate({'right' : '0'}, 400); 
            }
        } else {
            if (showFlag) {
                showFlag = false;
                bnrInquery.stop().animate({'right' : '-250px'}, 400); 
            }
        }
    });
});
// クリックアクション //
$(function(){
    $('.crm--bnrInquery .crm--bnr.crm--pc').click(function () {
        $(this).addClass('closed');
    });
});