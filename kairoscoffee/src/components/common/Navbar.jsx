// src/components/common/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    // Obtenemos las funciones y estados de autenticación
    const { 
        isModalOpen, 
        isLoggedIn, 
        loginMessage, 
        openModal, 
        closeModal, 
        handleLogin, 
        handleLogout 
    } = useAuth();

    return (
        <>
            <nav className="navbar" role="navigation">
                <div className="navbar-links">
                    {/* Usamos el componente Link de React Router para navegación interna */}
                    <Link to="/">INICIO</Link>
                    <Link to="/productos#cafe">CAFÉ</Link>
                    <Link to="/productos#capsulas">CÁPSULAS</Link>
                    <Link to="/productos#accesorios">ACCESORIOS</Link>
                    <Link to="/contacto">CONTÁCTANOS</Link>
                    <Link to="/productos#yerba_y_te">YERBA MATE</Link>
                </div>
                
                <div className="navbar-user-actions">
                    {isLoggedIn ? (
                        <>
                            <span className="text-white me-3">¡Hola, Usuario!</span>
                            <button onClick={handleLogout} className="btn btn-sm btn-outline-light fw-bold">
                                CERRAR SESIÓN
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/registro" className="btn btn-sm btn-acento-claro me-2 fw-bold">
                                REGISTRARSE
                            </Link>
                            <button 
                                id="loginBtn" 
                                className="btn btn-sm btn-outline-light"
                                onClick={openModal}
                                aria-haspopup="dialog" 
                                aria-controls="loginModal"
                            >
                                <span className="fw-bold">INICIAR SESIÓN</span>
                            </button>
                        </>
                    )}
                </div>
            </nav>
            {/* El modal se renderiza condicionalmente o siempre si se usa <dialog> */}
            <LoginModal 
                isModalOpen={isModalOpen} 
                closeModal={closeModal}
                handleLogin={handleLogin}
                loginMessage={loginMessage}
            />
        </>
    );
};

export default Navbar;