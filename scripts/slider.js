$(window).on('load', function() {
var $slider = $('.slideshow .slider'),
  maxItems = $('.item', $slider).length;

$sliderRight = $('.slideshow').clone().addClass('slideshow-right').appendTo($('.split-slideshow'));

rightItems = $('.item', $sliderRight).toArray();
reverseItems = rightItems.reverse();
$('.slider', $sliderRight).html('');

for (i = 0; i < maxItems; i++) {
  $(reverseItems[i]).appendTo($('.slider', $sliderRight));
}

$slider.addClass('slideshow-left');

// Initialize all sliders
$('.slideshow-left').slick({
  vertical: true,
  verticalSwiping: false,
  arrows: false,
  infinite: true,
  dots: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000,
  focusOnSelect: false,
  accessibility: false,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});

$('.slideshow-right .slider').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: true,
  speed: 950,
  focusOnSelect: false,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  initialSlide: maxItems - 1
});

$('.slideshow-text').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: true,
  speed: 900,
  focusOnSelect: false,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});

// Sync sliders AFTER they have all initialized
setTimeout(function () {
  $('.slideshow-left').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
    $('.slideshow-text').slick('slickGoTo', nextSlide);
  });
}, 1000);
});
