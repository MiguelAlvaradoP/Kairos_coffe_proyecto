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

    return (
        <>
            <Navbar onLoginClick={() => setIsModalOpen(true)} />
            <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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
