import Swiper from '../vendor/swiper-bundle.min';

const coachSwiper = document.querySelector('.coach-swiper');

const getTabIndex = (slide) => {
  slide.forEach((el) => {
    el.setAttribute('tabindex', 0);
  });
};

const addCoachSwiper = () => {
  if (!coachSwiper) {
    return;
  }

  const swiper = new Swiper('.swiper', {

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        initialSlide: 2,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
        initialSlide: 0,
      },
    },

    watchOverflow: true,
    loop: true,

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    watchSlidesProgress: true,
  });
  swiper.enable();
};

export {addCoachSwiper, getTabIndex};
