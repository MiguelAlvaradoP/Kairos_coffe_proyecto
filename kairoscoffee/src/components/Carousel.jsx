import React, { useEffect, useState } from 'react';

const images = [
    "https://www.branding.news/wp-content/uploads/2017/09/03_Taylors-of-Harrogate_Pearlfisher_Origins-Coffee-Range_Digital_02.jpg",
    "https://mercadodelcafe.cl/cdn/shop/files/Banner_Queres_ser_distribuidor_3ba621ff-56b8-49cf-b563-2117396c78cc.png?crop=center&height=600&v=1732561906&width=1500",
    "https://www.illy.com/on/demandware.static/-/Sites-siteCatalog_illycaffe_SFRA_ES/default/dwedea435b/plp_header/PLP_caff%C3%A8_Banner%20home_CAM_03_A_2880%C3%97800.jpg",
    "https://live.staticflickr.com/8426/7738096728_0d0f420c2f_k.jpg",
    "https://www.occaffe.cl/cdn/shop/files/Banner_occaffe_1000x1000.jpg?v=1622158073"
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <header className="carousel" role="banner" aria-label="Imágenes destacadas de productos">
            {images.map((src, index) => (
                <figure key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
                    <img src={src} alt={`Imagen de carrusel ${index + 1}`} />
                </figure>
            ))}

            <div className="carousel-text">
                <h1>Kairós Coffee</h1>
                <p>Tu momento empieza aquí ☕</p>
                <a href="/productos" className="btn btn-light">Ver Productos</a>
            </div>

            <div className="indicators" role="tablist">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={index === currentIndex ? 'active' : ''}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Ir a imagen ${index + 1}`}
                    ></button>
                ))}
            </div>
        </header>
    );
};

export default Carousel;
