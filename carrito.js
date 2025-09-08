document.addEventListener('DOMContentLoaded', () => {

    // Referencias a los elementos del DOM
    const iconoCarrito = document.querySelector('.icono-carrito');
    const carritoPanel = document.getElementById('carrito-panel');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    const botonesAgregar = document.querySelectorAll('.btn-agregar');
    const cerrarCarritoBtn = document.getElementById('cerrar-carrito');
    const pagarBtn = document.getElementById('btn-pagar');

    // Funciones del carrito
    function obtenerCarrito() {
        return JSON.parse(localStorage.getItem('carrito')) || [];
    }

    function guardarCarrito(carrito) {
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarContadorCarrito();
    }

    function renderizarCarrito() {
        const carrito = obtenerCarrito();
        listaCarrito.innerHTML = '';
        let total = 0;

        if (carrito.length === 0) {
            listaCarrito.innerHTML = '<p class="text-center mt-3">El carrito está vacío.</p>';
        } else {
            carrito.forEach((item, index) => {
                const li = document.createElement('li');
                li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
                li.innerHTML = `
                    <div>
                        <span class="fw-bold">${item.nombre}</span>
                        <br>
                        <small>Cantidad: ${item.cantidad}</small>
                    </div>
                    <span>$${(item.precio * item.cantidad).toLocaleString('es-CL')}</span>
                    <button class="btn btn-sm btn-outline-danger btn-eliminar-item" data-index="${index}">X</button>
                `;
                listaCarrito.appendChild(li);
                total += item.precio * item.cantidad;
            });
        }
        
        totalCarrito.textContent = `$${total.toLocaleString('es-CL')}`;

        document.querySelectorAll('.btn-eliminar-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                eliminarDelCarrito(index);
            });
        });
    }

    function agregarAlCarrito(producto) {
        let carrito = obtenerCarrito();
        const productoExistente = carrito.find(item => item.id === producto.id);

        if (productoExistente) {
            productoExistente.cantidad++;
        } else {
            carrito.push({ ...producto, cantidad: 1 });
        }
        guardarCarrito(carrito);
        // Opcional: mostrar un mensaje de éxito
        alert(`¡Se agregó ${producto.nombre} al carrito!`);
    }
    
    function eliminarDelCarrito(index) {
        const carrito = obtenerCarrito();
        carrito.splice(index, 1);
        guardarCarrito(carrito);
        renderizarCarrito();
    }

    function actualizarContadorCarrito() {
        const carrito = obtenerCarrito();
        const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
        const contador = document.getElementById('contador-carrito');
        if (contador) {
            contador.textContent = totalItems;
            contador.style.display = totalItems > 0 ? 'inline-block' : 'none';
        }
    }


    // Manejo de Eventos
    // Lógica para abrir/cerrar el panel del carrito con un solo clic
    if (iconoCarrito) {
        iconoCarrito.addEventListener('click', () => {
            carritoPanel.classList.toggle('open');
            if (carritoPanel.classList.contains('open')) {
                renderizarCarrito();
            }
        });
    }

    if (cerrarCarritoBtn) {
        cerrarCarritoBtn.addEventListener('click', () => {
            carritoPanel.classList.remove('open');
        });
    }

    // Eventos para los botones "Agregar al Carrito"
    botonesAgregar.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.card');
            if (card) {
                const producto = {
                    id: card.dataset.id,
                    nombre: card.dataset.nombre,
                    precio: parseFloat(card.dataset.precio)
                };
                agregarAlCarrito(producto);
            }
        });
    });

    if (pagarBtn) {
        pagarBtn.addEventListener('click', () => {
            if (obtenerCarrito().length > 0) {
                window.location.href = "checkout.html";
            } else {
                alert("El carrito está vacío.");
            }
        });
    }
    
    // Inicializar al cargar la página
    actualizarContadorCarrito();
    renderizarCarrito();
});