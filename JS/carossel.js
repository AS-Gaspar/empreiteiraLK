 const carrossel = document.querySelector('.carrossel');
        const slides = document.querySelectorAll('.slide');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');

        let currentIndex = 0;
        const totalSlides = slides.length;
        const intervalTime = 5000; 

        function showSlide(index) {
            carrossel.style.transform = `translateX(-${index * 100}%)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            showSlide(currentIndex);
        }

        let autoSlide = setInterval(nextSlide, intervalTime);

        prevButton.addEventListener('click', () => {
            prevSlide();
            clearInterval(autoSlide);
            autoSlide = setInterval(nextSlide, intervalTime);
        });

        nextButton.addEventListener('click', () => {
            nextSlide();
            clearInterval(autoSlide);
            autoSlide = setInterval(nextSlide, intervalTime);
        });