require('../libs/splide/dist/js/splide.min.js');
require('../libs/splide/dist/css/splide.min.css');

const primarySliderOpts = {
  type: 'fade',
  autoplay: true,
  drag: false,
  arrows: true,
  speed: 2000,
  rewind: true,
  pagination: true,
  pauseOnHover: false
};

const secondarySliderOpts = {
	rewind      : true,
	fixedWidth  : 102,
	fixedHeight : 105,
	isNavigation: true,
	gap         : 10,
	focus       : 'center',
	pagination  : false,
	cover       : true,
	breakpoints : {
		'600': {
			fixedWidth  : 66,
			fixedHeight : 40,
		}
	}
};

const feedbackSliderOpts = {
  type: 'loop',
  autoplay: true,
  drag: false,
  arrows: true,
  speed: 1000,
  rewind: true,
  pagination: true,
  pauseOnHover: false
};

document.addEventListener( 'DOMContentLoaded', function () {
  const primarySlider  = new Splide('.splide', primarySliderOpts);
  const secondarySlider = new Splide( '#primary-slider', secondarySliderOpts).mount();
  const feedbacksSlider  = new Splide('#feedbacks-slider', feedbackSliderOpts).mount();

  primarySlider.sync( secondarySlider ).mount();
} );