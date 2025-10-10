// src/components/common/NewsletterForm.jsx
import React, { useState } from 'react';

const NewsletterForm = () => {
    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState({ message: '', type: '' });

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email.trim() !== '' && email.includes('@')) {
        // Lógica de suscripción a la API aquí
        setAlert({ 
            message: '¡Suscripción exitosa! Recibirás nuestras novedades pronto.', 
            type: 'alert-success' 
        });
        setEmail('');
        
        setTimeout(() => setAlert({ message: '', type: '' }), 3000);
        } else {
        setAlert({ 
            message: 'Por favor, ingresa un correo válido.', 
            type: 'alert-danger' 
        });
        }
    };

    return (
        <>
        <form className="d-flex newsletter-form" onSubmit={handleSubmit}>
            <input
            type="email"
            className="form-control me-2"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <button type="submit" className="btn btn-primary">→</button>
        </form>
        
        {alert.message && (
            <div 
                className={`alert mt-2 ${alert.type}`} 
                role="alert"
            >
            {alert.message}
            </div>
        )}
        </>
    );
};

export default NewsletterForm;