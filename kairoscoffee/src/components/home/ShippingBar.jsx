// RUTA: src/components/home/ShippingBar.jsx

import React, { useState, useEffect } from 'react';
// 1. Importa el módulo de estilos dedicado
import styles from './ShippingBar.module.css';

const messages = [
  "Envío **GRATIS** sobre $30.000",
  "Enviamos a **TODAS** las regiones",
  "Envío **EXPRESS** en menos de 24hrs",
];

const ShippingBar = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % messages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Esta función es excelente, no necesita cambios.
    const renderMessage = (msg) => {
        const parts = msg.split('**');
        return parts.map((part, index) => 
            index % 2 === 1 ? <strong key={index}>{part}</strong> : part
        );
    };

    return (
        <section className={styles.shippingBar}>
            <p 
                // 3. La key fuerza el re-renderizado para activar la animación
                key={currentIndex} 
                className={styles.shippingMessage}
            >
                {renderMessage(messages[currentIndex])}
            </p>
        </section>
    );
};

export default ShippingBar;