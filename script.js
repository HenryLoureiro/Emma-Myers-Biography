let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function moveSlide(step) {
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Inicializa o slider
showSlide(currentSlide);

// Adiciona suporte para swipe (arrastar) nos dispositivos móveis
let startX = 0;
let endX = 0;

const sliderContainer = document.querySelector('.slider-container');

sliderContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

sliderContainer.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    if (startX > endX) {
        moveSlide(1); // Slide para a próxima imagem
    } else if (startX < endX) {
        moveSlide(-1); // Slide para a imagem anterior
    }
});
