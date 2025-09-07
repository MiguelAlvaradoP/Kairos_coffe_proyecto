document.addEventListener('DOMContentLoaded', () => {

    // 1. Array de productos simulados
    const productos = [
        { id: 1, nombre: 'Café Grano Tostado', precio: 12990, imagen: 'https://cdn.shopify.com/s/files/1/0612/8256/2653/products/Cafe-Grano-Lava_d6396f9a-051f-4b47-b355-081836c2a138_1024x1024.jpg?v=1672332617' },
        { id: 2, nombre: 'Café Molido Italiano', precio: 8990, imagen: 'https://cdn.shopify.com/s/files/1/0612/8256/2653/products/Cafe-Molido-italiano_e203cf3f-7e04-453b-8255-ecf923b7b99c_1024x1024.jpg?v=1672332617' },
        { id: 3, nombre: 'Cápsulas Compatibles Nespresso', precio: 15990, imagen: 'https://cdn.shopify.com/s/files/1/0612/8256/2653/products/pack-capsula_1024x1024.jpg?v=1672332617' },
        { id: 4, nombre: 'Cápsulas Compatibles Dolce Gusto', precio: 16990, imagen: 'https://cdn.shopify.com/s/files/1/0612/8256/2653/products/pack-capsula-dolce-gusto_1024x1024.jpg?v=1672332617' },
        { id: 5, nombre: 'Cafetera de Filtro', precio: 25990, imagen: 'https://cdn.shopify.com/s/files/1/0612/8256/2653/products/cafetera-goteo_532x532.jpg?v=1672332617' },
        { id: 6, nombre: 'Vaso Térmico', precio: 7990, imagen: 'https://cdn.shopify.com/s/files/1/0612/8256/2653/products/taza_532x532.jpg?v=1672332617' }
    ];

    // 2. Elementos del DOM
    const productosContainer = document.getElementById('productos-container');
    const carritoPanel = document.getElementById('carrito-panel');
    const iconoCarrito = document.querySelector('.icono-carrito');
    const cerrarCarritoBtn = document.getElementById('cerrar-carrito');
    const contadorCarrito = document.getElementById('contador-carrito');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    const pagarBtn = document.getElementById('btn-pagar');

    // 3. Funciones del Carrito
    function obtenerCarrito() {
        const carritoGuardado = localStorage.getItem('carrito');
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    }

    function guardarCarrito(carrito) {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function actualizarContador() {
        const carrito = obtenerCarrito();
        const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
        contadorCarrito.textContent = totalItems;
    }

    function actualizarPanelCarrito() {
        const carrito = obtenerCarrito();
        listaCarrito.innerHTML = ''; // Limpiar la lista
        let total = 0;

        carrito.forEach(item => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('item-carrito');
            productoDiv.innerHTML = `
                <img src="${item.imagen}" alt="${item.nombre}">
                <div>
                    <h4>${item.nombre}</h4>
                    <p>$${item.precio} x ${item.cantidad}</p>
                </div>
                <button class="eliminar-item" data-id="${item.id}">×</button>
            `;
            listaCarrito.appendChild(productoDiv);
            total += item.precio * item.cantidad;
        });

        totalCarrito.textContent = `Total: $${total}`;
    }
    
    // 4. Lógica principal
    function agregarAlCarrito(productoId) {
        const carrito = obtenerCarrito();
        const productoExistente = carrito.find(item => item.id === productoId);
        
        if (productoExistente) {
            productoExistente.cantidad++;
        } else {
            const productoAAgregar = productos.find(p => p.id === productoId);
            if (productoAAgregar) {
                carrito.push({ ...productoAAgregar, cantidad: 1 });
            }
        }
        guardarCarrito(carrito);
        actualizarContador();
        actualizarPanelCarrito();
    }

    function eliminarDelCarrito(productoId) {
        let carrito = obtenerCarrito();
        carrito = carrito.filter(item => item.id !== productoId);
        guardarCarrito(carrito);
        actualizarContador();
        actualizarPanelCarrito();
    }
    
    // 5. Renderizar los productos
    function renderizarProductos() {
        productos.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto-card');
            productoDiv.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="producto-info">
                    <h3>${producto.nombre}</h3>
                    <p>$${producto.precio}</p>
                    <button class="btn-comprar" data-id="${producto.id}">Añadir al carrito</button>
                </div>
            `;
            productosContainer.appendChild(productoDiv);
        });
    }

    // 6. Event Listeners
    iconoCarrito.addEventListener('click', () => {
        carritoPanel.classList.add('abierto');
        actualizarPanelCarrito();
    });

    cerrarCarritoBtn.addEventListener('click', () => {
        carritoPanel.classList.remove('abierto');
    });
    
    productosContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-comprar')) {
            const productoId = parseInt(e.target.dataset.id);
            agregarAlCarrito(productoId);
        }
    });
    
    listaCarrito.addEventListener('click', (e) => {
        if (e.target.classList.contains('eliminar-item')) {
            const productoId = parseInt(e.target.dataset.id);
            eliminarDelCarrito(productoId);
        }
    });
    
    pagarBtn.addEventListener('click', () => {
        const carrito = obtenerCarrito();
        if (carrito.length > 0) {
            alert('Proceso de pago simulado. Gracias por tu compra.');
            localStorage.removeItem('carrito'); // Vaciar el carrito
            actualizarContador();
            actualizarPanelCarrito();
            carritoPanel.classList.remove('abierto');
        } else {
            alert('El carrito está vacío. Agrega productos para continuar.');
        }
    });

    // Inicializar la página
    renderizarProductos();
    actualizarContador();
});