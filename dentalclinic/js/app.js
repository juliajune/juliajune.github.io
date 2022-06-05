// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
//import { tns } from "./node_modules/tiny-slider/src/tiny-slider"

// -- Swiper plugin--
import Swiper, {Pagination, Autoplay, Mousewheel} from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
	/*--  TESTIMONIALS SLIDER --*/   
	let sliderTestimonials = new Swiper('.testimonials-slider', {
		modules: [Pagination,  Autoplay, Mousewheel],
		
		autoplay: {
			delay: 3000,           
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
