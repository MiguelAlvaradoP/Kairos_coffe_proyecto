// src/components/CarritoPanel.jsx
import React from "react";
import "../styles/productosPage.css";

const CarritoPanel = ({ carrito = [], isOpen, onClose, eliminarDelCarrito }) => {
  const total = carrito.reduce((acc, item) => acc + (item.precio || 0), 0);

  return (
    <div className={`carrito-panel ${isOpen ? "active" : ""}`}>
      <button className="cerrar-carrito" onClick={onClose}>
        ✕
      </button>
      <h2>Carrito</h2>

      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div className="lista-carrito">
          {carrito.map((item, index) => (
            <div key={index} className="item-carrito">
              {item.imagen && <img src={item.imagen} alt={item.nombre} />}
              <div className="info">
                <span>{item.nombre}</span>
                <span>${item.precio}</span>
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
      )}
      <p>
        <strong>Total:</strong> ${total}
      </p>
    </div>
  );
};

export default CarritoPanel;
