console.log('fancybox-callback.js added')

const modalSuccess = document.querySelector('#modal-success')
const modalCloseBtns = document.querySelectorAll('.modal-close__btn')

const openModal = modalElement => {
	$.fancybox.open(modalElement, {
		touch: false,
		smallBtn: false,
		toolbar: false,
	})
}

const openSuccessModal = () => {
	$.fancybox.close()
	openModal(modalSuccess)
	setTimeout(() => {
		closeModal(modalSuccess)
	}, 3000)
}

const closeModal = modalElement => {
	$.fancybox.close(modalElement)
}

modalCloseBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		const modal = btn.closest('.modal').getAttribute('id')
		$.fancybox.close(modal)
	})
})

$(document).ready(function () {
	$('.modalbox-callback').fancybox()
	$('.modal-callback').submit(function () {
		return false
	})
	$('#form-send-callback').on('click', function () {
		openSuccessModal()
	})
})

$(document).ready(function () {
	$('.modalbox-consult').fancybox()
	$('.modal-consult').submit(function () {
		return false
	})
	$('#form-send-consult').on('click', function () {
		openSuccessModal()
	})
})
