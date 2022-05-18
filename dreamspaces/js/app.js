//--- vanillajs-datepicker plugin ---
import { Datepicker } from 'vanillajs-datepicker';

// -- Swiper plugin--
import Swiper, {Navigation, Pagination, Scrollbar, Lazy, Autoplay, Mousewheel, Controller} from 'swiper';


/* --- PROJECT SCRIPTS ---
  1. Image lazy load 
  2. FAQ Accordion
  3. Burger menu 
  4. Datapicter calendar
  5. Select
  6. Hero slider
  7. Spaces slider
  8. Facilities slider
  9. Customers slider
  10. Reviews slider
  11. Gallery slider

--- /PROJECT SCRIPTS --- */


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
	/*--- 2. FAQ ACCORDION ---*/
	const accordionItemHeaders = document.querySelectorAll(".accordion__item-header");
	accordionItemHeaders.forEach(accordionItemHeader => {
		accordionItemHeader.addEventListener("click", event => {
			const currentlyActiveAccordionItemHeader = document.querySelector(".accordion__item-header.active");
			if((currentlyActiveAccordionItemHeader) && (currentlyActiveAccordionItemHeader!==accordionItemHeader)) {
				currentlyActiveAccordionItemHeader.classList.toggle("active");
				currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
			}

			accordionItemHeader.classList.toggle("active");
			const accordionItemBody = accordionItemHeader.nextElementSibling;
			if(accordionItemHeader.classList.contains("active")) {
			accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
			}
			else {
			accordionItemBody.style.maxHeight = 0;
			}    
	});
	});	
	/*--- /FAQ ACCORDION ---*/
	/*--- 3.  BUGGER MENU ---*/
    let burgerMenu = document.querySelector('.header__burger');
    let menuBody = document.querySelector('.header__nav');
    let menuList = document.querySelector('.header__nav-list');
    let menuItem = document.querySelector('.header__nav-item');
  
    burgerMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('no-scroll');           
        burgerMenu.classList.toggle('active');
        menuBody.classList.toggle('active');       
    });  
   /*--- /BUGGER MENU ---*/
	/*--- 4. DATAPICKER CALENDAR ---*/
    const elem = document.querySelector('input[name="foo"]');
    const datepicker = new Datepicker(elem, {
        format: 'd M yyyy',    //date format
        minDate: 'today',      //current date - today
        maxDate: '60',         //max days - current date + 60 days
        maxNumberOfDates: '2', //The maximum number of days that can be selected
        dateDelimiter: ' , ',  //If multiple dates are selected, then the separator is 'space comma space'
    }); 

    /*Custom code for datapicter*/
    //Find datepicker
    let dataActive=document.querySelector('.datepicker');  
    let dataPic=document.querySelector('.datapic'); 
    //Listen for a click anywhere on the page
    document.addEventListener('click', function(){
        //The click is made 
        /* if the datapicker contains the active class,
           then the "up arrow" on the calendar field (div class ='datapic') */
        if (dataActive.classList.contains("active") == true){
            dataPic.classList.add('datapic_active');
        }
        /* if the datapicker not contains the active class,
           then the "down arrow" on the calendar field (div class ='datapic') */
        else{
            dataPic.classList.remove('datapic_active');
        }
    })
 /*--- /DATAPICKER CALENDAR ---*/
 /*--- 5 SELECT ---*/
 document.querySelectorAll('.select').forEach(function (selectWrapper) {
	const selectBtn = selectWrapper.querySelector('.select__button');
	const selectList = selectWrapper.querySelector('.select__list');
	const selectListItems = selectList.querySelectorAll('.select__item');
	const selectInput = selectWrapper.querySelector('.select__input-hidden');


	selectBtn.addEventListener('click', function (e) {
		selectList.classList.toggle('select__list_visible');
		this.classList.toggle('select__button_active');
	});
	
	selectListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			selectBtn.innerText = this.innerText;
			selectBtn.focus();
			selectInput.value = this.dataset.value;
			selectList.classList.remove('select__list_visible');
		});
	});
	
	document.addEventListener('click', function (e) {
		if (e.target !== selectBtn) {
			selectBtn.classList.remove('select__button_active');
			selectList.classList.remove('select__list_visible');
		}
	});
});
/*--- /SELECT ---*/

