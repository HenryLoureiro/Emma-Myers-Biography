// Inicializando o swiper com swipe básico
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.swiper-slide');
    let currentIndex = 0;
  
    // Função para trocar de slide
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
      });
    }
  
    // Configura o swipe
    showSlide(currentIndex);
  
    // Função para navegar para o próximo slide
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    // Função para navegar para o slide anterior
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }
  
    // Adiciona navegação de swipe (esquerda/direita)
    let startTouchX = 0;
  
    document.querySelector('.swiper-container').addEventListener('touchstart', function(e) {
      startTouchX = e.changedTouches[0].screenX;
    });
  
    document.querySelector('.swiper-container').addEventListener('touchend', function(e) {
      const endTouchX = e.changedTouches[0].screenX;
      const diff = startTouchX - endTouchX;
  
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide(); // Swipe para a esquerda
        } else {
          prevSlide(); // Swipe para a direita
        }
      }
    });
  });
  