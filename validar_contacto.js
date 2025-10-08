document.addEventListener('DOMContentLoaded', function () {
    // --- VALIDACIÓN DEL FORMULARIO DE CONTACTO ---
    const form = document.getElementById('contacto-form');
    
    // Si el formulario de contacto existe en la página
    if (form) {
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const telefono = document.getElementById('telefono');
        const mensaje = document.getElementById('mensaje');
        const interesPrincipal = document.getElementById('tipo');
    
        form.addEventListener('submit', function (event) {
            event.preventDefault(); 
            if (validarFormulario()) {
                mostrarExito();
                form.reset(); 
            }
        });
    
        function validarFormulario() {
            let esValido = true;
    
            // 1. Limpiar mensajes de error y clases de Bootstrap de validación
            document.querySelectorAll('.invalid-feedback').forEach(el => el.remove());
            document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
            document.querySelectorAll('.alert-success').forEach(el => {
                 // Solo removemos la alerta de éxito del formulario, no la del newsletter
                if (el.textContent.includes('¡Mensaje enviado con éxito!')) {
                    el.remove();
                }
            });
    
            // 2. Validar campo de Nombre
            if (nombre.value.trim() === '') {
                mostrarError(nombre, 'El nombre es obligatorio.');
                esValido = false;
            }
    
            // 3. Validar campo de Email
            if (email.value.trim() === '') {
                mostrarError(email, 'El correo electrónico es obligatorio.');
                esValido = false;
            } else if (!validarEmail(email.value)) {
                mostrarError(email, 'Por favor, ingresa un correo válido.');
                esValido = false;
            }
    
            // 4. Validar campo de Teléfono
            if (telefono.value.trim() === '') {
                mostrarError(telefono, 'El teléfono es obligatorio.');
                esValido = false;
            } else if (!validarTelefono(telefono.value)) {
                mostrarError(telefono, 'Por favor, ingresa un número válido (e.g., +56 9 1234 5678).');
                esValido = false;
            }
    
            // 5. Validar campo de Interés Principal (CORRECCIÓN APLICADA AQUÍ)
            // Se comprueba si el valor es una cadena vacía, que es el 'value' del option "Selecciona..."
            if (interesPrincipal.value === '') { 
                mostrarError(interesPrincipal, 'Por favor, selecciona una opción.');
                esValido = false;
            }
    
            // 6. Validar campo de Mensaje
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
            // Acepta formatos como +56 9 12345678 o +56 9 1234 5678
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
    }
});