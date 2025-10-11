// RUTA: src/components/home/CategoryGrid.jsx

import React from 'react';
import { Link } from 'react-router-dom';
// 1. Importa el módulo de estilos específico
import styles from './CategoryGrid.module.css';

// Importa las imágenes de las categorías
import cafeGranoIcon from '../../assets/img/cafe-grano-icon.png';
import cafeMolidoIcon from '../../assets/img/cafe-molido-icon.png';
import capsulasIcon from '../../assets/img/capsulas-icon.png';
import teMateIcon from '../../assets/img/te-mate-icon.png';
import accesoriosIcon from '../../assets/img/accesorios-icon.png';

const categories = [
    { name: 'CAFÉ EN GRANO', link: '/productos#cafe', img: cafeGranoIcon, alt: 'Icono de café en grano' },
    { name: 'CAFÉ MOLIDO', link: '/productos#cafe', img: cafeMolidoIcon, alt: 'Icono de café molido' },
    { name: 'CÁPSULAS', link: '/productos#capsulas', img: capsulasIcon, alt: 'Icono de cápsulas de café' },
    { name: 'TÉ Y MATE', link: '/productos#yerba_y_te', img: teMateIcon, alt: 'Icono de té o mate' },
    { name: 'ACCESORIOS', link: '/productos#accesorios', img: accesoriosIcon, alt: 'Icono de accesorios para café' },
];

const CategoryGrid = () => {
    return (
        // 2. Combina la clase del módulo con las de Bootstrap
        <section className={`${styles.categoriasSection} container my-5`}>
            {/* Esta es una excelente práctica de accesibilidad */}
            <h2 className="visually-hidden">Explora nuestras categorías de productos</h2>
            
            {/* 3. Aplica las clases del módulo con camelCase */}
            <div className={styles.categoriasGrid}>
                {categories.map((cat, index) => (
                    <Link to={cat.link} className={styles.categoriaCard} key={index}>
                        <img src={cat.img} alt={cat.alt} />
                        <div className={styles.categoriaTitulo}>{cat.name}</div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default CategoryGrid;