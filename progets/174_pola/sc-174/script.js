new Swiper('.blocki-swiper .prod_blocki', {
    slidesPerView: 4,
    spaceBetween: 15,
    centeredSlides: false,
    loop: false,
    updateOnWindowResize: true,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: ".blocki.swiper-button-next",
        prevEl: ".blocki.swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 6,
        },
        432: {
            slidesPerView: 2,
            spaceBetween: 6,
        },
        850: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 4,
        },
    }
});

new Swiper('.pliti-swiper .prod_pliti', {
    slidesPerView: 4,
    spaceBetween: 15,
    centeredSlides: false,
    loop: false,
    updateOnWindowResize: true,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: ".pliti.swiper-button-next",
        prevEl: ".pliti.swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 6,
        },
        432: {
            slidesPerView: 2,
            spaceBetween: 6,
        },
        850: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 4,
        },
    }
});

new Swiper('.ready-swiper .ready_slider', {
    slidesPerView: 3,
    effect: 'coverflow',
    depth: 100,
    modifier: 1,
    rotate: 50,
    scale: 1,
    slideShadows: true,
    stretch: 0,
    spaceBetween: 15,
    centeredSlides: false,
    loop: false,
    updateOnWindowResize: true,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: ".ready.swiper-button-next",
        prevEl: ".ready.swiper-button-prev",
    },
    pagination: {
        el: ".ready.swiper-pagination",
        clickable: true,
      },
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 6,
        },
        600: {
            slidesPerView: 2,
        },
        990: {
            slidesPerView: 3,
        },
    }
});

new Swiper('.cert-swiper .cert_slider', {
    slidesPerView: 4,
    spaceBetween: 20,
    centeredSlides: false,
    loop: false,
    updateOnWindowResize: true,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: ".cert.swiper-button-next",
        prevEl: ".cert.swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 6,
        },
        432: {
            slidesPerView: 2,
            spaceBetween: 6,
        },
        850: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 4,
        },
    }
});

$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .header_mob-menu').toggleClass('active-burger');
        $('body').toggleClass('lock');
    });
  });
