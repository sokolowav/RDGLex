console.log('pop-up-team.js added')

const teamItems = document.querySelectorAll('.team-item')
 
teamItems.forEach(el => {
    const btn = el.querySelector('.pop-up-button')
    const tooltip = el.querySelector('.team-item-skills')
    const closeBtn = tooltip.querySelector('.pop-up-button__close')

    btn.addEventListener('click', () => {
        tooltip.classList.add('open')
    });
    closeBtn.addEventListener('click', () => {
        tooltip.classList.remove('open')
    });
})