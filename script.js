$('.carousel').carousel({
  interval: 2000
})

// Funcionalidad del carrito de compras
document.addEventListener('DOMContentLoaded',function() {
  if(!localStorage.getItem('carrito')) {
    localStorage.setItem('carrito', JSON.stringify([]));
  }
})

const agregarCarritoBotones = document.querySelectorAll('.btn.w-100.btn-sm.mt-auto');

agregarCarritoBotones.forEach(button =>{
  button.addEventListener('click', function(e) {
    e.preventDefault();

    const productCard = this.closest('.product-card');

    const product = {
      nombre: productCard.querySelector('.card-title').textContent,
      descripcion: productCard.querySelector('.card-text').textContent,
      precio: parseFloat(productCard.querySelector('.precio').textContent.replace('$', '')),
      imagen: productCard.querySelector('img').src,
      cantidad: 1
    }

    agregarCarrito(product);

    notificacion(`${product.nombre} añadido al carrito`);
  }
)});

function agregarCarrito(product) {
  let carrito = JSON.parse(localStorage.getItem('carrito'));
  const productoExistente = carrito.findIndex(item => item.nombre === product.nombre);
  if (productoExistente !== -1){
    carrito[productoExistente].cantidad += 1;
  } else {
    carrito.push(product)
  }

  localStorage.setItem('carrito', JSON.stringify(carrito));

  contadorCarrito();
}

function notificacion (message) {
  const notification = document.createElement('div');
  notification.className = 'cart-notification';
  notification.textContent = message;
  document.body.appendChild(notification);
}

function updateCartCounter() {
    const carrito = JSON.parse(localStorage.getItem('carrito'));
    const totalItems = carrito.reduce((total, product) => total + product.cantidad, 0);
    
    // Actualizar en todos los contadores (si existen)
    const counters = document.querySelectorAll('.cart-counter');
    counters.forEach(counter => {
      counter.textContent = totalItems;
    });
  }

  // Actualizar contador al cargar la página
  updateCartCounter();



