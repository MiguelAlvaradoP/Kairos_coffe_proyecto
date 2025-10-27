import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    // Estado para manejar el mensaje de alerta (texto, tipo y visibilidad)
    const [alert, setAlert] = useState({
        show: false,
        message: '',
        type: 'danger' // 'danger' o 'success'
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const emailValue = email.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue === '' || !emailRegex.test(emailValue)) {
        // Correo inválido: muestra alerta de error
        setAlert({
            show: true,
            message: 'Por favor, ingresa un correo electrónico válido.',
            type: 'danger'
        });
        return;
        }

        // Correo válido: simula suscripción exitosa
        setAlert({
        show: true,
        message: '¡Suscripción exitosa! Recibirás nuestras novedades pronto.',
        type: 'success'
        });

        // Limpia el campo de entrada
        setEmail('');

        // Oculta el mensaje después de 3 segundos
        setTimeout(() => {
        setAlert({ show: false, message: '', type: '' });
        }, 3000);
    };

    return (
        <>
        <form className="d-flex newsletter-form" onSubmit={handleSubmit} noValidate>
            <input 
            type="email" 
            className="form-control me-2" 
            placeholder="Correo electrónico" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">→</button>
        </form>

        {/* Alerta condicional que se muestra según el estado */}
        {alert.show && (
            <div className={`alert alert-${alert.type} mt-2`} role="alert">
            {alert.message}
            </div>
        )}
        </>
    );
};

export default Newsletter;