// RUTA: src/components/common/Navbar.jsx

import React, { useState } from "react";
// 2. Importamos Link para la navegación de la SPA
import { Link } from "react-router-dom";
// 1. Importamos el módulo de estilos específico
import styles from "./Navbar.module.css";
import LoginModal from "./LoginModal";
// 5. Importamos el logo
import logo from '../../assets/img/Logo_KairosCoffee.png';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        // 3. Usamos la clase camelCase 'navbar'
        <nav className={styles.navbar} role="navigation">
            {/* 5. Logo añadido como enlace a la página de inicio */}
            <Link to="/" className={styles.navbarBrand}>
                <img src={logo} alt="Kairós Coffee Logo" className={styles.logo} />
            </Link>

            {/* Enlaces de navegación */}
            <div className={styles.navbarLinks}>
                <Link to="/">INICIO</Link>
                <Link to="/producto#cafe">CAFÉ</Link>
                <Link to="/producto#capsulas">CÁPSULAS</Link>
                <Link to="/producto#accesorios">ACCESORIOS</Link>
                <Link to="/contacto">CONTÁCTANOS</Link>
                <Link to="/producto#yerba_y_te">YERBA MATE</Link>
            </div>

            {/* Acciones de usuario */}
            <div className={styles.navbarUserActions}>
                <Link
                    to="/registro"
                    // Combinamos clases de Bootstrap con la clase del módulo
                    className={`btn btn-sm fw-bold ${styles.btnAcentoClaro}`}
                >
                    REGISTRARSE
                </Link>

                <button
                    onClick={handleOpenModal}
                    // 4. Usamos una clase en lugar de un ID
                    className={styles.loginBtn}
                    aria-haspopup="dialog"
                    aria-controls="loginModal"
                >
                    <span className="fw-bold">INICIAR SESIÓN</span>
                </button>
            </div>

            {/* Modal de login (renderizado condicional, esto está perfecto) */}
            {isModalOpen && <LoginModal onClose={handleCloseModal} />}
        </nav>
    );
};

export default Navbar;