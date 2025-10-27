// src/context/CarritoContext.jsx
import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    setCarrito((prev) => [...prev, producto]);
  };

  const eliminarProducto = (index) => {
    setCarrito((prev) => prev.filter((_, i) => i !== index));
  };

  const vaciarCarrito = () => setCarrito([]);

  // 👇 Convertir precio a número para evitar concatenaciones
  const total = carrito.reduce((acc, p) => acc + Number(p.precio || 0), 0);

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarProducto, eliminarProducto, vaciarCarrito, total }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
