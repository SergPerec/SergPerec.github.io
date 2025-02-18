

const swiper = new Swiper('.rest_center_mob_swiper-container', {
  loop: true,

  spaceBetween: 12,
  // autoplay: {
  //     delay: 3000, 
  //     // disableOnInteraction: false,
  // },
  breakpoints: {

    300: {
      slidesPerView: 1.3,
    },

    420: {
      slidesPerView: 1.5,
    },

    500: {
      slidesPerView: 2,
    },

  }
});

// Маленькая галерея (миниатюры)
const galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  autoplay: false,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

// Большая галерея
const galleryTop = new Swiper('.gallery-top', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  allowTouchMove: false,
  autoplay: false, // Автоплей отключен по умолчанию
  thumbs: {
    swiper: galleryThumbs, // Связываем с миниатюрами
  },
  breakpoints: {

    300: {
      slidesPerView: 1.3,
    },

    500: {
      slidesPerView: 1,
    },

  }
});

function updateSwiperSettings() {
  if (window.innerWidth >= 800) {
    galleryTop.allowTouchMove = false;
    galleryTop.autoplay.stop();
  } else {
    galleryTop.allowTouchMove = true;
  }
}

updateSwiperSettings();
window.addEventListener('resize', updateSwiperSettings);

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.rest_swiper-container', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: {
      nextEl: '.rest_swiper-button-next',
      prevEl: '.rest_swiper-button-prev',
    },
  });

  const thumbnails = document.querySelectorAll('.rest_center_item');
  const overlay = document.getElementById('rest_overlay');

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      overlay.style.display = 'flex';
      swiper.update();
      swiper.slideTo(index);
    });
  });

  overlay.addEventListener('click', (e) => {
    if (!e.target.closest('.rest_swiper-container')) {
      overlay.style.display = 'none';
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.menu_desktop_burger');
  const burgerMenu = document.querySelector('.burger_menu_desc');
  const menuDesc = document.querySelector('.menu_desktop');

  // Функция для закрытия меню
  const closeMenu = () => {
    burgerMenu.style.opacity = '0';
    // burgerMenu.style.display = 'none';
    burgerMenu.style.visibility = 'hidden';
    menuDesc.style.borderRadius = '0 0 30px 30px';
  };

  // Функция для открытия меню
  const openMenu = () => {
    // burgerMenu.style.display = 'block';
    burgerMenu.style.visibility = 'visible';
    burgerMenu.style.opacity = '1';
    burgerMenu.style.top = '75px';
    menuDesc.style.borderRadius = '0'; 
  };

  // Обработчик для бургера
  burger.addEventListener('click', (event) => {
    event.stopPropagation(); 
    if (burgerMenu.style.opacity === '1') {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Закрытие меню при клике вне его области
  document.addEventListener('click', (event) => {
    if (!burgerMenu.contains(event.target) && !burger.contains(event.target)) {
      closeMenu();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const burgerMob = document.querySelector('.burger_btn_mob');
  const burgerMenuMob = document.querySelector('.burger_menu_mobila');
  const burgerMenuMobClose = document.querySelector('.burger_menu_mobila_close');


  // Функция для закрытия меню
  const closeMenu = () => {
    // burgerMenuMob.style.display = 'none';
    burgerMenuMob.style.opacity = '0';
    burgerMenuMob.style.right = '-100%';
  };

  // Функция для открытия меню
  const openMenu = () => {
    // burgerMenuMob.style.display = 'block';
    burgerMenuMob.style.opacity = '1';
    burgerMenuMob.style.right = '0';
  };

  // Обработчик для бургера
  burgerMob.addEventListener('click', (event) => {
    event.stopPropagation(); 
    if (burgerMenuMob.style.opacity === '1') {
      closeMenu();
    } else {
      openMenu();
    }
  });

  burgerMenuMobClose.addEventListener('click', (event) => {
    event.stopPropagation(); 
      closeMenu();
  });

  // Закрытие меню при клике вне его области
  document.addEventListener('click', (event) => {
    if (!burgerMenuMob.contains(event.target) && !burgerMob.contains(event.target)) {
      closeMenu();
    }
  });
});

// ================TABS===============================================

function Tabs(target) {
  var _elemTabs = (typeof target === 'string' ? document.querySelectorAll(target) : target);

  _elemTabs.forEach(function (tabs) {
      var _eventTabsShow;

      if (tabs) {
          var _showTab = function (tabsLinkTarget) {
              var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
              tabsPaneTarget = tabs.querySelector(tabsLinkTarget.getAttribute('href'));
              tabsLinkActive = tabs.querySelector('.tabs__link_active');
              tabsPaneShow = tabs.querySelector('.tabs__pane_show');
              if (tabsLinkTarget === tabsLinkActive) {
                  return;
              }
              if (tabsLinkActive !== null) {
                  tabsLinkActive.classList.remove('tabs__link_active');
              }
              if (tabsPaneShow !== null) {
                  tabsPaneShow.classList.remove('tabs__pane_show');
              }
              tabsLinkTarget.classList.add('tabs__link_active');
              tabsPaneTarget.classList.add('tabs__pane_show');
              tabs.dispatchEvent(_eventTabsShow);
          };

          var _switchTabTo = function (tabsLinkIndex) {
              var tabsLinks = tabs.querySelectorAll('.tabs__link');
              if (tabsLinks.length > 0) {
                  if (tabsLinkIndex > tabsLinks.length) {
                      tabsLinkIndex = tabsLinks.length;
                  } else if (tabsLinkIndex < 1) {
                      tabsLinkIndex = 1;
                  }
                  _showTab(tabsLinks[tabsLinkIndex - 1]);
              }
          };

          _eventTabsShow = new CustomEvent('tab.show', { detail: tabs });

          tabs.addEventListener('click', function (e) {
              var target = e.target.closest('.tabs__link');
              if (!target) {
                  return;
              }
              e.preventDefault();
              _showTab(target);
          });

          return {
              showTab: function (target) {
                  _showTab(target);
              },
              switchTabTo: function (index) {
                  _switchTabTo(index);
              }
          };
      }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  Tabs('.tabs');
});

