require('../libs/splide/dist/js/splide.min.js');
require('../libs/splide/dist/css/splide.min.css');

const sliderOpts = {
  type: 'fade',
  autoplay: true,
  drag: false,
  arrows: true,
  speed: 2000,
  rewind: true,
  pagination: false,
  pauseOnHover: false
};

document.addEventListener( 'DOMContentLoaded', function () {
  const slider = new Splide('.splide', sliderOpts).mount();
} );