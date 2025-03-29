const menuBurger = document.getElementById('menuBurger')
const navbar = document.getElementById('navbar')
const closeButton = document.getElementById('closeButton')
const navLinks = document.querySelectorAll('.navbar a')


menuBurger.addEventListener('click', () => {
    if (window.innerWidth < 992) {
        navbar.classList.add('active')
    }
});

closeButton.addEventListener('click', () => {
    navbar.classList.remove('active')
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
            navbar.classList.remove('active')
        }
    })
})

window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
        navbar.classList.remove('active')
    }
});