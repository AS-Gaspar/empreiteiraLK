const inicioButton = document.querySelector('nav a[href="#Inicio"]')
const empresaButton = document.querySelector('nav a[href="#Conheca"]')
const obrasButton = document.querySelector('nav a[href="#Obras"]')
const contatoButton = document.querySelector('nav a[href="#Contato"]')
const logoHidden = document.querySelector('.hidden-logo img');
const logoMedia = document.querySelector('.logo-media img');

const inicioSection = document.querySelector('html')
const empresaSection = document.querySelector('#apresentacao')
const obrasSection = document.querySelector('#obras')
const contatoSection = document.querySelector('.contact-info')

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

function scrollToSection(section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

inicioButton.addEventListener('click', (event) => {
    event.preventDefault()
    scrollToTop(inicioSection)
})

empresaButton.addEventListener('click', (event) => {
    event.preventDefault()
    scrollToSection(empresaSection)
})

obrasButton.addEventListener('click', (event) => {
    event.preventDefault()
    scrollToSection(obrasSection)
})

contatoButton.addEventListener('click', (event) => {
    event.preventDefault()
    scrollToSection(contatoSection)
})

if (logoHidden) {
    logoHidden.addEventListener('click', () => {
        window.location.reload();
    });
}

if (logoMedia) {
    logoMedia.addEventListener('click', () => {
        window.location.reload();
    });
}
