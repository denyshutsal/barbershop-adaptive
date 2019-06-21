// Owl carousels (owl-carousel.js)
// ----------------------------------------------------------------------

$(document).ready(function () {
  if ($(window).width() < 768) {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 50,
      autoplay: true,
      responsive: {
        0: {
          items: 1
        }
      }
    });
  } else {
    $('.advantages__slider, .reviews__slider').removeClass('owl-carousel owl-theme owl-loaded owl-drag');
  }
});

$(window).resize(function () {
  if ($(window).width() < 768) {
    startCarousel();
  } else {
    stopCarousel();
  }
});

function startCarousel () {
  $('.advantages__slider, .reviews__slider').addClass('owl-carousel owl-theme owl-loaded owl-drag');
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 50,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      }
    }
  });
}

function stopCarousel () {
  $('.owl-carousel').trigger('destroy.owl.carousel');
  $('.advantages__slider, .reviews__slider').removeClass('owl-carousel owl-theme owl-loaded owl-drag');
}
