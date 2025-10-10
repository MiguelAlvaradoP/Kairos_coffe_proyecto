// src/pages/HomePage.jsx
// Ya no es necesario importar React si solo usamos JSX y hooks básicos
// import React from 'react'; 
import Carousel from '../components/home/Carousel';
import ShippingBar from '../components/home/ShippingBar';
import CategoryGrid from '../components/home/CategoryGrid';
// Eliminadas las importaciones de Footer y Navbar ya que están en App.js
// import Footer from '../components/common/Footer';
// import Navbar from '../components/common/Navbar';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../components/auth/LoginButton';
import LogoutButton from '../components/auth/LogoutButton';
import Profile from '../components/auth/Profile';
// ELIMINADA: La importación del CSS de botones se movió a App.js
// import '../../assets/styles/buttons.css'; 

const HomePage = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <>
            {/* <Navbar /> -- ELIMINADO para evitar duplicación */}

            <main style={{ textAlign: 'center', marginTop: '2rem' }}>
                <h1>Bienvenido a Kairos</h1>

                {/* 🔐 Sección de autenticación */}
                {!isAuthenticated && <LoginButton />}
                {isAuthenticated && (
                    <>
                        <LogoutButton />
                        <Profile />
                    </>
                )}

                <Carousel />
                <ShippingBar />
                <br />
                <CategoryGrid />

                {/* Banner con cita inspiracional */}
                <section className="banner-gif" aria-label="Cita inspiracional de café">
                    <img
                        src="https://org.coloradomesa.edu/~cagardner2/images/ProjectCafeGif2.gif"
                        alt="Banner Animado de Café"
                    />
                    <div className="banner-gif-text">
                        <p>"Una taza de té es una excusa para la introspección."</p>
                        <p>- Lin Yutang</p>
                    </div>
                </section>
            </main>

            {/* <Footer /> -- ELIMINADO para evitar duplicación */}
        </>
    );
};

export default HomePage;