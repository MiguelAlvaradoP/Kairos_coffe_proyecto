// RUTA: src/components/home/Carousel.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 1. Importa el módulo de estilos específico
import styles from './Carousel.module.css';

// Importa las imágenes del carrusel
import img1 from '../../assets/img/carousel-1.jpg';
import img2 from '../../assets/img/carousel-2.png';
import img3 from '../../assets/img/carousel-3.jpg';

// 2. Estructura de datos mejorada para contenido dinámico
const slides = [
    { 
        img: img1, 
        alt: 'Granos de café tostado', 
        title: 'Café de Especialidad',
        subtitle: 'Descubre granos seleccionados de los mejores orígenes.',
        link: '/producto#cafe'
    },
    { 
        img: img2, 
        alt: 'Banner para distribuidores', 
        title: 'Conviértete en Distribuidor',
        subtitle: 'Lleva la calidad de Kairós Coffee a tu negocio.',
        link: '/contacto'
    },
    { 
        img: img3, 
        alt: 'Cafetera y taza de café illy', 
        title: 'Accesorios Perfectos',
        subtitle: 'Encuentra todo lo que necesitas para tu ritual del café.',
        link: '/producto#accesorios'
    },
];

const Carousel = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000); // Aumentado a 5 segundos para dar tiempo a leer
        return () => clearInterval(interval);
    }, []);

    const currentSlide = slides[current];

    return (
        // 3. Aplicamos las clases del módulo importado
        <header className={styles.carousel} role="banner" aria-label="Imágenes destacadas de productos">
            {slides.map((slide, index) => (
                <figure 
                    key={index} 
                    className={`${styles.carouselItem} ${index === current ? styles.active : ''}`}
                >
                    <img src={slide.img} alt={slide.alt} />
                </figure>
            ))}

            {/* El contenido del texto ahora es dinámico */}
            <div className={styles.carouselText}>
                <h1>{currentSlide.title}</h1>
                <p>{currentSlide.subtitle}</p>
                <Link to={currentSlide.link} className="btn btn-light">Ver Más</Link>
            </div>

            <div className={styles.indicators} role="tablist">
                {slides.map((_, index) => (
                    <button 
                        key={index}
                        className={index === current ? styles.active : ''}
                        onClick={() => setCurrent(index)}
                        aria-label={`Ir a la imagen ${index + 1}`}
                    />
                ))}
            </div>
        </header>
    );
};

export default Carousel;