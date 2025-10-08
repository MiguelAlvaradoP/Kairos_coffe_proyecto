import React from "react";
import { useCarrito } from "../context/CarritoContext";

const Producto = ({ id, nombre, descripcion, mezcla, precio, imagen }) => {
  const { agregarProducto } = useCarrito();

  return (
    <article className="producto">
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p>{mezcla}</p>
      <h3>${precio.toLocaleString("es-CL")}</h3>
      <button
        className="btn-carrito"
        onClick={() => agregarProducto({ id, nombre, precio, imagen })}
      >
        Agregar al carrito
      </button>
    </article>
  );
};

export default Producto;
