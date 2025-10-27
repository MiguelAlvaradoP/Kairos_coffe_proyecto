// src/components/CarritoPanel.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // <-- import para navegación
import "../../styles/productosPage.css";

const CarritoPanel = ({ carrito = [], isOpen, onClose, eliminarDelCarrito }) => {
  const navigate = useNavigate();

  const total = carrito.reduce((acc, item) => acc + (item.precioUnitario || item.precio || 0), 0);

  const irACheckout = () => {
    onClose(); // cerrar el panel al navegar
    navigate("/checkout"); // redirige a la página de checkout
  };

  return (
    <div className={`carrito-panel ${isOpen ? "active" : ""}`}>
      <button className="cerrar-carrito" onClick={onClose}>
        ✕
      </button>
      <h2>Carrito</h2>

      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <div className="lista-carrito">
            {carrito.map((item, index) => (
              <div key={index} className="item-carrito">
                {item.imagen && <img src={item.imagen} alt={item.nombre} />}
                <div className="info">
                  <span>{item.nombre}</span>
                  <span>${item.precioUnitario || item.precio}</span>
                </div>
                <button
                  className="eliminar-item"
                  onClick={() => eliminarDelCarrito(index)}
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

          <p>
            <strong>Total:</strong> ${total}
          </p>

          {/* Botón para ir al checkout */}
          <button
            className="btn btn-success w-100 mt-2"
            onClick={irACheckout}
          >
            Ir al Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CarritoPanel;
