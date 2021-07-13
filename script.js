$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu, .pre__nav-items').toggleClass('active'); /*toggleClass добавляет класс к классу при клике*/
        $('body').toggleClass('lock');
    });
});