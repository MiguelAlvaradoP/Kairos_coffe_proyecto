import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import LoginModal from '../components/common/LoginModal';
import Carousel from '../components/home/Carousel';
import Footer from '../components/common/Footer';
import ShippingBar from '../components/common/ShippingBar';
import CategoriesGrid from '../components/home/CategoriesGrid';
import BannerGif from '../components/home/BannerGif';

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
