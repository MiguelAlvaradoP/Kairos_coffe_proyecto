document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const mensaje = document.getElementById('mensaje');
    const interesPrincipal = document.getElementById('tipo');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        if (validarFormulario()) {
            mostrarExito();
            form.reset(); 
        }
    });

    function validarFormulario() {
        let esValido = true;

        // Limpiar mensajes de error previos y clases de Bootstrap de validación
        document.querySelectorAll('.invalid-feedback').forEach(el => el.remove());
        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
        document.querySelectorAll('.alert-success').forEach(el => el.remove()); 

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

    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
    
    function validarTelefono(telefono) {
        const re = /^\+56 9\s\d{8}$/;
        const re2 = /^\+56 9\s\d{4}\s\d{4}$/;
        return re.test(telefono) || re2.test(telefono);
    }
    
    function mostrarError(elemento, mensaje) {
        elemento.classList.add('is-invalid');

        const errorDiv = document.createElement('div');
        errorDiv.classList.add('invalid-feedback');
        errorDiv.textContent = mensaje;

        elemento.parentNode.appendChild(errorDiv);
    }

    function mostrarExito() {
        const successDiv = document.createElement('div');
        successDiv.classList.add('alert', 'alert-success', 'mt-3', 'text-center');
        successDiv.textContent = '¡Mensaje enviado con éxito!';
        
        // Inserta el mensaje de éxito justo antes del formulario, dentro de su contenedor padre
        form.parentNode.insertBefore(successDiv, form);

        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }
});