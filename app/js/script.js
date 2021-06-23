// Menu Hamburger Click Event
const hamburger = document.querySelector('#menu-hamburger')
hamburger.addEventListener('click', openMenu);

function openMenu() {
    if(hamburger.classList.contains('open')) {
        hamburger.classList.remove('open');
    } else {
        hamburger.classList.add('open');   
    }
}