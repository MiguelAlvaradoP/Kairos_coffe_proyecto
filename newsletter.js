// ===================================================================
// 3. Lógica de Validación y Suscripción del Newsletter (Footer)
// ===================================================================

document.addEventListener("DOMContentLoaded", () => {
    const newsletterForm = document.getElementById("newsletterForm");
    const emailInput = document.getElementById("newsletterEmail");
    const newsletterAlert = document.getElementById("newsletterAlert");

    if (!newsletterForm) return;

    // Expresión regular para validar correos
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const emailValue = emailInput.value.trim();

        if (emailValue === "" || !emailRegex.test(emailValue)) {
        // ❌ Correo inválido
        newsletterAlert.classList.remove("d-none", "alert-success");
        newsletterAlert.classList.add("alert", "alert-danger");
        newsletterAlert.textContent = "Por favor, ingresa un correo electrónico válido.";
        return;
        }

        // ✅ Correo válido (simula suscripción exitosa)
        newsletterAlert.classList.remove("d-none", "alert-danger");
        newsletterAlert.classList.add("alert", "alert-success");
        newsletterAlert.textContent = "¡Suscripción exitosa! Recibirás nuestras novedades pronto.";

        // Limpia el campo
        emailInput.value = "";

        // Oculta el mensaje después de 3 segundos
        setTimeout(() => {
        newsletterAlert.classList.add("d-none");
        }, 3000);
    });
});
