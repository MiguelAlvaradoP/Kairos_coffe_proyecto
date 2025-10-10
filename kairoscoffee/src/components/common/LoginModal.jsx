// src/components/common/LoginModal.jsx
import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const LoginModal = ({ isModalOpen, closeModal, handleLogin, loginMessage }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // Usamos useEffect para manejar la apertura del modal como un elemento HTML nativo
    useEffect(() => {
        const modalElement = document.getElementById('loginModal');
        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isModalOpen]);


    const handleSubmit = (e) => {
        handleLogin(e, email, password);
    };

    return (
        // Reemplazamos el <div> con <dialog> (compatible con navegadores modernos)
        <dialog className="modal-login" id="loginModal" aria-labelledby="loginTitle">
        <div className="modal-content">
            <button className="close-btn" onClick={closeModal} aria-label="Cerrar modal">&times;</button>
            <h2 id="loginTitle">Iniciar Sesión</h2>
            
            {loginMessage && (
                <div 
                    className={`alert mt-3 ${loginMessage.startsWith('❌') ? 'alert-danger' : 'alert-success'}`} 
                    role="alert" 
                    aria-live="assertive"
                >
                    {loginMessage}
                </div>
            )}

            <form onSubmit={handleSubmit} id="loginForm">
            <input 
                type="email" 
                id="username" 
                placeholder="Correo electrónico" 
                required 
                autoComplete="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password" 
                id="password" 
                placeholder="Contraseña" 
                required 
                autoComplete="current-password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="submit-btn">Entrar</button>
            </form>
            <p className="mt-3 text-center">¿No tienes cuenta? <Link to="/registro" className="link-registro">Regístrate aquí</Link></p>
        </div>
        </dialog>
    );
};

export default LoginModal;