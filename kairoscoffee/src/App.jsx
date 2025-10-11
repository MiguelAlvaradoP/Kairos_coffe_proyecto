// RUTA: src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

const App = () => {
    return (
        // Habilita el sistema de rutas para toda la aplicación
        <BrowserRouter>
        {/* Cede el control al router para que decida qué mostrar */}
        <AppRouter />
        </BrowserRouter>
    );
};

export default App;