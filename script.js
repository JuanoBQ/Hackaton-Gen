// ===================== SLIDE EN PRODUCTOS =====================


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











  // ============= CAROUSEL =================


  const slides = document.querySelectorAll(
  "#carouselExampleIndicators .carousel-item"
);
const indicators = document.querySelectorAll(
  "#carouselExampleIndicators .carousel-indicators button"
);
const prevBtn3 = document.querySelector(".carousel-control-prev");
const nextBtn3 = document.querySelector(".carousel-control-next");
let currentSlide = 0;
let autoSlideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  indicators.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
    dot.setAttribute("aria-current", i === index ? "true" : "false");
  });
  currentSlide = index;
}

function nextSlide() {
  let next = currentSlide + 1;
  if (next >= slides.length) next = 0;
  showSlide(next);
}

function prevSlide() {
  let prev = currentSlide - 1;
  if (prev < 0) prev = slides.length - 1;
  showSlide(prev);
}

function startAutoplay() {
  autoSlideInterval = setInterval(nextSlide, 3000); // 3 segundos
}

function stopAutoplay() {
  clearInterval(autoSlideInterval);
}

// Eventos
nextBtn.addEventListener("click", () => {
  nextSlide();
  stopAutoplay();
  startAutoplay();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  stopAutoplay();
  startAutoplay();
});

indicators.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
    stopAutoplay();
    startAutoplay();
  });
});

// Iniciar
showSlide(0);
startAutoplay();





















// script.js

document.addEventListener('DOMContentLoaded', () => {
  const cart = [];
  
  // Referencias DOM
  const cartCount = document.getElementById('cartCount');
  const cartItemsContainer = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  const cartModal = document.getElementById('cartModal');
  const openCartBtn = document.getElementById('openCart');
  const closeCartBtn = document.getElementById('closeCart');
  const clearCartBtn = document.getElementById('clearCart');

  // Función para formatear número a moneda (COP)
  function formatPrice(price) {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(price);
  }

  // Actualiza contador en icono carrito
  function updateCartCount() {
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCount.textContent = totalQuantity;
  }

  // Calcula y actualiza total
  function updateCartTotal() {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    cartTotal.textContent = formatPrice(total);
  }

  // Renderiza los items en el modal carrito
  function renderCartItems() {
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p>El carrito está vacío.</p>';
      cartTotal.textContent = formatPrice(0);
      return;
    }

    cart.forEach((item, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'cart-item d-flex justify-content-between align-items-center mb-2';

      itemDiv.innerHTML = `
        <div>
          <strong>${item.name}</strong> <br/>
          Cantidad: ${item.quantity} <br/>
          Precio unitario: ${formatPrice(item.price)}
        </div>
        <div>
          <button class="btn btn-sm btn-outline-danger remove-item" data-index="${index}">&times;</button>
        </div>
      `;

      cartItemsContainer.appendChild(itemDiv);
    });

    updateCartTotal();

    // Agregar event listener a botones eliminar
    document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', (e) => {
        const idx = e.target.getAttribute('data-index');
        removeFromCart(idx);
      });
    });
  }

  // Función para eliminar un item del carrito
  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    renderCartItems();
  }

  // Agrega producto al carrito o aumenta cantidad si ya existe
  function addToCart(product) {
    const existingItem = cart.find(item => item.name === product.name);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    updateCartCount();
    renderCartItems();
  }

  // Abrir modal carrito
  openCartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.style.display = 'block';
  });

  // Cerrar modal carrito
  closeCartBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
  });

  // Vaciar carrito
  clearCartBtn.addEventListener('click', () => {
    cart.length = 0;
    updateCartCount();
    renderCartItems();
  });

  // Cerrar modal si se clickea fuera del contenido
  window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
      cartModal.style.display = 'none';
    }
  });

  // Capturar todos los botones "Añadir al carrito"
  const addButtons = document.querySelectorAll('.btn.w-100.btn-sm.mt-auto');

  addButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const productCard = e.target.closest('.product-card');
      if (!productCard) return;

      const name = productCard.querySelector('.card-title').textContent.trim();
      let priceText = productCard.querySelector('.precio').textContent.trim();
      // Eliminar símbolos y puntos para convertir a número
      let priceNumber = parseInt(priceText.replace(/[^0-9]/g, ''));

      if (isNaN(priceNumber)) {
        alert('Precio inválido');
        return;
      }

      addToCart({ name, price: priceNumber });
    });
  });

  // Carrito vacio
  updateCartCount();
  renderCartItems();
});

