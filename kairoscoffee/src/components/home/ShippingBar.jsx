// src/components/home/ShippingBar.jsx
import React from 'react';

const ShippingBar = () => {
    return (
        <section className="shipping-bar-horizontal">
            <p className="shipping-message active mb-0">Envío **GRATIS** sobre $30.000</p>
            <p className="shipping-message mb-0">Enviamos a **TODAS** las regiones</p>
            <p className="shipping-message mb-0">Envío **EXPRESS** en menos de 24hrs</p>
        </section>
    );
};

export default ShippingBar;