import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/producto" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
