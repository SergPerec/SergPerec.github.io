



let swiper = new Swiper('.action_swiper', {
  navigation: {
    nextEl: '.swiper_button_next',
    prevEl: '.swiper_button_prev',
  },
  slidesPerView: 2,
  spaceBetween: 20,

  breakpoints: {
    300: {
      slidesPerView: 1.3,
    },
    500: {
      slidesPerView: 1.6,
    },
    600: {
      slidesPerView: 2,
    },
  },

  on: {
    init: function (swiper) {
      setTimeout(() => updateArrowState(swiper), 0);
    },
    slideChange: function (swiper) {
      updateArrowState(swiper);
    },
  },
});

function updateArrowState(swiper) {
  const prevEl = document.querySelector('.swiper_button_prev');
  const nextEl = document.querySelector('.swiper_button_next');

  if (swiper.isBeginning) {
    prevEl.classList.add('disabled');
  } else {
    prevEl.classList.remove('disabled');
  }

  if (swiper.isEnd) {
    nextEl.classList.add('disabled');
  } else {
    nextEl.classList.remove('disabled');
  }
}

let catalogSwiper = new Swiper('.catalog_swiper', {
  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {
    300: {
      slidesPerView: 1.3,
    },
    500: {
      slidesPerView: 1.6,
    },
    600: {
      slidesPerView: 1,
    },
  },
});


document.addEventListener('DOMContentLoaded', () => {
  const infoSwiper = new Swiper('.info_slider', {
    direction: 'vertical',
    slidesPerView: 1.3,
    spaceBetween: 20,
    mousewheel: {
      forceToAxis: true, // Прокрутка только по вертикальной оси
      sensitivity: 1, // Чувствительность прокрутки
    },
  });
});


document.addEventListener('DOMContentLoaded', function () {
  // Проверяем, существует ли элемент слайдера
  const partnersSliderElement = document.querySelector('.partners_slider');

  if (!partnersSliderElement) {
    return;
  }

  // Инициализация Swiper
  const partnersSwiper = new Swiper(partnersSliderElement, {
    slidesPerView: 5, // Значение по умолчанию
    spaceBetween: 20,
    navigation: {
      nextEl: '.slider_btn_next',
      prevEl: '.slider_btn_prev',
    },
    breakpoints: {
      1024: {
        slidesPerView: 5,
      },
      850: {
        slidesPerView: 4,
      },
      700: {
        slidesPerView: 3,
      },
      300: {
        slidesPerView: 2,
      },
    },
  });

  // Найти элемент с бегунком
  const sliderInput = document.getElementById('slider');

  if (!sliderInput) {
    console.warn('Элемент с id="slider" не найден. Пропускаем управление бегунком.');
    return;
  }

  // Функция для вычисления текущего `slidesPerView`
  function getActiveSlidesPerView() {
    const activeBreakpoint = partnersSwiper.activeBreakpoint;
    if (activeBreakpoint) {
      return partnersSwiper.params.breakpoints[activeBreakpoint].slidesPerView || partnersSwiper.params.slidesPerView;
    }
    return partnersSwiper.params.slidesPerView;
  }

  // Функция для обновления бегунка
  function updateSliderRange() {
    const currentSlidesPerView = getActiveSlidesPerView();
    let maxValue;

    // Устанавливаем максимальное значение бегунка
    switch (currentSlidesPerView) {
      case 5:
        maxValue = 2;
        break;
      case 4:
        maxValue = 3;
        break;
      case 3:
        maxValue = 4;
        break;
      case 2:
        maxValue = 5;
        break;
      default:
        maxValue = 1;
    }

    sliderInput.max = maxValue;
    sliderInput.value = Math.min(sliderInput.value, maxValue);
  }

  // Принудительное обновление Swiper и бегунка
  function forceSwiperUpdate() {
    if (partnersSwiper && partnersSwiper.update) {
      partnersSwiper.update();
      updateSliderRange();
    } else {
      console.error('Swiper не удалось обновить.');
    }
  }

  // Обновление при загрузке
  requestAnimationFrame(() => {
    forceSwiperUpdate();
  });

  partnersSwiper.on('breakpoint', forceSwiperUpdate);

  partnersSwiper.on('slideChange', function () {
    sliderInput.value = partnersSwiper.realIndex;
  });

  sliderInput.addEventListener('input', function () {
    const targetSlideIndex = parseInt(sliderInput.value, 10);
    partnersSwiper.slideTo(targetSlideIndex);
  });

  window.addEventListener('resize', forceSwiperUpdate);
});



