// src/pages/ProductosPage.jsx
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import CarritoPanel from "../components/CarritoPanel";
import { productos } from "../data/Productos";
import "../styles/productosPage.css";
import React, { useRef, useState } from "react";         // línea 5
import { useCart} from "../context/CartContext"; // línea 6
import "../styles/productosPage.css";           // línea 7

export default function ProductosPage() {
  const { cartItems, addToCart, removeFromCart, isCartOpen, toggleCart } = useCart();


  return (
    <>
      <Navbar
        carrito={cartItems}      // viene del contexto
        onCarritoClick={toggleCart} // toggleCart del contexto
      />


      <div className="productos-page">
        {/* SECCIÓN CAFÉ */}
        <h1 id="cafe">CAFÉ SELECCIÓN</h1>
        <section className="seccion-productos">
          <h2>Café Daroma</h2>
          <Slider items={productos.cafeDaroma} agregarAlCarrito={addToCart} />
        </section>

        <section className="seccion-productos">
          <h2>Café Marleys Coffee</h2>
          <Slider items={productos.cafeMarley} agregarAlCarrito={addToCart} />
        </section>

        <section className="seccion-productos">
          <h2>Café Illy Coffee</h2>
          <Slider items={productos.cafeIlly} agregarAlCarrito={addToCart} />

        </section>

        <section className="seccion-productos">
          <h2>Café Lavazza</h2>
          <Slider items={productos.cafeLavazza} agregarAlCarrito={addToCart} />

        </section>

        {/* SECCIÓN CÁPSULAS */}
        <h1 id="capsulas">CÁPSULAS SELECCIÓN</h1>
        <section className="seccion-productos">
          <h2>Cápsulas Marleys Coffee</h2>
          <Slider items={productos.capsulasMarley} agregarAlCarrito={addToCart} />


        </section>

        <section className="seccion-productos">
          <h2>Cápsulas Illy Coffee</h2>
          <Slider items={productos.capsulasIlly} agregarAlCarrito={addToCart} />

        </section>

        <section className="seccion-productos">
          <h2>Cápsulas Café con Sentido</h2>
          <Slider items={productos.capsulasCafeConSentido} agregarAlCarrito={addToCart} />
        </section>

        {/* SECCIÓN TÉ */}
        <h1 id="yerba_y_te">TÉ SELECCIÓN</h1>
        <section className="seccion-productos">
          <h2>Té Selección</h2>
          <Slider items={productos.te} agregarAlCarrito={addToCart} />
        </section>

        {/* SECCIÓN YERBA MATE */}
        <section className="seccion-productos">
          <h2>Yerba Mate Selección</h2>
          <Slider items={productos.mate} agregarAlCarrito={addToCart} />

        </section>

        {/* SECCIÓN ACCESORIOS */}
        <h1>ACCESORIOS SELECCIÓN</h1>
        <section className="seccion-productos">
          <h2>Accesorios Selección</h2>
          <Slider items={productos.accesorios} agregarAlCarrito={addToCart} />

        </section>
      </div>

      {/* Panel lateral (fuera del Navbar) */}
      <CarritoPanel
        carrito={cartItems}  // pasar items del contexto
        isOpen={isCartOpen}  // estado del panel del contexto
        onClose={toggleCart} // método del contexto
        eliminarDelCarrito={removeFromCart} // método del contexto
/>


    </>
  );
}
