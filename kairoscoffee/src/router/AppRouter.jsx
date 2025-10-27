// src/routes/AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Páginas
import Home from '../pages/Home';
import Register from '../pages/Register';
import Contact from '../pages/Contact';
import ProductDetail from '../pages/ProductosPage';
import Checkout from '../pages/Checkout';
import Confirmation from '../pages/Confirmation';
import NotFound from '../pages/NotFound';

// Componentes globales
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
        {/* Ruta para cualquier página que no exista */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
