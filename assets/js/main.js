(function($) {
  "use strict";
  // preloader
  $(window).on("load", function (){
    $('#preloader').fadeOut();
  });
  
  // meanmenu
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "992"
  });
  
  // owlCarousel
  $(".hero-slider").owlCarousel({
    loop: true,  
    items:1,
    nav: false, 
    autoplay:true, 
    animateOut: 'fadeOut',
    mouseDrag:false 
  });
 
  /* magnificPopup video view */
  $(".play-btn").magnificPopup({
    type: "iframe"
  });
  
  
  $('select').niceSelect();

  // 
  $(".meanmenu-reveal").click(function(){
    $("body").toggleClass("reS")
  })



})(jQuery);
