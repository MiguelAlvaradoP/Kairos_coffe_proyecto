import React, { useState, useEffect } from 'react';
import '../styles/global.css';

const messages = [
  'Envío **GRATIS** sobre $30.000',
  'Enviamos a **TODAS** las regiones',
  'Envío **EXPRESS** en menos de 24hrs'
];

export default function ShippingBar() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (messages.length <= 1) return;
        const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % messages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="shipping-bar-horizontal">
        <p className="shipping-message active mb-0">{messages[current]}</p>
        </section>
    );
}
