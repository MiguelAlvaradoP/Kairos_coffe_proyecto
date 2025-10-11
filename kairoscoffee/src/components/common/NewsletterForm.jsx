// RUTA: src/components/common/NewsletterForm.jsx

import React, { useState, useEffect } from 'react';

// 1. Importa el módulo de estilos dedicado
import styles from './NewsletterForm.module.css';
// 2. Importa la utilidad de validación (suponiendo que ya existe)
import { validateEmail } from '../../utils/validateEmail';

const NewsletterForm = () => {
    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState({ show: false, message: '', type: '' });

    // 4. useEffect para manejar la desaparición de la alerta
    useEffect(() => {
        if (alert.show) {
            const timer = setTimeout(() => {
                setAlert({ show: false, message: '', type: '' });
            }, 3000);

            // Función de limpieza para evitar errores si el componente se desmonta
            return () => clearTimeout(timer);
        }
    }, [alert]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // 2. Usa la función de validación
        if (validateEmail(email)) {
            setAlert({ show: true, message: '¡Suscripción exitosa!', type: 'success' });
            setEmail('');
        } else {
            setAlert({ show: true, message: 'Por favor, ingresa un correo válido.', type: 'danger' });
        }
    };

    return (
        // Usamos un div como contenedor para aplicar la clase del módulo
        <div className={styles.newsletterContainer}>
            <h5 className="fw-bold">Newsletter</h5>
            <p>Suscríbete y entérate de todas nuestras ofertas y novedades.</p>
            <form className={`d-flex ${styles.newsletterForm}`} onSubmit={handleSubmit}>
                <input
                    type="email"
                    className="form-control me-2"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className={`btn ${styles.submitButton}`}
                    // 3. Mejora de accesibilidad
                    aria-label="Suscribirse al newsletter"
                >
                    →
                </button>
            </form>
            {alert.show && (
                <div className={`alert alert-${alert.type} mt-2`} role="alert">
                    {alert.message}
                </div>
            )}
        </div>
    );
};

export default NewsletterForm;