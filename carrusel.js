// carrusel.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Carrusel de imágenes Principal ---
    // Selector modificado para buscar las nuevas etiquetas <figure>
    const carouselItems = document.querySelectorAll(".carousel figure");
    const indicatorsContainer = document.querySelector(".indicators");
    let currentCarousel = 0;

    // Si el contenedor de indicadores no existe o no hay elementos, salir.
    if (!indicatorsContainer || carouselItems.length === 0) return;

    // Inicializar indicadores (Ahora son <button> para mejor accesibilidad)
    carouselItems.forEach((item, i) => {
        const dot = document.createElement("button");
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', `Mostrar imagen ${i + 1}`);
        if (i === 0) {
            dot.classList.add("active");
            item.classList.add("active");
            dot.setAttribute('aria-selected', 'true');
        } else {
            item.classList.remove("active");
            dot.setAttribute('aria-selected', 'false');
        }
        dot.addEventListener("click", () => showCarouselItem(i));
        indicatorsContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll(".indicators button");

    /**
     * Muestra el elemento del carrusel en el índice especificado.
     * @param {number} index El índice del elemento a mostrar.
     */
    function showCarouselItem(index) {
        // Remover estado activo del elemento anterior
        carouselItems[currentCarousel].classList.remove("active");
        dots[currentCarousel].classList.remove("active");
        dots[currentCarousel].setAttribute('aria-selected', 'false');

        // Establecer el nuevo índice
        currentCarousel = index;

        // Añadir estado activo al nuevo elemento
        carouselItems[currentCarousel].classList.add("active");
        dots[currentCarousel].classList.add("active");
        dots[currentCarousel].setAttribute('aria-selected', 'true');
    }

    /**
     * Muestra el siguiente elemento del carrusel de forma cíclica.
     */
    function showNextCarouselItem() {
        showCarouselItem((currentCarousel + 1) % carouselItems.length);
    }

    // Intervalo de cambio automático
    if (carouselItems.length > 1) {
        setInterval(showNextCarouselItem, 4000); 
    }


    // --- Banner giratorio de envío ---
    const shippingMessages = document.querySelectorAll(".shipping-message");
    let currentShippingMessage = 0;
    
    // Si no hay mensajes de envío, salir.
    if (shippingMessages.length === 0) return;

    /**
     * Muestra el mensaje de envío en el índice especificado.
     * @param {number} index El índice del mensaje a mostrar.
     */
    function showShippingMessage(index) {
        shippingMessages[currentShippingMessage].classList.remove("active");
        currentShippingMessage = index;
        shippingMessages[currentShippingMessage].classList.add("active");
    }

    /**
     * Muestra el siguiente mensaje de envío de forma cíclica.
     */
    function showNextShippingMessage() {
        showShippingMessage((currentShippingMessage + 1) % shippingMessages.length);
    }

    // Intervalo de cambio automático del banner de envío
    if (shippingMessages.length > 1) {
        setInterval(showNextShippingMessage, 4000);
    }
});