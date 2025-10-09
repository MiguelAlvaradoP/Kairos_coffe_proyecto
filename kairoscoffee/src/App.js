import React from "react";
import { CarritoProvider } from "./context/CarritoContext";
import ProductosPage from "./pages/ProductosPage";
import "./productos.css";

function App() {
  return (
    <CarritoProvider>
      <ProductosPage />
    </CarritoProvider>
  );
}

export default App;

// unificar con codigo anterior:
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Páginas
import HomePage from './pages/HomePage';

// Páginas temporales
const ProductsPage = () => <h1>Página de Productos (producto.html)</h1>;
const ContactPage = () => <h1>Página de Contacto (contacto.html)</h1>;
const RegistrationPage = () => <h1>Página de Registro (registro.html)</h1>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/registro" element={<RegistrationPage />} />
        {/* Agrega las otras rutas (/checkout, /confirmacion) cuando estén listas */}
      </Routes>
    </Router>
  );
};

export default App;