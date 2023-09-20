$(function() {
  $('.tab li').on('click', function() {
      var index = $('.tab li').index(this);
      $('.tab_contents > div.tab_contents_inner').hide();
      $('.tab_contents > div.tab_contents_inner').eq(index).fadeIn(600);
      $('.tab li').removeClass('here');
      $(this).addClass('here')
  });
});
