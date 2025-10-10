// src/components/home/CategoryGrid.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    { title: "CAFÉ EN GRANO", hash: "#cafe", icon: "https://i.imgur.com/kS9lY4n.png" },
    { title: "CAFÉ MOLIDO", hash: "#cafe", icon: "https://i.imgur.com/kS9lY4n.png" },
    { title: "CÁPSULAS", hash: "#capsulas", icon: "https://i.imgur.com/nJ2uU7w.png" },
    { title: "TÉ Y MATE", hash: "#yerba_y_te", icon: "https://i.imgur.com/1GZq8H7.png" },
    { title: "ACCESORIOS", hash: "#accesorios", icon: "https://i.imgur.com/vHqB9yU.png" },
];

const CategoryGrid = () => {
    return (
        <section className="categorias-section container my-5">
            <h2 className="visually-hidden">Explora nuestras categorías de productos</h2>
            <div className="categorias-grid">
                {categories.map((cat, index) => (
                    // Usamos Link y construimos la ruta hacia la página de productos con el hash
                    <Link key={index} to={`/productos${cat.hash}`} className="categoria-card">
                        <img src={cat.icon} alt={`Icono de ${cat.title}`} />
                        <div className="categoria-titulo">{cat.title}</div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default CategoryGrid;