/* Swiper sliders init */

var galleryTop = new Swiper('.facitilies-slider__image', {
    spaceBetween: 10,
    // Disable preloading of all images
    //preloadImages: false,
    // Enable lazy loading
    lazy: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
    direction: 'horizontal',//
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