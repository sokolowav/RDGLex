console.log('swiper-feedback.js added')

//import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

  //const swiperInit = () => {
  //  const containers = document.querySelectorAll('.swiper-container')
  //
  //  containers.forEach((container) => {
  //    const parent = container.closest('.container')
  //    const arrowLeft = parent.querySelector('.swipers-arrows__left')
  //    const arrowRight = parent.querySelector('.swipers-arrows__right')
  //    const pagination = parent.querySelector('.swiper-pagination')
  //    const slidesToPreview = container.dataset.slides || 3
    //
  //    const swiper = new Swiper(container, {
  //      direction: 'horizontal',
  //      slidesPerView: slidesToPreview,
  //      spaceBetween: 50,
  //      loop: true,
      //
  //      breakpoints: {
  //        320: {
  //          slidesPerView: 1,
  //          spaceBetween: 20
  //        },
  //        480: {
  //          slidesPerView: slidesToPreview,
  //          spaceBetween: 50
  //        },
  //      },
      //
  //      pagination: {
  //        el: pagination,
  //      },
      //
  //      //navigation: {
  //      //  nextEl: arrowRight,
  //      //  prevEl: arrowLeft,
  //      //}
  //    })
  //  })
  //}
  //
  //export default swiperInit

    const pagination = document.querySelector('.feedback-nav-numbers')
    let menu = ['1', '2', '3', '4', '5', '6', '7']
    const swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 50,
      pagination: {
        el: pagination,
        clickable: true,
        bulletClass: 'feedback-nav-number',
        bulletActiveClass: 'feedback-nav-number__active',
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
      },
    
      navigation: {
        nextEl: '.swiper-feedback-arrows__right',
        prevEl: '.swiper-feedback-arrows__left',
      },
    
    });
    
  if (window.innerWidth > 1023) {
    swiper.enable()
    } else {
      swiper.disable()
  };