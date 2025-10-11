// RUTA: src/router/AppRouter.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importa los Layouts
import MainLayout from '../components/layout/MainLayout';
import AuthLayout from '../components/layout/AuthLayout';

// Importa las Páginas
import HomePage from '../pages/HomePage';
import ProductoPage from '../pages/ProductoPage';
import ContactoPage from '../pages/ContactoPage';
import RegistroPage from '../pages/RegistroPage';
import CheckoutPage from '../pages/CheckoutPage';
import ConfirmacionPage from '../pages/ConfirmacionPage';
// ...importa otras páginas a medida que las crees

const AppRouter = () => {
    return (
        <Routes>
            {/* --- Rutas Públicas con Layout Principal (Navbar y Footer) --- */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="productos" element={<ProductoPage />} />
                <Route path="contacto" element={<ContactoPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="confirmacion" element={<ConfirmacionPage />} />
                {/* Puedes añadir más rutas aquí, como /nosotros, /faq, etc. */}
            </Route>

            {/* --- Rutas de Autenticación con Layout Específico (centrado, sin Navbar/Footer) --- */}
            <Route element={<AuthLayout />}>
                <Route path="registro" element={<RegistroPage />} />
                {/* Cuando crees la página de Login, la añadirías aquí: */}
                {/* <Route path="login" element={<LoginPage />} /> */}
            </Route>

            {/* --- Rutas para Páginas de Error (opcional, sin layout) --- */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
    );
};

export default AppRouter;