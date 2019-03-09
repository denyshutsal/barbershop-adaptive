var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


// Owl carousel settings (Advantages section)
//----------------------------------------------------------------------
$(document).ready(function() {
  if ( $(window).width() < 768 ) {
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:50,
      autoplay: true,
      responsive:{
        0:{
          items:1
        }
      }
    });
  } else {
    $('.advantages__slider').removeClass('owl-carousel owl-theme owl-loaded owl-drag');
  }
});

$(window).resize(function() {
  if ( $(window).width() < 768 ) {
    startCarousel();
  } else {
    stopCarousel();
  }
});

function startCarousel(){
  $('.advantages__slider').addClass('owl-carousel owl-theme owl-loaded owl-drag');
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    autoplay: true,
    responsive:{
      0:{
        items:1
      }
    }
  });
}

function stopCarousel() {
  $('.owl-carousel').trigger('destroy.owl.carousel');
  $('.advantages__slider').removeClass('owl-carousel owl-theme owl-loaded owl-drag');
}

