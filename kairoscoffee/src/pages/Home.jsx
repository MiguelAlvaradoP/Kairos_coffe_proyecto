import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import LoginModal from '../components/LoginModal';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import ShippingBar from '../components/ShippingBar';
import CategoriesGrid from '../components/CategoriesGrid';
import BannerGif from '../components/BannerGif';

import '../styles/home.css';
import '../styles/global.css';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [carrito, setCarrito] = useState([]); // Estado del carrito

    return (
        <>
            <Navbar 
                onLoginClick={() => setIsModalOpen(true)} 
                carrito={carrito} 
                setCarrito={setCarrito} 
            />
            <LoginModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
            <Carousel />

            <main>
                <ShippingBar />
                <CategoriesGrid />
                <BannerGif />
            </main>
            <Footer />
        </>
    );
};

export default Home;
