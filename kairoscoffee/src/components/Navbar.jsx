import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LogoutButton } from './LogoutButton';

const Navbar = ({ onLoginClick }) => {
    const { isAuthenticated, user } = useAuth0();

    return (
        <nav className="navbar" role="navigation">
            <div className="navbar-links">
                <a href="/">INICIO</a>
                <a href="/productos#cafe">CAFÉ</a>
                <a href="/productos#capsulas">CÁPSULAS</a>
                <a href="/productos#accesorios">ACCESORIOS</a>
                <a href="/contacto">CONTÁCTANOS</a>
                <a href="/productos#yerba_y_te">YERBA MATE</a>
            </div>
            <div className="navbar-user-actions">
                {isAuthenticated ? (
                    <>
                        <span className="text-white me-3">Hola, {user?.name || "Usuario"}</span>
                        <button
                            className="btn btn-sm btn-outline-light"
                            onClick={() => window.location.reload()}
                        >
                            <span className="fw-bold">PERFIL</span>
                        </button>
                        <LogoutButton />
                    </>
                ) : (
                    <>
                        <a href="/registro" className="btn btn-sm btn-acento-claro me-2 fw-bold">REGISTRARSE</a>
                        <button className="login-btn" onClick={onLoginClick}>
                            INICIAR SESIÓN
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
