const carousel = document.getElementById('productCarousel');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Ancho de una tarjeta + margen
const cardWidth = document.querySelector('.product-card').offsetWidth + 16;

// Calcular cuántas tarjetas son visibles en pantalla
const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);

// Convertir los elementos hijos actuales en un array
const originalCards = Array.from(carousel.children);

// Clonar las últimas tarjetas al principio
for (let i = originalCards.length - visibleCards; i < originalCards.length; i++) {
  const clone = originalCards[i].cloneNode(true);
  carousel.insertBefore(clone, carousel.firstChild);
}

// Clonar las primeras tarjetas al final
for (let i = 0; i < visibleCards; i++) {
  const clone = originalCards[i].cloneNode(true);
  carousel.appendChild(clone);
}

// Actualizar la lista de todas las tarjetas (original + clones)
const allCards = Array.from(carousel.children);

// Posición inicial (saltamos clones al inicio)
let position = visibleCards;
carousel.style.transform = `translateX(-${position * cardWidth}px)`;

// Función para mover el carrusel
function moveTo(index) {
  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(-${index * cardWidth}px)`;
  position = index;
}

// Botones de navegación
nextBtn.addEventListener('click', () => moveTo(position + 1));
prevBtn.addEventListener('click', () => moveTo(position - 1));

// Reinicio del carrusel sin parpadeo al llegar a clones
carousel.addEventListener('transitionend', () => {
  if (position >= originalCards.length + visibleCards) {
    carousel.style.transition = 'none';
    position = visibleCards;
    carousel.style.transform = `translateX(-${position * cardWidth}px)`;
  }
  if (position < visibleCards) {
    carousel.style.transition = 'none';
    position = originalCards.length + visibleCards - 1;
    carousel.style.transform = `translateX(-${position * cardWidth}px)`;
  }
});

// Auto-slide
let autoSlide;

function startAutoSlide() {
  autoSlide = setInterval(() => moveTo(position + 1), 4000);
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

startAutoSlide();

// Pausar al pasar el mouse
carousel.addEventListener('mouseenter', stopAutoSlide);
carousel.addEventListener('mouseleave', startAutoSlide);

// -------------------------------------------------------------------------------------------------------------- //

const carousel2 = document.getElementById('productCarousel2');
const nextBtn2 = document.getElementById('nextBtn2');
const prevBtn2 = document.getElementById('prevBtn2');

const cardWidth2 = carousel2.querySelector('.product-card').offsetWidth + 16;
const visibleCards2 = Math.floor(carousel2.offsetWidth / cardWidth2);

const originalCards2 = Array.from(carousel2.children);

for (let i = originalCards2.length - visibleCards2; i < originalCards2.length; i++) {
  const clone = originalCards2[i].cloneNode(true);
  carousel2.insertBefore(clone, carousel2.firstChild);
}

for (let i = 0; i < visibleCards2; i++) {
  const clone = originalCards2[i].cloneNode(true);
  carousel2.appendChild(clone);
}

const allCards2 = Array.from(carousel2.children);
let position2 = visibleCards2;
carousel2.style.transform = `translateX(-${position2 * cardWidth2}px)`;

function moveTo2(index) {
  carousel2.style.transition = 'transform 0.5s ease-in-out';
  carousel2.style.transform = `translateX(-${index * cardWidth2}px)`;
  position2 = index;
}

nextBtn2.addEventListener('click', () => moveTo2(position2 + 1));
prevBtn2.addEventListener('click', () => moveTo2(position2 - 1));

carousel2.addEventListener('transitionend', () => {
  if (position2 >= originalCards2.length + visibleCards2) {
    carousel2.style.transition = 'none';
    position2 = visibleCards2;
    carousel2.style.transform = `translateX(-${position2 * cardWidth2}px)`;
  }
  if (position2 < visibleCards2) {
    carousel2.style.transition = 'none';
    position2 = originalCards2.length + visibleCards2 - 1;
    carousel2.style.transform = `translateX(-${position2 * cardWidth2}px)`;
  }
});

let autoSlide2;

function startAutoSlide2() {
  autoSlide2 = setInterval(() => moveTo2(position2 + 1), 4000);
}

function stopAutoSlide2() {
  clearInterval(autoSlide2);
}

startAutoSlide2();

carousel2.addEventListener('mouseenter', stopAutoSlide2);
carousel2.addEventListener('mouseleave', startAutoSlide2);