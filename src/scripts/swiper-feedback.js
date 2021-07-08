console.log('swiper-feedback.js added')

/*  const pagination = document.querySelector('.feedback-nav-numbers')
  let menu = ['1', '2', '3', '4', '5', '6', '7']
  let windowWidth = window.innerWidth
  let swiper = new Swiper('.swiper-container', {
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

  if (windowWidth < 1024) {
    swiper.destroy()
    swiper = null
  }

  const processWidthChange = () => {
    windowWidth = window.innerWidth
    if (windowWidth < 1024) {
      swiper.destroy( true, true )
      swiper = null
    } else {
      swiper = new Swiper('.swiper-container', {
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
    }
  }

  window.addEventListener('resize', processWidthChange) */

  const pagination = document.querySelector('.feedback-nav-numbers')
  let menu = ['1', '2', '3', '4', '5', '6', '7']
  let mql = window.matchMedia('(max-width: 1023px)');
  let swiper = new Swiper('.swiper-container', {
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
  
  if (mql.matches) {
    swiper.disable();
  } else {
    swiper.enable();
  }

  window.addEventListener('resize', () => {
    if (mql.matches) {
      swiper.disable();
    } else {
      swiper.enable();
    }
  })