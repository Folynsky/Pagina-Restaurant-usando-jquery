// Lista de productos
const productos = [
  { id: 1, nombre: 'Latte', precio: 10, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSyha-YeHA-ht00Qp77NZoAnzrBiRx0jJ4nA&s' },
  { id: 2, nombre: 'Macciato', precio: 8, imagen: 'https://www.acouplecooks.com/wp-content/uploads/2020/10/how-to-make-a-macchiato-003.jpg' },
  { id: 3, nombre: 'Capuccino', precio: 10, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSyha-YeHA-ht00Qp77NZoAnzrBiRx0jJ4nA&s' },
  { id: 4, nombre: 'Espresso', precio: 8, imagen: 'https://www.acouplecooks.com/wp-content/uploads/2020/10/how-to-make-a-macchiato-003.jpg' },
  { id: 5, nombre: 'Ristreto', precio: 10, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSyha-YeHA-ht00Qp77NZoAnzrBiRx0jJ4nA&s' },
  { id: 6, nombre: 'Matcha', precio: 8, imagen: 'https://www.acouplecooks.com/wp-content/uploads/2020/10/how-to-make-a-macchiato-003.jpg' }
];

// Mostrar el catálogo de productos
$(document).ready(function() {
  let catalogoHtml = '';
  productos.forEach(producto => {
      catalogoHtml += `
          <div class="producto">
              <img src="${producto.imagen}" alt="${producto.nombre}">
              <h3>${producto.nombre}</h3>
              <p>Precio: $${producto.precio}</p>
              <button class="agregar-carrito" data-id="${producto.id}">Agregar al carrito</button>
          </div>`;
  });
  $('#catalogo').html(catalogoHtml);
});

// Manejo del carrito de compras
let carrito = [];

$(document).on('click', '.agregar-carrito', function() {
  const id = $(this).data('id');
  const producto = productos.find(p => p.id === id);
  
  if (producto) {
      carrito.push(producto);
      actualizarCarrito();
  }
});

function actualizarCarrito() {
  let carritoHtml = '';
  let total = 0;
  
  carrito.forEach(producto => {
      carritoHtml += `
          <div class="item-carrito">
              <p>${producto.nombre} - $${producto.precio}</p>
          </div>`;
      total += producto.precio;
  });
  
  carritoHtml += `<p><strong>Total: $${total}</strong></p>`;
  $('#carrito').html(carritoHtml);
}

// Consulta de precios (opcional, si tienes un backend)
function consultarPrecios() {
  $.ajax({
      url: 'consulta_precios.php',
      method: 'GET',
      success: function(data) {
          $('#precio').text(`Precio actualizado: $${data.precio}`);
      }
  });
}
