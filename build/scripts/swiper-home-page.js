console.log('swiper-home-page.js added')

  const pagination = document.querySelector('.swiper-pagination')
  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: pagination,
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swipers-arrows__right',
      prevEl: '.swipers-arrows__left',
    },
  
  });