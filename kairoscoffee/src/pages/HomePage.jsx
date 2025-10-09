// src/pages/HomePage.jsx
import React from 'react';
import Carousel from '../components/home/Carousel';
import ShippingBar from '../components/home/ShippingBar';
import CategoryGrid from '../components/home/CategoryGrid';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../components/auth/LoginButton';
import LogoutButton from '../components/auth/LogoutButton';
import Profile from '../components/auth/Profile';
import '../styles/buttons.css';

const HomePage = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <>
            <Navbar />

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

            <Footer />
        </>
    );
};

export default HomePage;
