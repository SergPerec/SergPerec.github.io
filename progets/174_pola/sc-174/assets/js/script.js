new Swiper('.swiper .promo_swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: false,
    loop: false,
    updateOnWindowResize: true,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: ".promo.swiper-button-next",
        prevEl: ".promo.swiper-button-prev",
    },
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 6,
    //     },
    //     432: {
    //         slidesPerView: 2,
    //         spaceBetween: 6,
    //     },
    //     850: {
    //         slidesPerView: 2,
    //     },
    //     1100: {
    //         slidesPerView: 3,
    //     },
    //     1500: {
    //         slidesPerView: 4,
    //     },
    // }
});

var swiper = new Swiper('.swiper .home_swiper', {
    slidesPerView: 1,
    autoplay: {
        delay: 500000
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            var slide = document.querySelectorAll('.swiper-slide')[index];
            var paginationText = slide.getAttribute('data-pagination');
            return '<span class="' + className + '">' +
                '<span class="bullet-text">' + paginationText + '</span>' +
                '<span class="bullet-line" style="--duration: 6s"></span>' +
                '</span>';
        }
    }
});

swiper.on('slideChange', function () {
    var activeBullet = document.querySelector('.swiper-pagination-bullet-active .bullet-line');
    if (activeBullet) {
        var duration = getComputedStyle(activeBullet).getPropertyValue('--duration');
        activeBullet.style.transitionDuration = duration;
    }
});

new Swiper('.swiper .popular_goods-swiper', {
    slidesPerView: 3,
    spaceBetween: 15,
    centeredSlides: false,
    loop: false,
    updateOnWindowResize: true,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: ".popular_goods-next",
        prevEl: ".popular_goods-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 1.1,
            spaceBetween: 15,
        },
        580: {
            slidesPerView: 1.2,
            spaceBetween: 15,
        },
        615: {
            slidesPerView: 1.3,
            spaceBetween: 15,
        },
        660: {
            slidesPerView: 1.4,
            spaceBetween: 15,
        },
        700: {
            slidesPerView: 1.5,
            spaceBetween: 15,
        },
        760: {
            slidesPerView: 1.6,
        },
        820: {
            slidesPerView: 1.7,
        },
        880: {
            slidesPerView: 1.8,
            spaceBetween: 5,
        },
        900: {
            slidesPerView: 1.9,
        },
        940: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 1,
        },
        1050: {
            slidesPerView: 1.1,
        },
        1100: {
            slidesPerView: 1.2,
        },
        1200: {
            slidesPerView: 1.4,
        },
        1300: {
            slidesPerView: 1.6,
        },
        1350: {
            slidesPerView: 1.7,
        },
        1400: {
            slidesPerView: 1.9,
        },
        1450: {
            slidesPerView: 2,
        },
        1500: {
            slidesPerView: 2.1,
        },
        1550: {
            slidesPerView: 2.2,
        },
        1600: {
            slidesPerView: 2.3,
        },
        1650: {
            slidesPerView: 2.4,
        },
        1700: {
            slidesPerView: 2.5,
        },
        1750: {
            slidesPerView: 2.6,
        },
        1800: {
            slidesPerView: 2.7,
        },
        1850: {
            slidesPerView: 2.8,
        },
        1900: {
            slidesPerView: 3,
        },
    }
});

new Swiper('.swiper .promo_goods-swiper', {
    slidesPerView: 3,
    spaceBetween: 15,
    centeredSlides: false,
    loop: false,
    updateOnWindowResize: true,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: ".promo_goods-next",
        prevEl: ".promo_goods-prev",
    },
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 6,
    //     },
    //     432: {
    //         slidesPerView: 2,
    //         spaceBetween: 6,
    //     },
    //     850: {
    //         slidesPerView: 2,
    //     },
    //     1100: {
    //         slidesPerView: 3,
    //     },
    //     1500: {
    //         slidesPerView: 4,
    //     },
    // }
});

