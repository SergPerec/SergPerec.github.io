
$(document).ready(function () {
    var leftSwiper = new Swiper('.left-slider', {
        direction: 'vertical',
        spaceBetween: 2,
        slidesPerView: 1,
        allowTouchMove: false,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    var rightSwiper = new Swiper('.right-slider', {
        direction: 'vertical',
        spaceBetween: 2,
        slidesPerView: 1,
        allowTouchMove: false,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    leftSwiper.on('slideChange', function () {

        var currentIndex = leftSwiper.realIndex;
        var totalSlides = leftSwiper.slides.length - 1;
        var oppositeIndex = totalSlides - currentIndex;
        rightSwiper.slideToLoop(oppositeIndex);
        $('#slider').val(currentIndex);
    });

    rightSwiper.on('slideChange', function () {
        var totalSlides = leftSwiper.slides.length - 1;
        var currentIndex = totalSlides - rightSwiper.realIndex;

        $('#slider').val(currentIndex);
    });

    $('#slider').on('input', function () {
        var index = parseInt($(this).val());
        leftSwiper.slideToLoop(index);
        var oppositeIndex = totalSlides - 1 - index;
        rightSwiper.slideToLoop(oppositeIndex);

    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Получаем все блоки с продуктами
    const products = document.querySelectorAll('.production__item__box__inner');

    products.forEach((product) => {
        const button = product.querySelector('.product__btn');
        const beforeStyles = window.getComputedStyle(button, '::before');

        // Получаем исходный цвет кнопки для восстановления при уходе мыши
        const originalColor = beforeStyles.backgroundColor;
        const startlColor = beforeStyles.backgroundColor;

        // Функция для получения более светлого оттенка
        const lightenColor = (color, percent) => {
            const num = parseInt(color.slice(1), 16),
                amt = Math.round(2.55 * percent),
                R = (num >> 16) + amt,
                G = (num >> 8 & 0x00FF) + amt,
                B = (num & 0x0000FF) + amt;
            return `rgb(${Math.min(255, R)}, ${Math.min(255, G)}, ${Math.min(255, B)})`;
        };

        product.addEventListener('mouseenter', () => {
            // Преобразуем цвет кнопки в HEX для использования в градиенте и свечении

            let buttonColor = window.getComputedStyle(button).backgroundColor;
            buttonColor = originalColor.match(/\d+/g).map(Number);
            const hexColor = `#${((1 << 24) + (buttonColor[0] << 16) + (buttonColor[1] << 8) + buttonColor[2]).toString(16).slice(1)}`;

            // Создаем светлый оттенок для градиента
            const lighterColor = lightenColor(hexColor, 90);

            // Устанавливаем цвета для свечения
            product.style.setProperty('--glow-color', hexColor);
            product.style.setProperty('--glow-color-light', lighterColor);
            product.style.setProperty('--glow-color-light', originalColor.replace('rgb', 'rgba').replace(')', ', 0.2)'));
            product.style.setProperty('--glow-color-faint', originalColor.replace('rgb', 'rgba').replace(')', ', 0.1)'));
            product.style.setProperty('--glow-background', originalColor.replace('rgb', 'rgba').replace(')', ', 0.3)'));

            // Добавляем класс для плавного перехода к градиенту на кнопке
            // beforeStyles.style.background = `linear-gradient(to right, ${hexColor}, ${lighterColor}, ${hexColor})`;
            // button.style.setProperty('--start-color', hexColor);
            // button.style.setProperty('--end-color', lighterColor);
        });

        // product.addEventListener('mouseleave', () => {
        //     // beforeStyles.style.background = beforeStyles;
        //     button.style.setProperty('--start-color', startlColor);
        //     button.style.setProperty('--end-color', startlColor);
        // });
    });
});

const swiperProduct = new Swiper('#slider2', {
    loop: true,
    direction: 'horizontal',
    navigation: {
        nextEl: '.slider__product__button__next',
        prevEl: '.slider__product__button__prev',
    },
    pagination: {
        el: '.slider__product__pagination',
        clickable: true,
    },
});

const slides = document.querySelectorAll('#slider2 .swiper-slide');

slides.forEach(slide => {

    const tabButtons = slide.querySelectorAll('.tab-btn');
    const description = slide.querySelector('#description');
    const composition = slide.querySelector('#composition');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {

            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            if (button.dataset.tab === 'description') {
                description.style.display = 'block';
                composition.style.display = 'none';
            } else {
                description.style.display = 'none';
                composition.style.display = 'block';
            }
        });
    });
});

// =================blog-tabs=============================================

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



// ===============АККОРДЕОН=======================================================



const accordionHeader = document.querySelector('.feedback__form__accordion-header');
const hiddenCategoryInput = document.getElementById('selected-category');

document.querySelectorAll('.feedback__form__accordion-header').forEach(header => {
    header.addEventListener('click', function (event) {
        event.stopPropagation();
        const accordionItem = this.parentElement;
        const isActive = accordionItem.classList.contains('active');

        document.querySelectorAll('.feedback__form__accordion-item').forEach(item => {
            item.classList.remove('active');
            item.style.zIndex = 1;
        });

        if (!isActive) {
            accordionItem.classList.add('active');
            accordionItem.style.zIndex = 3;
        }
    });
});

document.addEventListener('click', function (event) {
    if (!event.target.closest('.feedback__form__accordion')) {
        document.querySelectorAll('.feedback__form__accordion-item').forEach(item => {
            item.classList.remove('active');
            item.style.zIndex = 1;
        });
    }
});

document.querySelectorAll('input[name="category"]').forEach(radio => {
    radio.addEventListener('change', function () {
        accordionHeader.textContent = this.value;
        hiddenCategoryInput.value = this.value;

        document.querySelectorAll('.feedback__form__accordion-item').forEach(item => {
            item.classList.remove('active');
            item.style.zIndex = 1;
        });
    });
});

const swiperSerch = new Swiper('#slider3', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    direction: 'horizontal',
    navigation: {
        nextEl: '.slider__serch__button__next',
        prevEl: '.slider__serch__button__prev',
    },
    pagination: {
        el: '.slider__serch__pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        750: {
            slidesPerView: 3,
        },
    }
});

// ==========================BURGER_MAin==========================================

const burgerMain = document.querySelector('.header__menu__burgerBtn');
const burgerMenuList = document.querySelector('.burger__menu__list');
const burgerMenu = document.querySelector('.header__top__burger__menu');

burgerMain.addEventListener('click', function (event) {
    event.stopPropagation(); 
    burgerMenuList.classList.toggle('active');
    burgerMenu.style.display = 'block';
});

document.addEventListener('click', function (event) {
    const isClickInside = burgerMain.contains(event.target) || burgerMenuList.contains(event.target);

    if (!isClickInside) {
        burgerMenuList.classList.remove('active');
        burgerMenu.style.display = 'none';
    }
});







