const cardsContainer = document.querySelector('.cards-container');
const prevButton = document.querySelector('.btn-prev');
const nextButton = document.querySelector('.btn-next');

let currentIndex = 0;

function updateCarrossel() {
    const cardWidth = cardsContainer.parentElement.offsetWidth; // Largura visível do contêiner
    cardsContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`; // Move para o card correto
}

prevButton.addEventListener('click', () => {
    currentIndex = Math.max(0, currentIndex - 1); // Impede rolar para antes do primeiro card
    updateCarrossel();
});

nextButton.addEventListener('click', () => {
    const maxIndex = cardsContainer.children.length - 1;
    currentIndex = Math.min(maxIndex, currentIndex + 1); // Impede rolar para depois do último card
    updateCarrossel();
});