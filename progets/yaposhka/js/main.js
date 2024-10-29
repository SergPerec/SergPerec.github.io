
document.addEventListener("DOMContentLoaded", function() {
    const cardEvents = document.querySelectorAll('.card-main__event');
    const cardTopRed = document.querySelectorAll('.card__top__red');

    cardEvents.forEach(function(card) {
      const bgImage = card.getAttribute('data-background');
      if (bgImage) {
        card.style.backgroundImage = `url(${bgImage})`;
      }
    });

    cardTopRed.forEach(function(card) {
        const bgImage = card.getAttribute('data-background');
        if (bgImage) {
          card.style.backgroundImage = `url(${bgImage})`;
        }
    });

  });

const menuBtn = document.querySelector('.header__burger');
const menuOpen = document.querySelector('.header__menu');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close');

menuBtn.addEventListener('click', () => {
    menuOpen.classList.toggle('open');
    menuBtn.classList.toggle('active');
});

const sliderThumbs = new Swiper('.swiper ', {
    loop: true,
    spaceBetween: 20,
    speed: 2000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.slider__next', // кнопка Next
        prevEl: '.slider__prev' // кнопка Prev
    },
});

const modalOpenCards = document.querySelectorAll('.open__modal-card');
const modal = document.querySelector('.modal');
const fixedWindow = document.querySelector('.fixed__menu-wrapper');
const modalClose = document.querySelector('.modal__close');


modalOpenCards.forEach(function (elem) {
    elem.addEventListener('click', () => {
        modal.classList.toggle('open');
        fixedWindow.classList.toggle('fixed');
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('open');
    fixedWindow.classList.remove('fixed');
})

fixedWindow.addEventListener('click', () => {
    modal.classList.remove('open');
    fixedWindow.classList.remove('fixed');
})