let current = 0;
const slides = document.querySelectorAll('.mobile-slider .slide');

function show(n) {
  slides.forEach((s, i) => s.style.display = i === n ? 'block' : 'none');
}

function moveSlide(step) {
  current = (current + step + slides.length) % slides.length;
  show(current);
}

// inicializa
show(current);

// swipe
let startX = 0;
const container = document.querySelector('.slider-container');

container.addEventListener('touchstart', e => startX = e.touches[0].clientX);
container.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 30) moveSlide(1);
  else if (endX - startX > 30) moveSlide(-1);
});
