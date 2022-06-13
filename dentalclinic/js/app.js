
//import Swiper from 'swiper';

import '../libs/swiper.min.js';

document.addEventListener('DOMContentLoaded', () => {
	/*--  TESTIMONIALS SLIDER --*/   
	/*
	let sliderTestimonials = new Swiper('.testimonials-slider', {
		autoplay: {
			delay: 3000,           
		},
		loop: true,
		loopedSlides: 3,
		slidesPerView: 3,
		mousewheel: true,		
		spaceBetween: 30,  
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},  
		breakpoints: {
			992: {
				loopedSlides: 1,
				slidesPerView: 1,
				spaceBetween: 60, 	
				mousewheel: false,			             
			},
		}  
	});  
	*/ 
	/*--  /TESTIMONIALS SLIDER --*/  
	let sliderTestimonials = new Swiper('.testimonials-slider', {
		autoplay: {
			delay: 3000,           
		},
		loop: true,
		loopedSlides: 3,
		slidesPerView: 3,
		mousewheel: true,		
		spaceBetween: 30,  
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},  
		breakpoints: {
			992: {
				loopedSlides: 1,
				slidesPerView: 1,
				spaceBetween: 60, 	
				mousewheel: false,			             
			},
		}  
	});   
	/*-- BURGER MENU --*/
	let burgerMenu = document.querySelector('.header__burger');
	let menuBody = document.querySelector('.header__nav');

	burgerMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('no-scroll');           
		burgerMenu.classList.toggle('active');
		menuBody.classList.toggle('active');       
	});
	/*--/BURGER MENU --*/

	/*-- IE 11 image--*/
	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
	// true on IE11
	// false on Edge and other IEs/browsers. 
	if (isIE11 == true){
		function ibg(){
			let ibg=document.querySelectorAll(".ibg");
				for (var i = 0; i < ibg.length; i++) {
				if(ibg[i].querySelector('img')){
				ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
				}
			}
		}        
		ibg();
	}
	/*-- /IE 11 image--*/

	
})
