// src/components/Navbar.jsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./LogoutButton";
import { Link } from "react-router-dom";

const Navbar = ({
  onLoginClick,
  carrito = [],
  setCarrito = () => {},
  onCarritoClick = () => {},
}) => {
  const { isAuthenticated, user } = useAuth0();

  const eliminarDelCarrito = (index) => {
    const newCarrito = [...carrito];
    newCarrito.splice(index, 1);
    setCarrito(newCarrito);
  };

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">INICIO</Link>
        <Link to="/producto">CAFÉ</Link>
        <Link to="/producto">CÁPSULAS</Link>
        <Link to="/producto">ACCESORIOS</Link>
        <Link to="/contacto">CONTÁCTANOS</Link>
        <Link to="/producto">YERBA MATE</Link>
      </div>

      <div className="navbar-user-actions">
        {isAuthenticated ? (
          <>
            <span>Hola, {user?.name || "Usuario"}</span>
            <button onClick={() => window.location.reload()}>PERFIL</button>
            <LogoutButton />
          </>
        ) : (
          <>
            <Link to="/registro">REGISTRARSE</Link>
            <button onClick={onLoginClick}>INICIAR SESIÓN</button>
          </>
        )}

        {/* Botón carrito que llama al prop del padre */}
        <button onClick={onCarritoClick}>
          🛒 <span>{carrito.length}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
