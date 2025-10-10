import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Contextos 
import { CarritoProvider } from "./context/CarritoContext";
import ProductosPage from "./pages/ProductosPage";
import "./assets/productos.css";


// Importación de estilos generales (resuelve el error de ruta al estar bajo src/)
import './assets/styles/buttons.css'; 

// Páginas Importadas
import HomePage from './pages/HomePage';
// IMPORTA AQUÍ LA PÁGINA REAL DE PRODUCTOS CUANDO ESTÉ LISTA:
// import ProductosPage from "./pages/ProductosPage"; 

// Páginas temporales o de prueba (si ya tienes los componentes reales, elimínalos)
const ProductosPage = () => <h1>Página de Productos (producto.html)</h1>;
const ContactPage = () => <h1>Página de Contacto (contacto.html)</h1>;
const RegistrationPage = () => <h1>Página de Registro (registro.html)</h1>;

// Componente principal unificado (solo una definición de App)
const App = () => {
  return (
    // Envuelve toda la aplicación con el proveedor de contexto (CarritoProvider)
    <CarritoProvider>
      <Router>
        <Routes>
          {/* Rutas de tu aplicación */}
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/registro" element={<RegistrationPage />} />
          {/* Agrega las otras rutas (/checkout, /confirmacion) cuando estén listas */}
        </Routes>
      </Router>
    </CarritoProvider>
  );
};

export default App;