new Swiper('.swiper .popular_brands-swiper', {
    slidesPerView: 4,
    spaceBetween: 15,
    centeredSlides: false,
    loop: true,
    updateOnWindowResize: true,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: ".popular_brands-next",
        prevEl: ".popular_brands-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        820: {
            slidesPerView: 2.5,
        },
        880: {
            slidesPerView: 2.5,
            spaceBetween: 5,
        },
        900: {
            slidesPerView: 2.5,
        },
        940: {
            slidesPerView: 2.5,
        },
        1000: {
            slidesPerView: 1.6,
        },
        1050: {
            slidesPerView: 1.7,
        },
        1100: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 2.4,
        },
        1300: {
            slidesPerView: 2.6,
        },
        1350: {
            slidesPerView: 2.7,
        },
        1400: {
            slidesPerView: 2.9,
        },
        1450: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 3.1,
        },
        1550: {
            slidesPerView: 3.2,
        },
        1600: {
            slidesPerView: 3.3,
        },
        1650: {
            slidesPerView: 3.4,
        },
        1700: {
            slidesPerView: 3.5,
        },
        1750: {
            slidesPerView: 3.6,
        },
        1800: {
            slidesPerView: 3.7,
        },
        1850: {
            slidesPerView: 4,
        },
        1900: {
            slidesPerView: 4,
        },
    }
});

new Swiper('.swiper .our_certificates-swiper', {
    slidesPerView: 4.5,
    spaceBetween: 9,
    centeredSlides: false,
    loop: false,
    updateOnWindowResize: true,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: ".our_certificates-next",
        prevEl: ".our_certificates-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        820: {
            slidesPerView: 2.5,
        },
        880: {
            slidesPerView: 2.5,
            spaceBetween: 5,
        },
        900: {
            slidesPerView: 2.5,
        },
        940: {
            slidesPerView: 2.5,
        },
        1000: {
            slidesPerView: 1.6,
        },
        1050: {
            slidesPerView: 1.7,
        },
        1100: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 2.4,
        },
        1300: {
            slidesPerView: 2.6,
        },
        1350: {
            slidesPerView: 2.7,
        },
        1400: {
            slidesPerView: 2.9,
        },
        1450: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 3.1,
        },
        1550: {
            slidesPerView: 3.2,
        },
        1600: {
            slidesPerView: 3.3,
        },
        1650: {
            slidesPerView: 3.4,
        },
        1700: {
            slidesPerView: 3.5,
        },
        1750: {
            slidesPerView: 3.6,
        },
        1800: {
            slidesPerView: 3.7,
        },
        1850: {
            slidesPerView: 4,
        },
        1900: {
            slidesPerView: 4,
        },
    }
});

