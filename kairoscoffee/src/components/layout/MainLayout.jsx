// RUTA: src/components/layout/MainLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

// 1. Importa un módulo de estilos para el layout
import styles from './MainLayout.module.css';

const MainLayout = () => {
    return (
        // 2. Aplica una clase al contenedor principal
        <div className={styles.layoutContainer}>
            <Navbar />
            <main className={styles.mainContent}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;