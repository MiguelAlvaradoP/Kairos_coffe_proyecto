// RUTA: src/pages/HomePage.jsx

import React from "react";

// Importa solo los componentes de contenido específicos de la página de inicio
import Carousel from "../components/home/Carousel";
import ShippingBar from "../components/home/ShippingBar";
import CategoryGrid from "../components/home/CategoryGrid";
// import BannerSection from "../components/home/BannerSection"; // Suponiendo que este componente existe

const HomePage = () => {
  return (
    // Ya no necesitas un div contenedor con estilos. Un Fragment es suficiente.
    <>
      {/* El Navbar y el Footer son añadidos automáticamente por MainLayout.jsx */}
      {/* El LoginModal es gestionado dentro del Navbar. */}
      
      <ShippingBar />
      <Carousel />
      <div className="container">
        {/* Envolvemos los componentes de contenido en un div.container de Bootstrap 
            para mantener los márgenes y el centrado consistentes. */}
        <CategoryGrid />
        {/* <BannerSection /> */}
      </div>
    </>
  );
};

export default HomePage;