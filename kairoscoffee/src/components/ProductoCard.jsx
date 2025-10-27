import React from "react";

export default function ProductoCard({ producto, agregarAlCarrito }) {
  return (
    <div className="producto-card">
      <img src={producto.imagen} alt={producto.nombre} />
      <div className="contenido">
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        <span className="precio">{producto.precio}</span>
      </div>
      <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
    </div>
  );
}
