import React from "react";
import Slider from "./Slider";

export default function SeccionProductos({ titulo, productos, agregarAlCarrito }) {
  return (
    <section className="seccion-productos">
      <div className="carrusel">
        <h2>{titulo}</h2>
        <Slider items={productos} agregarAlCarrito={agregarAlCarrito} />
      </div>
    </section>
  );
}
