let hamburger = document.querySelector('.hamburger');
let ham_menu = document.querySelector('.ham-menu');

hamburger.addEventListener('click', function(e) {
    e.stopImmediatePropagation;
    ham_menu.classList.toggle('hidden');
})
