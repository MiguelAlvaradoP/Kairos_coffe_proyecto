
       const carruseles = document.querySelectorAll('.carrusel-container');

        carruseles.forEach(container => {
            const prevBtn = container.querySelector('.prev');
            const nextBtn = container.querySelector('.next');
            const carrusel = container.querySelector('.carrusel');

            prevBtn.addEventListener('click', () => {
                carrusel.scrollBy({ left: -260, behavior: 'smooth' });
            });

            nextBtn.addEventListener('click', () => {
                carrusel.scrollBy({ left: 260, behavior: 'smooth' });
            });
        });


        //Carrito de compra

            // Array que va a almacenar los productos seleccionados
             let carrito = [];
                const botones = document.querySelectorAll('.btn-carrito');
                const contadorCarrito = document.getElementById('contador-carrito');
                const listaCarrito = document.getElementById('lista-carrito');
                const totalCarrito = document.getElementById('total-carrito');
                const iconoCarrito = document.querySelector('.carrito-container');
                const botonCerrar = document.getElementById('cerrar-carrito');
                const carritoPanel = document.getElementById('carrito-panel');

                // Abrir carrito
            iconoCarrito.addEventListener('click', () => {
                carritoPanel.classList.add('active');
                mostrarCarrito();
            });

            // Cerrar carrito
            botonCerrar.addEventListener('click', () => {
                carritoPanel.classList.remove('active');
            });

    // Agregar producto
    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const producto = boton.closest('.producto');
            const nombre = producto.querySelector('h2').innerText;
            const precioTexto = producto.querySelectorAll('h2')[1].innerText.replace('$','').replace('.','');
            const precio = parseInt(precioTexto);
            const imagen = producto.querySelector('img').src;
            const id = boton.id;

            const item = { id, nombre, precio, imagen };
            carrito.push(item);

            contadorCarrito.textContent = carrito.length;
            mostrarCarrito();
        });
    });

    // Mostrar productos en el panel
    function mostrarCarrito() {
    listaCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach((item, index) => {
        total += item.precio;

        const div = document.createElement('div');
        div.classList.add('item-carrito');
        div.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}">
            <span>${item.nombre}</span>
            <span>$${item.precio.toLocaleString()}</span>
            <button class="eliminar-item" data-index="${index}">×</button>
        `;
        listaCarrito.appendChild(div);
    });

    totalCarrito.textContent = "Total: $" + total.toLocaleString();

    // Agregar funcionalidad a botones de eliminar
    const botonesEliminar = document.querySelectorAll('.eliminar-item');
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', () => {
            const index = boton.getAttribute('data-index');
            carrito.splice(index, 1); // eliminar el producto del carrito
            contadorCarrito.textContent = carrito.length; // actualizar contador
            mostrarCarrito(); // refrescar la lista
        });
    });
    // Botón pagar
    const btnPagar = document.getElementById('btn-pagar');

    btnPagar.addEventListener('click', () => {
    // Guardar carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    // Redirigir a la página de pago
    window.location.href = 'checkout.html';
});

}
// --- Lógica de Validación del Newsletter ---
        document.getElementById('newsletterForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const emailInput = document.getElementById('newsletterEmail');
            const newsletterAlert = document.getElementById('newsletterAlert');
            
            if (emailInput.value.trim() !== '') {
                newsletterAlert.classList.remove('d-none', 'alert-danger');
                newsletterAlert.classList.add('alert-success');
                newsletterAlert.textContent = '¡Suscripción exitosa! Recibirás nuestras novedades pronto.';
                emailInput.value = ''; // Limpiar el campo
                
                setTimeout(() => {
                    newsletterAlert.classList.add('d-none');
                }, 3000); // Oculta el mensaje después de 3 segundos
            } else {
                newsletterAlert.classList.remove('d-none', 'alert-success');
                newsletterAlert.classList.add('alert-danger');
                newsletterAlert.textContent = 'Por favor, ingresa un correo válido.';
            }
        });