/*--- 6. HERO SLIDER ---*/   
var sliderHero = new Swiper('.hero-slider', {
	modules: [Navigation, Pagination, Scrollbar, Lazy, Autoplay, Mousewheel],
	autoplay: {
		delay: 5000,           
	},
	lazy: true,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},   
});   
/*--- /HERO SLIDER ---*/

/*--- 7. SPACES SLIDER ---*/    
var sliderSpaces = new Swiper('.spaces-slider', {
	modules: [Navigation, Pagination, Scrollbar, Lazy, Autoplay, Mousewheel],
	autoplay: {
		delay: 5000,           
	}, 
	lazy: true,
	slidesPerView: 1,
	spaceBetween: 20,            
	pagination: {
	  el: ".swiper-pagination",
	  type: "fraction",
	},        
	
	navigation: {
		nextEl: '.spaces-button-next',
		prevEl: '.spaces-button-prev',           
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
	breakpoints: {
		576: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 30,                
		}
	}      
});
/*---/ SPACES SLIDER ---*/


/*--- 8. FACILITIES SLIDER ---*/
/* Swiper sliders init */
var galleryTop = new Swiper('.facitilies-slider__image', {
	modules: [Navigation, Pagination, Scrollbar, Lazy, Autoplay, Mousewheel, Controller],
	spaceBetween: 10,
	lazy: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	loop: true,
	loopedSlides: 4,
	mousewheel: true,
	breakpoints: {
		768: {
			direction: 'vertical',               
		},
	} 
	});
var galleryThumbs = new Swiper('.facitilies-slider__text', {
	modules: [Navigation, Pagination, Scrollbar, Lazy, Autoplay, Mousewheel, Controller],
	autoplay: {
			delay: 5000,           
		}, 
	direction: 'horizontal',
	spaceBetween: 10,
	centeredSlides: true,
	slidesPerView: 'auto',
	touchRatio: 0.2,
	slideToClickedSlide: true,
	loop: true,
	loopedSlides: 4,
	mousewheel: true,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",             
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
		dragSize: 40,                
	},
	breakpoints: {
		768: {
			direction: 'vertical',               
		},
	} 
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;
/*--- /FACILITIES SLIDER ---*/

/*--- 9. CUSTOMERS SLIDER ---*/
var customerSlider = new Swiper('.customers-slider', {
	modules: [Navigation, Pagination, Scrollbar, Lazy, Autoplay, Mousewheel],
	autoplay: {
		delay: 5000,
	},
	lazy: true,
	spaceBetween: 30,
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 20
		},            
		480: {
			slidesPerView: 2,
			spaceBetween: 30
		},           
		640: {
			slidesPerView: 4,
			spaceBetween: 40
		},
		992: {
			slidesPerView: 6,
			spaceBetween: 30
		}
	}    
});
//  /CUSTOMERS SLIDER

/*--- 10. REVIEWS SLIDER ---*/
var swiper898080 = new Swiper('.reviews-slider', {
	modules: [Navigation, Pagination, Scrollbar, Lazy, Autoplay, Mousewheel],
	autoplay: {
		delay: 5000,				 
	},  
	//loop: true,         
	slidesPerView: 1.2,
	spaceBetween: 10,
	pagination: {
			el: ".slider__pagination",
			type: "progressbar",
	},
	
	navigation: {
		nextEl: '.reviews-button-next',
		prevEl: '.reviews-button-prev',
		//disabledClass: 'my-button-disabled',
	},
	breakpoints: {
		576: {
			//slidesPerView: 2.5,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 2.2,
			spaceBetween: 10,
			//slidesOffsetBefore: 165,
		}
	}    
});

/*--- REVIEWS SLIDER ---*/

/*--- 10. GALLERY SLIDER ---*/
const gallerySlider = new Swiper('.gallery-slider', {
	modules: [Navigation, Pagination, Scrollbar, Lazy, Autoplay, Mousewheel],
	autoplay: {
		delay: 5000,                    
	}, 
	lazy: true,
	//loop: true,
	slidesPerView: 1.2,
	spaceBetween: 10,
		  
	navigation: {
		nextEl: '.gallery-button-next',
		prevEl: '.gallery-button-prev',
		
	},
	breakpoints: {
		576: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 10,
		   
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 10,
			
		}
	}    
});

})//THE END


	


	