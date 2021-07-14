console.log('read-more.js added')

const feedback = document.querySelectorAll('#feedback-item-info')

feedback.forEach(el => {
	const btnShow = el.querySelector('.read-more-button__show')
	const btnHide = el.querySelector('.read-more-button__hide')
	const limiter = el.querySelector('.limiter')
	const bottom = el.querySelector('.bottom')

	btnShow.addEventListener('click', () => {
		limiter.classList.add('limiter__show')
		bottom.classList.add('bottom__hide')
		btnShow.classList.add('hidden')
		btnHide.classList.remove('hidden')
	})
	btnHide.addEventListener('click', () => {
		limiter.classList.remove('limiter__show')
		bottom.classList.remove('bottom__hide')
		btnShow.classList.remove('hidden')
		btnHide.classList.add('hidden')
	})
})
