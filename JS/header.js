const menuBurger = document.getElementById('menuBurger')
const navbar = document.getElementById('navbar')
const closeButton = document.getElementById('closeButton')


menuBurger.addEventListener('click', () => {
    if (window.innerWidth < 992) {
        navbar.classList.add('active');
    }
});

closeButton.addEventListener('click', () => {
    navbar.classList.remove('active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
        navbar.classList.remove('active');
    }
});