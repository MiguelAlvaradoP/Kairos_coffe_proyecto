import React, { useState } from "react";
import { useCarrito } from "../context/CarritoContext";

const Carrito = () => {
  const { carrito, eliminarProducto, total } = useCarrito();
  const [activo, setActivo] = useState(false);

  return (
    <>
      <div className="carrito-container" onClick={() => setActivo(true)}>
        <span id="contador-carrito">{carrito.length}</span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3394/3394009.png"
          alt="Carrito de compras"
          className="icono-carrito"
        />
      </div>

      <aside className={`carrito-panel ${activo ? "active" : ""}`}>
        <div className="carrito-header">
          <span>Total: ${total.toLocaleString("es-CL")}</span>
          <button id="cerrar-carrito" onClick={() => setActivo(false)}>
            ×
          </button>
        </div>

        <div id="lista-carrito">
          {carrito.length === 0 ? (
            <p style={{ padding: "20px" }}>El carrito está vacío.</p>
          ) : (
            carrito.map((item, i) => (
              <div className="item-carrito" key={i}>
                <img src={item.imagen} alt={item.nombre} />
                <span>{item.nombre}</span>
                <span>${item.precio.toLocaleString("es-CL")}</span>
                <button
                  className="eliminar-item"
                  onClick={() => eliminarProducto(i)}
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        <div className="carrito-footer">
          <button id="btn-pagar" onClick={() => alert("Función pagar pronto")}>
            Pagar
          </button>
        </div>
      </aside>
    </>
  );
};

export default Carrito;
