console.log('accordion-service.js added')

const acc = document.getElementsByClassName('accordion-service')

for (let i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function () {
		this.classList.toggle('accordion__active')
		const panel = this.nextElementSibling
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null
		} else {
			panel.style.maxHeight = panel.scrollHeight + 'px'
		}
	})
}
