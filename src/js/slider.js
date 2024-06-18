import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

const swiper = new Swiper('.swiper-container', {
  modules: [Navigation, Pagination],

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  spaceBetween: 16,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true
  },

  mousewheel: {
    sensitivity: 1
  },

  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1.3
    },
    380: {
      slidesPerView: 1.6
    },
    440: {
      slidesPerView: 1.8
    },
    500: {
      slidesPerView: 2
    },
    560: {
      slidesPerView: 2.3
    },
    640: {
      slidesPerView: 3
    },
    768: {
      enabled: false
    }
  }
})
