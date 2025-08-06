const slides = document.querySelectorAll(
  "#carouselExampleIndicators .carousel-item"
);
const indicators = document.querySelectorAll(
  "#carouselExampleIndicators .carousel-indicators button"
);
const prevBtn = document.querySelector(".carousel-control-prev");
const nextBtn = document.querySelector(".carousel-control-next");
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
