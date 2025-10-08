document.addEventListener('DOMContentLoaded', () => {

    // ===================================================================
    // 1. LÓGICA DEL CARRUSEL (Desplazamiento con botones)
    // ===================================================================
    const carruseles = document.querySelectorAll('.carrusel-container');

    carruseles.forEach(container => {
        const prevBtn = container.querySelector('.prev');
        const nextBtn = container.querySelector('.next');
        const carrusel = container.querySelector('.carrusel');

        // Asegúrate de que los botones existan antes de agregar listeners
        if (prevBtn && nextBtn && carrusel) {
            prevBtn.addEventListener('click', () => {
                // Desplazamiento lateral de 280px (ancho del producto + gap)
                carrusel.scrollBy({ left: -280, behavior: 'smooth' });
            });

            nextBtn.addEventListener('click', () => {
                // Desplazamiento lateral de 280px
                carrusel.scrollBy({ left: 280, behavior: 'smooth' });
            });
        }
    });


    // ===================================================================
    // 2. LÓGICA DEL CARRITO DE COMPRAS (Panel lateral)
    // ===================================================================

    // Array que va a almacenar los productos seleccionados
    let carrito = [];

    // Selectores de elementos del DOM
    const botones = document.querySelectorAll('.btn-carrito');
    const contadorCarrito = document.getElementById('contador-carrito');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    const iconoCarrito = document.querySelector('.carrito-container');
    const botonCerrar = document.getElementById('cerrar-carrito');
    const carritoPanel = document.getElementById('carrito-panel');


    // --- Funciones del Panel ---

    // Abrir carrito
    iconoCarrito.addEventListener('click', () => {
        carritoPanel.classList.add('active');
        mostrarCarrito();
    });

    // Cerrar carrito
    botonCerrar.addEventListener('click', () => {
        carritoPanel.classList.remove('active');
    });


    // --- Lógica de Añadir Producto ---

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const producto = boton.closest('.producto');
            const nombre = producto.querySelector('h2').innerText;

            // 🔑 CORRECCIÓN: Asumiendo que el precio está en el <h3>, y eliminando puntos/comas
            // El `replace(/\./g, '')` se usa para eliminar los puntos de los miles (ej: 1.500 -> 1500)
            const precioTexto = producto.querySelector('h3').innerText
                                        .replace('$', '')
                                        .replace(/\./g, '')
                                        .trim(); 
            const precio = parseInt(precioTexto);
            const imagen = producto.querySelector('img').src;
            const id = boton.id || `prod-${Date.now()}`; // Usa un ID del botón o genera uno

            const item = { id, nombre, precio, imagen };
            carrito.push(item);

            contadorCarrito.textContent = carrito.length;
            mostrarCarrito();
        });
    });


    // --- Lógica de Renderizado y Eliminación ---

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
                <span>$${item.precio.toLocaleString('es-CL')}</span>
                <button class="eliminar-item" data-index="${index}">×</button>
            `;
            listaCarrito.appendChild(div);
        });

        // Asegura que el Total se muestre en el footer del panel (elemento totalCarrito)
        totalCarrito.textContent = "Total: $" + total.toLocaleString('es-CL');


        // Agregar funcionalidad a botones de eliminar
        const botonesEliminar = document.querySelectorAll('.eliminar-item');
        botonesEliminar.forEach(boton => {
            boton.addEventListener('click', () => {
                // El atributo data-index guarda la posición en el array del carrito
                const index = parseInt(boton.getAttribute('data-index')); 
                carrito.splice(index, 1); // eliminar el producto
                contadorCarrito.textContent = carrito.length; // actualizar contador
                mostrarCarrito(); // refrescar la lista
            });
        });

    }
    
    // --- Lógica del Botón Pagar ---
    const btnPagar = document.getElementById('btn-pagar');
    if (btnPagar) { // Solo si el botón existe en el HTML
        btnPagar.addEventListener('click', () => {
            if (carrito.length > 0) {
                // Guardar carrito en localStorage antes de redirigir
                localStorage.setItem('carrito', JSON.stringify(carrito));
                // Redirigir a la página de pago
                window.location.href = 'checkout.html';
            } else {
                alert('El carrito está vacío. Agrega productos antes de pagar.');
            }
        });
    }

    // ===================================================================
    // 3. Lógica de Validación del Newsletter (en el Footer)
    // ===================================================================
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
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
    }

}); // Fin DOMContentLoaded