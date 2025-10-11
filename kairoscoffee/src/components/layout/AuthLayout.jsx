// RUTA: src/components/layout/AuthLayout.jsx

import React from 'react';
import { Outlet, Link } from 'react-router-dom';

// Importa el módulo de estilos para este layout
import styles from './AuthLayout.module.css';
// Importa el logo para enlazar a la página de inicio
import logo from '../../assets/img/Logo_KairosCoffee.png';

const AuthLayout = () => {
    return (
        <div className={styles.authContainer}>
            <header className={styles.authHeader}>
                {/* El logo permite al usuario volver fácilmente a la página principal */}
                <Link to="/">
                    <img src={logo} alt="Kairós Coffee - Volver al inicio" className={styles.logo} />
                </Link>
            </header>
            
            <main className={styles.authContent}>
                {/* Aquí se renderizará el formulario de RegistroPage, LoginPage, etc. */}
                <Outlet />
            </main>
        </div>
    );
};

export default AuthLayout;