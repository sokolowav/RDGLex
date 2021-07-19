console.log('menu.js added')

const burger = document.querySelector('.header-nav__burger')

burger.addEventListener('click', () => {
	const body = document.getElementsByTagName('body')
	const mobileList = document.querySelector('.header-nav__mobile-list')
	burger.classList.toggle('open-menu')
	mobileList.classList.toggle('open-menu')
	body[0].classList.toggle('fixed')
})
