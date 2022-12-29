import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {addCoachSwiper, getTabIndex, addFeedbackSwiper} from './modules/add-swiper';
import {switchProduct} from './modules/product';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const textShow = document.querySelector('.about__text--add');
  // Utils
  // ---------------------------------
  const videoPlay = document.querySelector('.video');
  const videoLink = document.querySelector('.video__link');
  videoPlay.addEventListener('click', () => {
    videoLink.removeAttribute('href');
    videoPlay.innerHTML = '<iframe class="video__content" allowfullscreen="" allow="autoplay" src="https://www.youtube.com/embed/9TZXsZItgdw?rel=0&amp;showinfo=0&amp;autoplay=1&amp;mute=1" frameborder="0"></iframe>';
  });
  iosVhFix();

  // Modules
  // ---------------------------------

  switchProduct();
  addCoachSwiper();
  addFeedbackSwiper();
  const slideActive = document.querySelectorAll('.swiper-slide-visible');

  const breakpoint = window.matchMedia('(min-width:1200px)');
  const breakpointChecker = () => {
    if (breakpoint.matches) {
      getTabIndex(slideActive);
      textShow.style.display = 'block';
    } else {
      getTabIndex(slideActive);
      textShow.style.display = 'none';
    }
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
