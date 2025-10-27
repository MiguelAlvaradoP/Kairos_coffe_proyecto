import React, { useRef } from "react";
import ProductoCard from '../Productos/ProductoCard';


export default function Slider({ items, agregarAlCarrito }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <div className="slider-container">
      <button className="arrow left" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="slider" ref={sliderRef}>
        {items.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} agregarAlCarrito={agregarAlCarrito} />
        ))}
      </div>
      <button className="arrow right" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
}