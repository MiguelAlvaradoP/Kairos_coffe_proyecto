// main.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica del Modal de Login y Mensaje Flotante ---
    const loginBtn = document.getElementById('loginBtn');
    // Usamos el elemento <dialog> semántico
    const modal = document.getElementById('loginModal'); 
    const closeModal = document.getElementById('closeModal');
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginAlert = document.getElementById('loginAlert');

    // Abrir modal: usando showModal() para <dialog>
    if (loginBtn && modal) {
        loginBtn.addEventListener('click', () => {
            modal.showModal(); 
        });
    }

    // Cerrar modal: usando close() para <dialog>
    if (closeModal && modal) {
        closeModal.addEventListener('click', () => {
            modal.close();
        });
    }

    // Cerrar modal al hacer click fuera del contenido
    if (modal) {
        modal.addEventListener('click', e => {
            const dialogDimensions = modal.getBoundingClientRect();
            // Cierra si el click está fuera de la caja de contenido del modal
            if (
                e.clientX < dialogDimensions.left ||
                e.clientX > dialogDimensions.right ||
                e.clientY < dialogDimensions.top ||
                e.clientY > dialogDimensions.bottom
            ) {
                modal.close();
            }
        });
    }

    // Manejo del formulario de Login
    if (loginForm) {
        loginForm.addEventListener('submit', e => {
            e.preventDefault();
            const username = usernameInput.value.trim();

            // Simulación de login exitoso
            if (username !== '') {
                if (modal) modal.close(); 
                
                // Mostrar mensaje de bienvenida
                loginMessage.textContent = `¡Bienvenido de vuelta, ${username}!`;
                loginMessage.classList.remove('error');
                loginMessage.classList.add('show', 'success');

                // Limpiar inputs
                loginForm.reset();
                if (loginAlert) loginAlert.textContent = ''; // Limpiar alerta de error

                // Ocultar mensaje después de 3 segundos
                setTimeout(() => loginMessage.classList.remove('show', 'success'), 3000);
            } else {
                // Mensaje de error (aunque el input required debería atrapar esto)
                loginAlert.textContent = 'Por favor, ingresa tu correo electrónico';
                loginAlert.classList.add('alert', 'alert-danger');

                setTimeout(() => {
                    loginAlert.textContent = '';
                    loginAlert.classList.remove('alert', 'alert-danger');
                }, 3000);
            }
        });
    }
});