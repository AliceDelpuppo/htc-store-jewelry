var swiper = new Swiper(".mySwiper-main-banner", {
    // cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});

// ----------------------------

var swiper = new Swiper(".mySwiper-varieties-gemstones", {
    slidesPerView: 7,
    spaceBetween: 2,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});

// ----------------------------

var swiper = new Swiper(".mySwiper-content-releases", {
    slidesPerView: 4,
    spaceBetween: 20,
    // freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});