$(document).ready(function () {
    $('.product_bottom .count button.minus').click(function () {
        var container = $(this).closest('.count');
        var countElement = container.find('input[name="count"]');
        var count = parseInt(countElement.val(), 10);
        count = isNaN(count) ? 0 : count;

        if (count > 0) {
            count--;
            countElement.val(count);
        }
    });

    $('.product_bottom .count button.plus').click(function () {
        var container = $(this).closest('.count');
        var countElement = container.find('input[name="count"]');
        var count = parseInt(countElement.val(), 10);
        count = isNaN(count) ? 0 : count;

        count++;
        countElement.val(count);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.cart__item__calk');

    counters.forEach(counter => {
        const minusButton = counter.querySelector('.cart__item__calk__btn__minus');
        const plusButton = counter.querySelector('.cart__item__calk__btn__plus');
        const quantityInput = counter.querySelector('.cart__item__calk__num');

        function checkButtonState() {
            const value = parseInt(quantityInput.value, 10);
            if (value <= 1) {
                minusButton.classList.add('disabled');
            } else {
                minusButton.classList.remove('disabled');
            }
        }

        checkButtonState();

        plusButton.addEventListener('click', function () {
            quantityInput.value = parseInt(quantityInput.value, 10) + 1;
            checkButtonState();
        });

        minusButton.addEventListener('click', function () {
            let value = parseInt(quantityInput.value, 10);
            if (value > 1) {
                quantityInput.value = value - 1;
            }
            checkButtonState();
        });

        quantityInput.addEventListener('input', function () {
            const value = parseInt(quantityInput.value, 10);
            if (!isNaN(value)) {
                checkButtonState();
            }
        });
    });
});


$(document).ready(function () {
    let burger = $('header .container.mobile .burger-container')

    burger.on('click', function () {
        burger.toggleClass('open')
        $('header .container.mobile .burger::before').toggleClass('open')
        $('header .container.mobile .burger::after').toggleClass('open')
        $('header .container.mobile .burger_innner').toggleClass('open')
    })
})

$(document).ready(function () {
    $('#category__filtr__btn').on('click', function () {
        $('#category__overlay').fadeIn(300);
        $('#category__slider__mobile').fadeIn(300);
    });
    $('#close__category__slider__mobile').on('click', function () {
        $('#category__overlay').fadeOut(300);
        $('#category__slider__mobile').fadeOut(300);
    });
    $('#category__overlay').on('click', function () {
        $('#category__overlay').fadeOut(300);
        $('#category__slider__mobile').fadeOut(300);
    });
});

$(document).ready(function () {
    $('#category__sort__btn').on('click', function () {
        $('#category__overlay').fadeIn(300);
        $('#category__sorting').fadeIn(300);
    });
    $('#close__category__sorting__mobile').on('click', function () {
        $('#category__overlay').fadeOut(300);
        $('#category__sorting').fadeOut(300);
    });
    $('#category__overlay').on('click', function () {
        $('#category__overlay').fadeOut(300);
        $('#category__sorting').fadeOut(300);
    });
});

$(document).ready(function () {
    $('#header__cart').on('click', function () {
        $('#cart__overlay').fadeIn(300);
        $('#header__cart__inner').toggleClass('open')
    });
    $('#header__cart__mobile').on('click', function () {
        $('#cart__overlay').fadeIn(300);
        $('#header__cart__inner').toggleClass('open')
    });
    $('#cart__top__close').on('click', function () {
        $('#cart__overlay').fadeOut(300);
        $('#header__cart__inner').toggleClass('open')
    });
    $('#cart__overlay').on('click', function () {
        $('#cart__overlay').fadeOut(300);
        $('#header__cart__inner').toggleClass('open')
    });
});


$(document).ready(function () {
    $('.toggle-btn').on('click', function (event) {
        event.stopPropagation();
        var content = $(this).closest('.filter').find('.filter-content');
        var toggleBtn = $(this);

        content.slideToggle(300, function () {
            toggleBtn.text(content.is(':visible') ? '-' : '+');
        });
    });

    $('.filter-header').on('click', function () {
        var content = $(this).closest('.filter').find('.filter-content');
        var toggleBtn = $(this).closest('.filter').find('.toggle-btn');

        content.slideToggle(300, function () {
            toggleBtn.text(content.is(':visible') ? '-' : '+');
        });
    });
});

var galleryThumbs = new Swiper('#carousel-thumbs', {
    // observer: true,
    // freeMode: true,
    // watchSlidesProgress: true,
    spaceBetween: 1,
    slidesPerView: 4,
    direction: 'horizontal',
    breakpoints: {
        1: {
            direction: 'horizontal',
            spaceBetween: 1,
            slidesPerView: 3.5,
        },
        992: {
            spaceBetween: 1,
            direction: 'horizontal',
        },
    }
});
var gallery = new Swiper('#carousel', {
    observer: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 0,
    thumbs: {
        swiper: galleryThumbs,
    }
});

new Swiper('.swiper__simular__products', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 15,
    centeredSlides: false,
    loop: false,
    updateOnWindowResize: true,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: "#simular__products__btn-next",
        prevEl: "#simular__products__btn-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        520: {
            slidesPerView: 1.1,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        580: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        615: {
            slidesPerView: 1.3,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        660: {
            slidesPerView: 1.4,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        700: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        760: {
            slidesPerView: 1.6,
            slidesPerGroup: 1,
        },
        820: {
            slidesPerView: 1.7,
            slidesPerGroup: 1,
        },
        880: {
            slidesPerView: 1.8,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
        900: {
            slidesPerView: 1.9,
            slidesPerGroup: 1,
        },
        940: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1000: {
            slidesPerView: 1,
            slidesPerGroup: 2,
        },
        1050: {
            slidesPerView: 1.1,
            slidesPerGroup: 1,
        },
        1100: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
        },
        1200: {
            slidesPerView: 1.4,
            slidesPerGroup: 1,
        },
        1300: {
            slidesPerView: 1.6,
            slidesPerGroup: 1,
        },
        1350: {
            slidesPerView: 1.7,
            slidesPerGroup: 1,
        },
        1400: {
            slidesPerView: 1.9,
            slidesPerGroup: 1,
        },
        1450: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1500: {
            slidesPerView: 2.1,
            slidesPerGroup: 2,
        },
        1550: {
            slidesPerView: 2.2,
            slidesPerGroup: 2,
        },
        1600: {
            slidesPerView: 2.3,
            slidesPerGroup: 2,
        },
        1650: {
            slidesPerView: 2.4,
            slidesPerGroup: 2,
        },
        1700: {
            slidesPerView: 2.5,
            slidesPerGroup: 2,
        },
        1750: {
            slidesPerView: 2.6,
            slidesPerGroup: 2,
        },
        1800: {
            slidesPerView: 2.7,
            slidesPerGroup: 2,
        },
        1850: {
            slidesPerView: 2.8,
            slidesPerGroup: 2,
        },
        1900: {
            slidesPerView: 3,
        },
    }

});

new Swiper('.swiper__recorm__products', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 15,
    centeredSlides: false,
    loop: false,
    updateOnWindowResize: true,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: "#recorm__products__btn-next",
        prevEl: "#recorm__products__btn-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        520: {
            slidesPerView: 1.1,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        580: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        615: {
            slidesPerView: 1.3,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        660: {
            slidesPerView: 1.4,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        700: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        760: {
            slidesPerView: 1.6,
            slidesPerGroup: 1,
        },
        820: {
            slidesPerView: 1.7,
            slidesPerGroup: 1,
        },
        880: {
            slidesPerView: 1.8,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
        900: {
            slidesPerView: 1.9,
            slidesPerGroup: 1,
        },
        940: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1000: {
            slidesPerView: 1,
            slidesPerGroup: 2,
        },
        1050: {
            slidesPerView: 1.1,
            slidesPerGroup: 1,
        },
        1100: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
        },
        1200: {
            slidesPerView: 1.4,
            slidesPerGroup: 1,
        },
        1300: {
            slidesPerView: 1.6,
            slidesPerGroup: 1,
        },
        1350: {
            slidesPerView: 1.7,
            slidesPerGroup: 1,
        },
        1400: {
            slidesPerView: 1.9,
            slidesPerGroup: 1,
        },
        1450: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1500: {
            slidesPerView: 2.1,
            slidesPerGroup: 2,
        },
        1550: {
            slidesPerView: 2.2,
            slidesPerGroup: 2,
        },
        1600: {
            slidesPerView: 2.3,
            slidesPerGroup: 2,
        },
        1650: {
            slidesPerView: 2.4,
            slidesPerGroup: 2,
        },
        1700: {
            slidesPerView: 2.5,
            slidesPerGroup: 2,
        },
        1750: {
            slidesPerView: 2.6,
            slidesPerGroup: 2,
        },
        1800: {
            slidesPerView: 2.7,
            slidesPerGroup: 2,
        },
        1850: {
            slidesPerView: 2.8,
            slidesPerGroup: 2,
        },
        1900: {
            slidesPerView: 3,
        },
    }

});

new Swiper('.swiper__viewed__products', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 15,
    centeredSlides: false,
    loop: false,
    updateOnWindowResize: true,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: "#viewed__products__btn-next",
        prevEl: "#viewed__products__btn-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        520: {
            slidesPerView: 1.1,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        580: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        615: {
            slidesPerView: 1.3,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        660: {
            slidesPerView: 1.4,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        700: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
            spaceBetween: 15,
        },
        760: {
            slidesPerView: 1.6,
            slidesPerGroup: 1,
        },
        820: {
            slidesPerView: 1.7,
            slidesPerGroup: 1,
        },
        880: {
            slidesPerView: 1.8,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
        900: {
            slidesPerView: 1.9,
            slidesPerGroup: 1,
        },
        940: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1000: {
            slidesPerView: 1,
            slidesPerGroup: 2,
        },
        1050: {
            slidesPerView: 1.1,
            slidesPerGroup: 1,
        },
        1100: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
        },
        1200: {
            slidesPerView: 1.4,
            slidesPerGroup: 1,
        },
        1300: {
            slidesPerView: 1.6,
            slidesPerGroup: 1,
        },
        1350: {
            slidesPerView: 1.7,
            slidesPerGroup: 1,
        },
        1400: {
            slidesPerView: 1.9,
            slidesPerGroup: 1,
        },
        1450: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1500: {
            slidesPerView: 2.1,
            slidesPerGroup: 2,
        },
        1550: {
            slidesPerView: 2.2,
            slidesPerGroup: 2,
        },
        1600: {
            slidesPerView: 2.3,
            slidesPerGroup: 2,
        },
        1650: {
            slidesPerView: 2.4,
            slidesPerGroup: 2,
        },
        1700: {
            slidesPerView: 2.5,
            slidesPerGroup: 2,
        },
        1750: {
            slidesPerView: 2.6,
            slidesPerGroup: 2,
        },
        1800: {
            slidesPerView: 2.7,
            slidesPerGroup: 2,
        },
        1850: {
            slidesPerView: 2.8,
            slidesPerGroup: 2,
        },
        1900: {
            slidesPerView: 3,
        },
    }

});

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

// =============================canvas===============================


const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let number = 1;

// Настройка Canvas
function resizeCanvas() {
  const container = document.querySelector('.calculator__item__result');
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
}

// Основная функция для отрисовки раскладки ламината
function drawLayout() {
  resizeCanvas();

  const floorLength = parseFloat(document.getElementById('floorLength').value);
  const floorWidth = parseFloat(document.getElementById('floorWidth').value);
  const laminateLength = parseFloat(document.getElementById('laminateLength').value);
  const laminateWidth = parseFloat(document.getElementById('laminateWidth').value);

  const scaleX = canvas.width / floorLength;
  const scaleY = canvas.height / floorWidth;

  const tileLength = laminateLength * scaleX;
  const tileWidth = laminateWidth * scaleY;

  const rows = Math.floor(canvas.height / tileWidth); // Количество строк

  ctx.clearRect(0, 0, canvas.width, canvas.height); // Очищаем Canvas перед отрисовкой

  number = 1; // Сбрасываем счетчик плиток

  for (let row = 0; row < rows; row++) {
    let x = 0;

    if (row % 2 === 0) { 
      // Четные строки: добавляем только большие плитки
      while (x + tileLength <= canvas.width) {
        drawCell(x, row * tileWidth, tileLength, tileWidth, true);
        x += tileLength;
        number++;
      }
      
    } else { 
      // Нечетные строки: начинаем с маленькой, затем большие, завершаем маленькой
      drawCell(x, row * tileWidth, tileLength / 2, tileWidth, false); // Начальная маленькая плитка
      x += tileLength / 2;
      number++;
      
      while (x + tileLength <= canvas.width - tileLength / 2) {
        drawCell(x, row * tileWidth, tileLength, tileWidth, true); // Большие плитки
        x += tileLength;
        number++;
      }

      if (x + tileLength / 2 <= canvas.width) {
        drawCell(x, row * tileWidth, tileLength / 2, tileWidth, false); // Завершающая маленькая плитка
        number++;
      }
    }
  }
}

// Функция для рисования ячейки
function drawCell(x, y, width, height, isLarge) {
  const borderColor = "#000";
  const smallCellColor = "rgba(26, 132, 75, 0.15)";
  const largeCellColor = "rgba(26, 132, 75, 0.25)";

  ctx.fillStyle = isLarge ? largeCellColor : smallCellColor;
  ctx.fillRect(x, y, width, height);

  ctx.strokeStyle = borderColor;
  ctx.lineWidth = 1;
  ctx.strokeRect(x, y, width, height);

  // Добавляем номер плитки
  ctx.fillStyle = "#000";
  ctx.font = `${Math.min(height / 2, 14)}px Arial`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(number, x + width / 2, y + height / 2);
}

// Функция для обновления раскладки при изменении значений
function updateLayout() {
  drawLayout();
}

// Инициализация Canvas
updateLayout();

// Перерисовка при изменении размера окна
window.addEventListener('resize', updateLayout);


