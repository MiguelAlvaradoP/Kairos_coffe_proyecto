import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Contact from '../pages/Contact';
import ProductDetail from '../pages/ProductDetail';
import Checkout from '../pages/Checkout';
import Confirmation from '../pages/Confirmation';
import NotFound from '../pages/NotFound';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AppRouter = () => {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        </>
    );
};

export default AppRouter;