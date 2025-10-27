// src/pages/ProductosPage.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import CarritoPanel from "../components/CarritoPanel";
import { productos } from "../data/Productos";
import "../styles/productosPage.css";

export default function ProductosPage() {
  const [carrito, setCarrito] = useState([]);
  const [isCarritoOpen, setIsCarritoOpen] = useState(false);

  const agregarAlCarrito = (producto) => setCarrito([...carrito, producto]);
  const eliminarDelCarrito = (index) =>
    setCarrito(carrito.filter((_, i) => i !== index));

  return (
    <>
      <Navbar
        carrito={carrito}
        onCarritoClick={() => setIsCarritoOpen(true)}
      />

      <div className="productos-page">
        {/* SECCIÓN CAFÉ */}
        <h1 id="cafe">CAFÉ SELECCIÓN</h1>
        <section className="seccion-productos">
          <h2>Café Daroma</h2>
          <Slider items={productos.cafeDaroma} agregarAlCarrito={agregarAlCarrito} />
        </section>

        <section className="seccion-productos">
          <h2>Café Marleys Coffee</h2>
          <Slider items={productos.cafeMarley} agregarAlCarrito={agregarAlCarrito} />
        </section>

        <section className="seccion-productos">
          <h2>Café Illy Coffee</h2>
          <Slider items={productos.cafeIlly} agregarAlCarrito={agregarAlCarrito} />
        </section>

        <section className="seccion-productos">
          <h2>Café Lavazza</h2>
          <Slider items={productos.cafeLavazza} agregarAlCarrito={agregarAlCarrito} />
        </section>

        {/* SECCIÓN CÁPSULAS */}
        <h1 id="capsulas">CÁPSULAS SELECCIÓN</h1>
        <section className="seccion-productos">
          <h2>Cápsulas Marleys Coffee</h2>
          <Slider items={productos.capsulasMarley} agregarAlCarrito={agregarAlCarrito} />
        </section>

        <section className="seccion-productos">
          <h2>Cápsulas Illy Coffee</h2>
          <Slider items={productos.capsulasIlly} agregarAlCarrito={agregarAlCarrito} />
        </section>

        <section className="seccion-productos">
          <h2>Cápsulas Café con Sentido</h2>
          <Slider items={productos.capsulasCafeConSentido} agregarAlCarrito={agregarAlCarrito} />
        </section>

        {/* SECCIÓN TÉ */}
        <h1 id="yerba_y_te">TÉ SELECCIÓN</h1>
        <section className="seccion-productos">
          <h2>Té Selección</h2>
          <Slider items={productos.te} agregarAlCarrito={agregarAlCarrito} />
        </section>

        {/* SECCIÓN YERBA MATE */}
        <section className="seccion-productos">
          <h2>Yerba Mate Selección</h2>
          <Slider items={productos.mate} agregarAlCarrito={agregarAlCarrito} />
        </section>

        {/* SECCIÓN ACCESORIOS */}
        <h1>ACCESORIOS SELECCIÓN</h1>
        <section className="seccion-productos">
          <h2>Accesorios Selección</h2>
          <Slider items={productos.accesorios} agregarAlCarrito={agregarAlCarrito} />
        </section>
      </div>

      {/* Panel lateral (fuera del Navbar) */}
      <CarritoPanel
        carrito={carrito}
        isOpen={isCarritoOpen}
        onClose={() => setIsCarritoOpen(false)}
        eliminarDelCarrito={eliminarDelCarrito}
      />
    </>
  );
}


