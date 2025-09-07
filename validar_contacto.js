document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const mensaje = document.getElementById('mensaje');
    const interesPrincipal = document.getElementById('tipo');

    form.addEventListener('submit', function(event) {
        // Prevenir el envío del formulario por defecto
        event.preventDefault(); 

        // Validar los campos
        if (validarFormulario()) {
            alert('¡Mensaje enviado con éxito!');
            form.reset(); // Limpiar el formulario después del envío exitoso
        }
    });

    function validarFormulario() {
        let esValido = true;

        // Limpiar mensajes de error previos
        document.querySelectorAll('.error-message').forEach(el => el.remove());

        // Validar campo de Nombre
        if (nombre.value.trim() === '') {
            mostrarError(nombre, 'El nombre es obligatorio.');
            esValido = false;
        }

        // Validar campo de Email
        if (email.value.trim() === '') {
            mostrarError(email, 'El correo electrónico es obligatorio.');
            esValido = false;
        } else if (!validarEmail(email.value)) {
            mostrarError(email, 'Por favor, ingresa un correo válido.');
            esValido = false;
        }

        // Validar campo de Teléfono
        if (telefono.value.trim() === '') {
            mostrarError(telefono, 'El teléfono es obligatorio.');
            esValido = false;
        } else if (!validarTelefono(telefono.value)) {
            mostrarError(telefono, 'Por favor, ingresa un número válido en el formato +569 12345678.');
            esValido = false;
        }

        // Función para validar el formato del teléfono
    function validarTelefono(telefono) {
        // Expresión regular para el formato +569 12345678
        const re = /^\+56 9\s\d{8}$/;
        // Expresión regular para el formato +569 1234 5678
        const re2 = /^\+56 9\s\d{4}\s\d{4}$/;
        // Permitir ambos formatos para ser más flexible
        return re.test(telefono) || re2.test(telefono);
    }

        // Validar campo de Interés Principal
        if (interesPrincipal.value === 'Selecciona...') {
            mostrarError(interesPrincipal, 'Por favor, selecciona una opción.');
            esValido = false;
        }

        // Validar campo de Mensaje
        if (mensaje.value.trim() === '') {
            mostrarError(mensaje, 'El mensaje es obligatorio.');
            esValido = false;
        }

        return esValido;
    }

    function mostrarError(elemento, mensaje) {
        // Crear un nuevo elemento para el mensaje de error
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error-message');
        errorDiv.textContent = mensaje;

        // Insertar el mensaje de error después del campo
        elemento.parentNode.insertBefore(errorDiv, elemento.nextSibling);

        // Agrega clase de error al input para resaltarlo
        elemento.classList.add('is-invalid');
    }

    function validarEmail(email) {
        // Expresión regular para un formato de email básico
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});