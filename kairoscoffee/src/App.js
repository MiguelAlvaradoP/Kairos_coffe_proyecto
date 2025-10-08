import React from "react";
import { CarritoProvider } from "./context/CarritoContext";
import ProductosPage from "./pages/ProductosPage";
import "./productos.css";

function App() {
  return (
    <CarritoProvider>
      <ProductosPage />
    </CarritoProvider>
  );
}

export default App;

