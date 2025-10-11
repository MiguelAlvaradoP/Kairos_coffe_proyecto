// RUTA: src/index.js

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 1. Importa los estilos globales de Bootstrap PRIMERO
import "bootstrap/dist/css/bootstrap.min.css";

// 2. Importa tus estilos globales personalizados DESPUÉS.
//    Esto asegura que tus reglas (ej. --color-primary) puedan
//    sobreescribir las de Bootstrap si es necesario.
import "./assets/styles/global.css"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);