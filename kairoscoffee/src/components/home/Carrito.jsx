import React, { useState, useEffect } from "react";

export default function Carrito({ carrito, setCarrito }) {
  const [isOpen, setIsOpen] = useState(false);

  // Calcular total
  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  const eliminarItem = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const handlePagar = () => {
    if (carrito.length > 0) {
      localStorage.setItem("carrito", JSON.stringify(carrito));
      window.location.href = "/checkout"; // Cambiar según tu ruta
    } else {
      alert("El carrito está vacío. Agrega productos antes de pagar.");
    }
  };

  // Persistir carrito en localStorage
  useEffect(() => {
    const stored = localStorage.getItem("carrito");
    if (stored) setCarrito(JSON.parse(stored));
  }, []);

  return (
    <div className="carrito-container">
      <button onClick={() => setIsOpen(true)}>
        🛒 {carrito.length}
      </button>

      {isOpen && (
        <div id="carrito-panel" className="carrito-panel active">
          <button id="cerrar-carrito" onClick={() => setIsOpen(false)}>
            ×
          </button>
          <h2>Carrito</h2>
          <div id="lista-carrito">
            {carrito.map((item) => (
              <div className="item-carrito" key={item.id}>
                <img src={item.imagen} alt={item.nombre} />
                <span>{item.nombre}</span>
                <span>${item.precio.toLocaleString("es-CL")}</span>
                <button onClick={() => eliminarItem(item.id)}>×</button>
              </div>
            ))}
          </div>
          <div id="total-carrito">Total: ${total.toLocaleString("es-CL")}</div>
          <button id="btn-pagar" onClick={handlePagar}>
            Pagar
          </button>
        </div>
      )}
    </div>
  );
}
