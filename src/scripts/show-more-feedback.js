console.log('show-more.js added')

const btn = document.querySelector('.show-more-button')
btn.addEventListener('click', () => {
	let showMoreBlock = document.querySelector('.show-more__hidden')
	showMoreBlock.classList.remove('show-more__hidden')
	showMoreBlock.classList.add('show-more__hidden-hight-width')
})
