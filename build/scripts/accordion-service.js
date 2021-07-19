console.log('accordion-service.js added')

const acc = document.querySelectorAll('.accordion-service')

acc.forEach(el => {
	el.addEventListener('click', function () {
		this.classList.toggle('accordion__active')
		const panel = this.nextElementSibling
		panel.style.maxHeight
			? (panel.style.maxHeight = null)
			: (panel.style.maxHeight = panel.scrollHeight + 'px')
	})
})
