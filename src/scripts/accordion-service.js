console.log('accordion-service.js added')

const acc = document.querySelectorAll('.accordion-service')

console.dir(acc)

for (let i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function () {
		this.classList.toggle('accordion__active')
		const panel = this.nextElementSibling
		panel.style.maxHeight
			? (panel.style.maxHeight = null)
			: (panel.style.maxHeight = panel.scrollHeight + 'px')
	})
}
