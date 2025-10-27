import React from 'react';
import '../../styles/home.css';

const categories = [
    {
        href: "/producto#cafe",
        img: "https://png.pngtree.com/png-vector/20230501/ourmid/pngtree-coffee-bean-material-png-image_7078658.png",
        alt: "Café en grano",
        title: "CAFÉ EN GRANO",
    },
    {
        href: "/producto#cafe",
        img: "https://png.pngtree.com/png-vector/20240913/ourmid/pngtree-ground-coffee-png-image_12926372.png",
        alt: "Café molido",
        title: "CAFÉ MOLIDO",
    },
    {
        href: "/producto#capsulas",
        img: "https://png.pngtree.com/png-vector/20231113/ourmid/pngtree-coffee-capsules-pleasure-png-image_10448876.png",
        alt: "Cápsulas de café",
        title: "CÁPSULAS",
    },
    {
        href: "/producto#yerba_y_te",
        img: "https://espressionante.com/wp-contenido/uploads/2024/04/220512_ipso_800x800_forte_01-1.png",
        alt: "Té o mate",
        title: "TÉ Y MATE",
    },
    {
        href: "/producto#accesorios",
        img: "https://png.pngtree.com/png-clipart/20231017/original/pngtree-moka-pot-italian-coffee-maker-file-png-png-image_13326139.png",
        alt: "Accesorios para café",
        title: "ACCESORIOS",
    }
    ];

    export default function CategoriesGrid() {
    return (
        <section className="categorias-section container my-5">
        <h2 className="visually-hidden">Explora nuestras categorías</h2>
        <div className="categorias-grid">
            {categories.map(({ href, img, alt, title }, idx) => (
            <a href={href} key={idx} className="categoria-card">
                <img src={img} alt={alt} />
                <div className="categoria-titulo">{title}</div>
            </a>
            ))}
        </div>
        </section>
    );
}
