console.log('menu.js added')
$(document).ready(function() {
    $('.header-nav__burger').click(function() {
        $('.header-nav__burger').toggleClass('open-menu');
        $('.header-nav__mobile-list').toggleClass('open-menu');
    });
});