$(function(){

  $('.menu-btn').on('click',()=>{
    $('.menu-btn').toggleClass('close');
    $('.nav-wrapper').fadeToggle(500);
    $('body').toggleClass('noscroll')
  })

  if($(window).width() < 768){
    $('.nav-item a').on('click',()=>{
      $('.nav-wrapper').fadeOut(500);
      $('.menu-btn').removeClass('close');
      $('body').removeClass('noscroll');
    })
  }

});