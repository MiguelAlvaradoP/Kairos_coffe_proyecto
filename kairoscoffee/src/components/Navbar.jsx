import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LogoutButton } from './LogoutButton';
import { Link } from 'react-router-dom';  // Importa Link

const Navbar = ({ onLoginClick }) => {
    const { isAuthenticated, user } = useAuth0();

    return (
        <nav className="navbar" role="navigation">
            <div className="navbar-links">
                <Link to="/">INICIO</Link>
                <Link to="/productos#cafe">CAFÉ</Link>
                <Link to="/productos#capsulas">CÁPSULAS</Link>
                <Link to="/productos#accesorios">ACCESORIOS</Link>
                <Link to="/contacto">CONTÁCTANOS</Link> {/* Aquí el cambio */}
                <Link to="/productos#yerba_y_te">YERBA MATE</Link>
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
                        <Link to="/registro" className="btn btn-sm btn-acento-claro me-2 fw-bold">REGISTRARSE</Link>
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
