import React from "react";
import { CarritoProvider } from "./context/CarritoContext";
import ProductosPage from "./pages/ProductosPage";
import "./assets/productos.css";


function App() {
  return (
    <CarritoProvider>
      <ProductosPage />
    </CarritoProvider>
  );
}

export default App;

