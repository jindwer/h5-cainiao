$(function(){
  $('.has-child').hover(function(){
    $(this).find('.box').show();
  },function(){
    $(this).find('.box').hide();
  });

  $('.b').hover(function(){
    $(this).find('.box-content').show().end().find('i').addClass('icon-up');
  },function(){
    $(this).find('.box-content').hide().end().find('i').removeClass('icon-up');
  });
  //navbar根据屏幕的缩放
  var flag = 1;
  $('#my-nav-btn').click(function(){
    flag == 1?($('.my-nav-navbar').show(),flag=0):($('.my-nav-navbar').hide(),flag=1);
  });
  $(window).resize(function(){
    if($(document).width()>992){
      $('.my-nav-navbar').show();
      flag = 0;
    }else{
      $('.my-nav-navbar').hide();
      flag = 1;
    }
  });
  //二维码的显现
  $('.icon-qr').hover(function(){
    $('.qr-box').slideDown();
  },function(){
    $('.qr-box').slideUp();
  });
});
