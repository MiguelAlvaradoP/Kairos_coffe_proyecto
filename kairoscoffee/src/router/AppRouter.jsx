<<<<<<< HEAD
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
=======
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Contact from '../pages/Contact';
import ProductDetail from '../pages/ProductDetail';
import Checkout from '../pages/Checkout';
import Confirmation from '../pages/Confirmation';
import NotFound from '../pages/NotFound';
>>>>>>> e7135791ee97cad993a836b2dccf139b446310dd
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AppRouter = () => {
<<<<<<< HEAD
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
=======
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
>>>>>>> e7135791ee97cad993a836b2dccf139b446310dd
