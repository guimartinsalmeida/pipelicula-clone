import { Navigation, Keyboard, EffectCoverflow } from 'swiper/modules';

const breakpoints = {
  200: { slidesPerView: 1 },
  500: { slidesPerView: 3 },
  1024: { slidesPerView: 5 },
};

export const swiperConfig = {
  effect: 'coverflow',
  grabCursor: true,
  breakpoints: breakpoints,
  coverflowEffect: {
    rotate: 30,
    stretch: -20,
    depth: 300,
    modifier: 1,
  },
  loop: true,
  keyboard: { enabled: true },
  pagination: { clickable: true },
  navigation: true,
  modules: [Navigation, Keyboard, EffectCoverflow],
  className: 'mySwiper',
};
