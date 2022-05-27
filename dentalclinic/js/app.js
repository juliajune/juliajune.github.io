// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
//import { tns } from "./node_modules/tiny-slider/src/tiny-slider"

// -- Swiper plugin--
import Swiper, {Pagination, Autoplay, Mousewheel} from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
	/* --- 1. IMAGE LAZY LOAD
	  NOT SLIDER IMAGES  ---*/
	  const lazyImages = document.querySelectorAll('img[data-src],source[data-srcset]');
	  const windowHeight = document.documentElement.clientHeight;
  
	  let lazyImagesPositions = [];
	  if (lazyImages.length > 0) {
		  lazyImages.forEach(img => {
			  if (img.dataset.src || img.dataset.srcset) {
				  lazyImagesPositions.push(img.getBoundingClientRect().top + scrollY);
				  lazyScrollCheck();
			  }
		  });
	  }
	  window.addEventListener("scroll", lazyScroll);
	  function lazyScroll() {
		  if (document.querySelectorAll('img[data-src],source[data-srcset]').length > 0) {
			  lazyScrollCheck();
		  }	
	  }
	  function lazyScrollCheck() {
		  let imgIndex = lazyImagesPositions.findIndex(
			  item => scrollY > item - windowHeight
		  );
		  if (imgIndex >= 0) {
			  if (lazyImages[imgIndex].dataset.src) {
				  lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
				  lazyImages[imgIndex].removeAttribute('data-src');
			  } else if (lazyImages[imgIndex].dataset.srcset) {
				  lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
				  lazyImages[imgIndex].removeAttribute('data-srcset');
			  }
			  delete lazyImagesPositions[imgIndex];
		  }
	  }
	  /* / LAZY LOAD FOR IMAGES. NOT SLIDER IMAGES */

	/*--  TESTIMONIALS SLIDER --*/   
	let sliderTestimonials = new Swiper('.testimonials-slider', {
		modules: [Pagination,  Autoplay, Mousewheel],
		
		autoplay: {
			delay: 300,           
		},
		lazy: true,
		loop: true,
		loopedSlides: 1,
		slidesPerView: 1,
		mousewheel: true,		
		spaceBetween: 30,  
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},  
		breakpoints: {
			992: {
				loopedSlides: 3,
				slidesPerView: 3,
				spaceBetween: 60, 	
				mousewheel: false,			             
			},
		}  
	});   
	/*--  /TESTIMONIALS SLIDER --*/   
	/*-- BURGER MENU --*/
	let burgerMenu = document.querySelector('.header__burger');
	let menuBody = document.querySelector('.header__nav');

	burgerMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('no-scroll');           
		burgerMenu.classList.toggle('active');
		menuBody.classList.toggle('active');       
	});
	/*--/BURGER MENU --*/

	
})
