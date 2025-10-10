// src/hooks/useAuth.js
import { useState } from 'react';

const useAuth = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginMessage, setLoginMessage] = useState('');

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setLoginMessage('');
    };

    const handleLogin = (e, email, password) => {
        e.preventDefault();
        setLoginMessage('');

        if (email === 'test@kairos.cl' && password === '12345') {
        setIsLoggedIn(true);
        setLoginMessage('Inicio de sesión exitoso. Redirigiendo...');
        setTimeout(() => {
            closeModal();
            // Lógica de redirección o mensaje de bienvenida
        }, 1500);
        } else {
        setLoginMessage('❌ Credenciales inválidas. Intenta nuevamente.');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        // Limpiar tokens, etc.
    };

    return { 
        isModalOpen, 
        isLoggedIn, 
        loginMessage, 
        openModal, 
        closeModal, 
        handleLogin,
        handleLogout
    };
};

export default useAuth;