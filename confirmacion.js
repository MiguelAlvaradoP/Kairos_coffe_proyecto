// ===========================
// Confirmación de Compra
// ===========================
document.addEventListener('DOMContentLoaded', () => {

    // --- DISPLAY DE CONFIRMACIÓN ---

    // 1. Obtener valores guardados en localStorage
    const totalItemsGuardados = parseInt(localStorage.getItem('totalItems')) || 0;
    const totalAmountGuardado = parseFloat(localStorage.getItem('totalFinalPagado')) || 0;

    // 2. Formatear moneda (CLP - Peso Chileno)
    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
    });

    // 3. Actualizar resumen de compra
    document.getElementById('summary-quantity').textContent = totalItemsGuardados.toString();
    document.getElementById('summary-total').textContent = formatter.format(totalAmountGuardado);

    // 4. Mostrar mensaje dinámico
    const mensajeDinamico = document.getElementById('mensaje-dinamico');
    if (totalItemsGuardados > 0 && totalAmountGuardado > 0) {
        mensajeDinamico.textContent = `Has comprado ${totalItemsGuardados} productos por un total de ${formatter.format(totalAmountGuardado)}. ¡Te esperamos pronto!`;
    } else {
        mensajeDinamico.textContent = `Tu pedido ha sido procesado. ¡Te esperamos pronto!`;
    }

    // 5. Limpiar localStorage
    localStorage.removeItem('totalItems');
    localStorage.removeItem('totalFinalPagado');
});
