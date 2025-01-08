const cardsContainer = document.getElementById('cardsContainer')
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')

let currentIndex = 0

const updateCarousel = () => {
    const cardWidth = cardsContainer.firstElementChild.getBoundingClientRect().width
    if (window.innerWidth < 992) {
    cardsContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    } else {
        cardsContainer.style.transform = `translateX(0px)`;
    }
}

nextButton.addEventListener('click', () => {
    if (currentIndex < cardsContainer.children.length - 1) {
        currentIndex++
        updateCarousel()
    } else {
        currentIndex = 0
        updateCarousel()
    }
})

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--
        updateCarousel()
    }
})

window.addEventListener('resize', updateCarousel)

updateCarousel()