document.addEventListener('DOMContentLoaded', function () {
  // Инициализация Swiper
  let partnersSwiper = new Swiper('.reviews_slider', {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: '.slider_btn_next',
      prevEl: '.slider_btn_prev',
    },
    initialSlide: 0,
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
      850: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 2,
      },
      300: {
        slidesPerView: 2,
      },
    },
  });

  // Найти элемент с бегунком
  const sliderInput = document.getElementById('slider');
  if (!sliderInput) {
    return;
  }

  // Функция для обновления max у бегунка
  function updateSliderRange() {
    const slidesPerView = partnersSwiper.params.slidesPerView;
    let maxValue;

    // Логика для maxValue
    switch (slidesPerView) {
      case 5:
        maxValue = 2;
        break;
      case 4:
        maxValue = 3;
        break;
      case 3:
        maxValue = 4;
        break;
      case 2:
        maxValue = 5;
        break;
      default:
        maxValue = 1;
    }

    sliderInput.max = maxValue;
  }

  // Устанавливаем начальное значение бегунка
  sliderInput.value = 0;

  // Вызываем updateSliderRange сразу после инициализации слайдера
  partnersSwiper.on('init', updateSliderRange);

  // Также обновляем max у бегунка при смене брейкпоинтов
  partnersSwiper.on('breakpoint', updateSliderRange);

  // Обновляем значение бегунка при смене слайда
  partnersSwiper.on('slideChange', function () {
    sliderInput.value = partnersSwiper.realIndex;
  });

  // Управляем слайдером через бегунок
  sliderInput.addEventListener('input', function () {
    const groupIndex = parseInt(sliderInput.value, 10);
    const targetSlideIndex = groupIndex;
    partnersSwiper.slideTo(targetSlideIndex);
  });

  updateSliderRange();
});


// ================catalog_menu_tabs=================================

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

// ========================map======================================
document.addEventListener('DOMContentLoaded', function () {
  // Проверяем наличие элемента карты
  const mapElement = document.getElementById('ymap');
  if (!mapElement) {
    return;
  }

  ymaps.ready(init);

  function init() {
    const myMap = new ymaps.Map("ymap", {
      center: [51.590326, 45.965212],
      zoom: 15,
      //controls: []
    });

    myMap.behaviors.disable('scrollZoom')

    myPlacemark = new ymaps.Placemark([51.590326, 45.965212], {
    },
      {
        iconLayout: 'default#image',
        iconImageHref: 'assets/images/contacts/map_icon.png',
        iconImageSize: [78, 82],
        iconImageOffset: [-40, -70],
      }),
      myMap.geoObjects.add(myPlacemark);

 
  }
});


// =====================menu===============================================

function showOverlay() {
  document.getElementById("overlay").style.display = "block";
}

function hideOverlay() {
  document.getElementById("overlay").style.display = "none";
}


document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const menuInner = document.querySelector('.header_inner.desc');
  const burgerBox = document.querySelector('.burger_box')
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuInner.classList.toggle('active');
    burgerBox.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.burger_mob');
  const burgerBox = document.querySelector('.burger_mob_box');
  const burgerClose = document.querySelector('.burger_mob_close');

  burgerBtn.addEventListener('click', () => {
    burgerBox.classList.toggle('active');
    showOverlay();
  });
  burgerClose.addEventListener('click', () => {
    burgerBox.classList.toggle('active');
    hideOverlay();
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('feedback_main');
  const openModalButtons = document.querySelectorAll('.feedbackOpen');
  const closeModalBtn = document.getElementById('closeFeedback');
  const overlay = document.getElementById("overlay");

  openModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      modal.style.display = 'flex';
      overlay.style.display = 'block';
    });
  });

  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  });

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    }
  });
});





