// src/components/home/Carousel.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
    { url: "https://www.branding.news/wp-content/uploads/2017/09/03_Taylors-of-Harrogate_Pearlfisher_Origins-Coffee-Range_Digital_02.jpg", alt: "Café Marley Coffee" },
    { url: "https://mercadodelcafe.cl/cdn/shop/files/Banner_Queres_ser_distribuidor_3ba621ff-56b8-49cf-b563-2117396c78cc.png?crop=center&height=600&v=1732561906&width=1500", alt: "Banner para distribuidores" },
    { url: "https://www.illy.com/on/demandware.static/-/Sites-siteCatalog_illycaffe_SFRA_ES/default/dwedea435b/plp_header/PLP_caff%C3%A8_Banner%20home_CAM_03_A_2880%C3%97800.jpg", alt: "Café illy" },
];

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Lógica para el cambio automático del carrusel
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % slides.length);
        }, 5000); // Cambia cada 5 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="carousel" role="banner" aria-label="Imágenes destacadas de productos">
            {slides.map((slide, index) => (
                <figure 
                    key={index} 
                    className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                    style={{ display: index === activeIndex ? 'block' : 'none' }}
                >
                    <img src={slide.url} alt={slide.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                </figure>
            ))}

            <div className="carousel-text">
                <h1>Kairós Coffee</h1>
                <p>Tu momento empieza aquí ☕</p>
                <Link to="/productos" className="btn btn-light">Ver Productos</Link>
            </div>

            <div className="indicators" role="tablist">
                {slides.map((_, index) => (
                    <button 
                        key={index}
                        className={index === activeIndex ? 'active' : ''}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Ir al slide ${index + 1}`}
                    />
                ))}
            </div>
        </header>
    );
};

export default Carousel;