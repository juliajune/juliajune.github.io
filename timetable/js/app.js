import Swiper, {Mousewheel, Controller, Navigation} from 'swiper';

/*--
 1. ACCORDION
 2. TABS
 2. SLIDERS  
--*/

document.addEventListener('DOMContentLoaded', () => {	
	/*-- ACCORDION --*/
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
	/*-- /ACCORDION --*/
	/*-- TABS --*/
	const tab = document.querySelectorAll('.tab');
	tab.forEach.call(tab, e => {
		const tabNavLinks = e.querySelectorAll('.tab__nav-link');
		tab.forEach.call(tabNavLinks, (e, tabIndex) => {
			e.addEventListener('click', event => {
			//Currently tab nav blank
			const tabPanes = e.closest('.tab').querySelector('.tab__body').children;
			//Currently tab nav item
			const tabNavItems = e.closest('.tab').querySelector('.tab__nav').querySelectorAll('.tab__nav-item');
			
			event.preventDefault();
			
			//Active/inactive tabs nav items
			tab.forEach.call(tabNavItems, (e, indexNav) => {
				if (indexNav === tabIndex) {
				e.classList.add('active');
				} else {
				e.classList.remove('active');
				}
			});

			//Active/inactive tabs nav blanks
			tab.forEach.call(tabPanes, (e, indexPane) => {
				if (indexPane === tabIndex) {
				e.classList.add('active');
				} else {
				e.classList.remove('active');
				}
			});
			}, false);
		});
	});
	/*-- /TABS --*/
	/*-- SLIDERS --*/
    
	var sliderDay = new Swiper('.day-slider', {
		modules: [Mousewheel, Controller, Navigation],
		slideToClickedSlide: true,
		mousewheel: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		
			
	});   

})//End

// Tabs


