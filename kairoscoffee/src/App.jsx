// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Páginas
import Home from './pages/Home';
import Register from './pages/Register';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductosPage';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/producto" element={<ProductDetail />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
