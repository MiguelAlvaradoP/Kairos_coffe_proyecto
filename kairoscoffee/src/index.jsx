// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/home.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // <-- Usamos CartProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
