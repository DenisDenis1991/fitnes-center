import Swiper from '../vendor/swiper-bundle.min';

const coachSwiper = document.querySelector('.coach-swiper');
const feedbackSwiper = document.querySelector('.feedback__swiper');

const getTabIndex = (slide) => {
  slide.forEach((el) => {
    el.setAttribute('tabindex', 0);
  });
};

const addFeedbackSwiper = () => {
  if (!feedbackSwiper) {
    return;
  }
  const swiper = new Swiper(feedbackSwiper, {

    navigation: {
      nextEl: '.feedback__button--next',
      prevEl: '.feedback__button--prev',
    },

    slidesPerView: 1,
    watchOverflow: true,
    loop: false,

    keyboard: {
      enabled: false,
      onlyInViewport: true,
    },

    watchSlidesProgress: true,
  });
  swiper.enable();
};

const addCoachSwiper = () => {
  if (!coachSwiper) {
    return;
  }

  const swiper = new Swiper(coachSwiper, {

    navigation: {
      nextEl: '.coach__button--next',
      prevEl: '.coach__button--prev',
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
      1199: {
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

export {addCoachSwiper, getTabIndex, addFeedbackSwiper};
