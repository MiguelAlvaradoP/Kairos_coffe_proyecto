import React, { useRef } from "react";
import "../assets/productosPage.css";


const productos = {
  cafeDaroma: [
    { id: 1, nombre: "MEZCLA EXCELSO", descripcion: "Café grano 250gr\n80% ARÁBICA | 20% ROBUSTA", precio: "5.500", imagen: "https://cafedaroma.cl/wp-content/uploads/2022/09/grano-excelso.png" },
    { id: 2, nombre: "MEZCLA FORTE", descripcion: "Café grano 250gr\n50% ARÁBICA | 50% ROBUSTA", precio: "5.500", imagen: "https://cafedaroma.cl/wp-content/uploads/2022/09/grano-forte.png" },
    { id: 3, nombre: "MEZCLA EXCELSO", descripcion: "Café molido 500gr\n80% ARÁBICA | 20% ROBUSTA", precio: "5.500", imagen: "https://cafedaroma.cl/wp-content/uploads/2022/09/cafe_0000_MOLIDO-EXCELSO-500g-1-1.png" },
    { id: 4, nombre: "MEZCLA FORTE", descripcion: "Café molido 500gr\n50% ARÁBICA | 50% ROBUSTA", precio: "5.500", imagen: "https://cafedaroma.cl/wp-content/uploads/2022/09/cafe_0001_MOLIDO-FORTE-500g-1-1.png" },
    { id: 5, nombre: "MEZCLA EXCELSO", descripcion: "Café molido 250gr\n80% ARÁBICA | 20% ROBUSTA", precio: "5.500", imagen: "https://cafedaroma.cl/wp-content/uploads/2022/09/molido-excelso-3.png" },
    { id: 6, nombre: "MEZCLA FORTE", descripcion: "Café molido 250gr\n50% ARÁBICA | 50% ROBUSTA", precio: "5.500", imagen: "https://cafedaroma.cl/wp-content/uploads/2022/09/molido-forte-2.png" },
  ],
  cafeMarley: [
    { id: 7, nombre: "GRANO ENTERO ONE LOVE", descripcion: "Café en grano 227gr", precio: "12.500", imagen: "https://coffeemarleycl.vtexassets.com/arquivos/ids/155589-500-auto?v=638705724453500000&width=500&height=auto&aspect=true" },
    { id: 8, nombre: "GRANO ENTERO CATCH A FIRE", descripcion: "Café en grano 227gr", precio: "11.500", imagen: "https://coffeemarleycl.vtexassets.com/arquivos/ids/155649-500-auto?v=638719657085200000&width=500&height=auto&aspect=true" },
    { id: 9, nombre: "GRANO ENTERO KEEP ON MOVING", descripcion: "Café en grano 227gr", precio: "11.000", imagen: "https://coffeemarleycl.vtexassets.com/arquivos/ids/155734-500-auto?v=638754028994500000&width=500&height=auto&aspect=true" },
    { id: 10, nombre: "GRANO MOLIDO SIMMER DOWN", descripcion: "Café en grano 227gr", precio: "11.500", imagen: "https://coffeemarleycl.vtexassets.com/arquivos/ids/155480-500-auto?v=638705671360170000&width=500&height=auto&aspect=true" },
    { id: 11, nombre: "GRANO MOLIDO BUFFALO SOLDIER", descripcion: "Café en grano 227gr", precio: "11.500", imagen: "https://coffeemarleycl.vtexassets.com/arquivos/ids/155931-800-auto?v=638944027100870000&width=800&height=auto&aspect=true" },
    { id: 12, nombre: "GRANO MOLIDO ONE LOVE", descripcion: "Café en grano 227gr", precio: "11.500", imagen: "https://coffeemarleycl.vtexassets.com/arquivos/ids/155474-500-auto?v=638705669178330000&width=500&height=auto&aspect=true" },
    { id: 13, nombre: "GRANO MOLIDO KEEP ON MOVING", descripcion: "Café en grano 227gr", precio: "11.500", imagen: "https://coffeemarleycl.vtexassets.com/arquivos/ids/155732-500-auto?v=638754023784200000&width=500&height=auto&aspect=true" },
    { id: 14, nombre: "GRANO MOLIDO SABORIZADO CARAMEL NUT CREAM", descripcion: "Café en grano 227gr", precio: "11.500", imagen: "https://coffeemarleycl.vtexassets.com/arquivos/ids/155678-500-auto?v=638723771637770000&width=500&height=auto&aspect=true" },
  ],
  cafeIlly: [
    { id: 15, nombre: "GRANO DE TUESTE", descripcion: "Café en grano 250gr", precio: "8.500", imagen: "https://www.illy.com/dw/image/v2/BBDD_PRD/on/demandware.static/-/Sites-masterCatalog_illycaffe/default/dw790312d6/products/sfra/coffee/Medium2x/7577ME_Medium_2x_01.png?q=75" },
    { id: 16, nombre: "CAFÉ GRANO ARABICA SELECCTION BRASIL", descripcion: "Café en grano 227gr", precio: "11.500", imagen: "https://www.illy.com/dw/image/v2/BBDD_PRD/on/demandware.static/-/Sites-masterCatalog_illycaffe/default/dw17afe6be/products/sfra/coffee/Medium2x/A116ME_Medium_2x_01.png?q=75" },
    { id: 17, nombre: "CAFÉ GRANO TUESTE CLASSICO", descripcion: "Café en grano 227gr", precio: "11.000", imagen: "https://www.illy.com/dw/image/v2/BBDD_PRD/on/demandware.static/-/Sites-masterCatalog_illycaffe/default/dwdbad6504/products/sfra/coffee/Medium2x/I0003885_Medium_2x_01.png?q=75" },
    { id: 18, nombre: "CAFÉ GRANO ARABICA SELECTION COLOMBIA", descripcion: "Café en grano 227gr", precio: "11.500", imagen: "https://www.illy.com/dw/image/v2/BBDD_PRD/on/demandware.static/-/Sites-masterCatalog_illycaffe/default/dwb2a9a2d2/products/sfra/coffee/Medium2x/7141ME_Medium_2x_01.png?q=75" },
    { id: 19, nombre: "CAFÉ ESPRESSO MOLIDO DESCAFEINADO", descripcion: "Café en grano 227gr", precio: "11.500", imagen: "https://www.illy.com/dw/image/v2/BBDD_PRD/on/demandware.static/-/Sites-masterCatalog_illycaffe/default/dwfd8f8b4a/products/sfra/coffee/Medium2x/7985ST_Medium_2x_01.png?q=75" },
    { id: 20, nombre: "CAFÉ MOLIDO ARABICA SELECTION BRASIL MINEIRO", descripcion: "Café en grano 227gr", precio: "11.500", imagen: "https://www.illy.com/dw/image/v2/BBDD_PRD/on/demandware.static/-/Sites-masterCatalog_illycaffe/default/dw6f0f76c5/products/sfra/coffee/Medium2x/A136ME_Medium_2x_01.png?q=75" },
    { id: 21, nombre: "CAFÉ MOLIDO DE TUESTE INTENSO PARA CAFETERA MOKA", descripcion: "Café en grano 227gr", precio: "11.500", imagen: "https://www.illy.com/dw/image/v2/BBDD_PRD/on/demandware.static/-/Sites-masterCatalog_illycaffe/default/dw61cde813/products/sfra/coffee/Medium2x/9975ST_Medium_2x_01.png?q=75" },
    { id: 22, nombre: "CAFÉ ESPRESSO MOLIDO INTENSO", descripcion: "Café en grano 227gr", precio: "11.500", imagen: "https://www.illy.com/dw/image/v2/BBDD_PRD/on/demandware.static/-/Sites-masterCatalog_illycaffe/default/dw7e7ebc75/products/sfra/coffee/Medium2x/8870ST_Medium_2x_01.png?q=75" },
  ],
  cafeLavazza: [
    { id: 23, nombre: "CAFÉ GRANO QUIALITÁ ROSSA", descripcion: "Café en grano 1kg", precio: "20.500", imagen: "https://csa.lavazza.com/content/dam/lavazza-athena/b2c/plp-pag-catalogo/teaser-card-overview/main-asset/coffee/rossa/3518-d-m-rossa-beans.png" },
    { id: 24, nombre: "CAFÉ GRANO CREMA E AROMA", descripcion: "Café en grano 1kg", precio: "19.500", imagen: "https://csa.lavazza.com/content/dam/lavazza-athena/b2c/plp-pag-catalogo/teaser-card-overview/main-asset/coffee/crema_e_aroma/2540-d-m-crema_e_aroma-beans.png" },
    { id: 25, nombre: "CAFÉ DECAFFEINATO", descripcion: "Café en grano 227gr", precio: "11.000", imagen: "https://csa.lavazza.com/content/dam/lavazza-athena/de/b2c/plp-pag-catalogo/teaser-card-overview/main-asset/coffee/decaffeinato/1107-d-m-decaffeinato-tin.png" },
    { id: 26, nombre: "CAFÉ MOLIDO ESPRESSO ITALIANO CLASSICO", descripcion: "Café molido 227gr", precio: "11.500", imagen: "https://csa.lavazza.com/content/dam/lavazza-athena/b2c/plp-pag-catalogo/teaser-card-overview/main-asset/coffee/espresso/1868-d-m-espresso_classico-ground.png" },
    { id: 27, nombre: "CAFÉ MOLIDO CREMA E GUSTO CLASSICO", descripcion: "Café molido 227gr", precio: "11.500", imagen: "https://csa.lavazza.com/content/dam/lavazza-athena/it/b2c/plp-pag-catalogo/teaser-card-overview/main-asset/coffee/crema-e-gusto/3801-d-m-crema_e_gusto_classico-ground-250.png" },
    { id: 28, nombre: "CAFÉ MOLIDO QUALITA ORO", descripcion: "Café molido 227gr", precio: "11.500", imagen: "https://csa.lavazza.com/content/dam/lavazza-athena/b2c/plp-pag-catalogo/teaser-card-overview/main-asset/coffee/oro/1209-d-m-oro_tin-ground-.png" },
    { id: 29, nombre: "CAFÉ MOLIDO QUALITA ROSSA", descripcion: "Café en grano 227gr", precio: "11.500", imagen: "https://csa.lavazza.com/content/dam/lavazza-athena/b2c/plp-pag-catalogo/teaser-card-overview/main-asset/coffee/rossa/3609-d-m-rossa_tin-ground.png" },
  ],
   capsulasMarley: [
    { id: 30, nombre: "CÁPSULAS BUFFALO SOLDIER - COMPATIBLES CON NESPRESSO", descripcion: "Café en grano 227gr", precio: "12.500", imagen: "https://coffeemarleycl.vtexassets.com/arquivos/ids/155508-500-auto?v=638705681396800000&width=500&height=auto&aspect=true" },
    { id: 31, nombre: "CÁPSULAS ON LOVE - COMPATIBLES CON NESPRESSO", descripcion: "Café en grano 227gr", precio: "11.500", imagen: "https://coffeemarleycl.vtexassets.com/arquivos/ids/155511-500-auto?v=638705682137830000&width=500&height=auto&aspect=true" },
    { id: 32, nombre: "CÁPSULAS GET UP STAND UP - COMPATIBLES CON NESPRESSO", descripcion: "Café en grano 227gr", precio: "11.000", imagen: "https://coffeemarleycl.vtexassets.com/arquivos/ids/155514-500-auto?v=638705682995800000&width=500&height=auto&aspect=true" },
    { id: 33, nombre: "CÁPSULAS CATCH A FIRE - COMPATIBLES CON NESPRESSO", descripcion: "Café en grano 227gr", precio: "11.500", imagen: "https://coffeemarleycl.vtexassets.com/arquivos/ids/155518-500-auto?v=638705686691300000&width=500&height=auto&aspect=true" },
    { id: 34, nombre: "CÁPSULAS TALKIN BLUES CAPUCCINO VAINILLA", descripcion: "Café en grano 227gr", precio: "11.500", imagen: "https://coffeemarleycl.vtexassets.com/arquivos/ids/155668-500-auto?v=638723758216800000&width=500&height=auto&aspect=true" },
    { id: 35, nombre: "CÁPSULAS TALKIN BLUES CHAI LATTE", descripcion: "Café en grano 227gr", precio: "11.500", imagen: "https://coffeemarleycl.vtexassets.com/arquivos/ids/155666-500-auto?v=638723757547630000&width=500&height=auto&aspect=true" },
    { id: 36, nombre: "CÁPSULAS TALKIN BLUES CARAMEL LATTE", descripcion: "Café en grano 227gr", precio: "11.500", imagen: "https://coffeemarleycl.vtexassets.com/arquivos/ids/155728-500-auto?v=638741847153570000&width=500&height=auto&aspect=true" },
  ],
  capsulasIlly: [
    { id: 37, nombre: "CÁPSULAS DE CAFÉ DE TUESTE X▪CAPS FORTE", descripcion: "Café molido 10 cápsulas", precio: "12.500", imagen: "https://www.illy.com/dw/image/v2/BBDD_PRD/on/demandware.static/-/Sites-masterCatalog_illycaffe/default/dwcb06a92a/products/sfra/coffee/Medium2x/A179_Medium_2x_01.png?q=75" },
    { id: 38, nombre: "CÁPSULAS DE CAFÉ DESCAFEINADO X▪CAPS", descripcion: "Café molido 30 cápsulas", precio: "18.500", imagen: "https://www.illy.com/dw/image/v2/BBDD_PRD/on/demandware.static/-/Sites-masterCatalog_illycaffe/default/dw8b6a2d1b/products/sfra/coffee/Medium2x/A176_Medium_2x_01.png?q=75" },
    { id: 39, nombre: "CÁPSULAS DE CAFÉ LUNGO X▪CAPS", descripcion: "Café molido 10 cápsulas", precio: "11.000", imagen: "https://www.illy.com/dw/image/v2/BBDD_PRD/on/demandware.static/-/Sites-masterCatalog_illycaffe/default/dw2862988d/products/sfra/coffee/Medium2x/A180_Medium_2x_01.png?q=75" },
    { id: 40, nombre: "CÁPSULAS DE CAFÉ DESCAFEINADO X▪CAPS", descripcion: "Café molido 10 cápsulas", precio: "11.500", imagen: "https://www.illy.com/dw/image/v2/BBDD_PRD/on/demandware.static/-/Sites-masterCatalog_illycaffe/default/dwa3ea6429/products/sfra/coffee/Medium2x/A154_Medium_2x_01.png?q=75" },
    { id: 41, nombre: "CÁPSULAS DE CAFÉ TUESTE INTENSO X▪CAPS", descripcion: "Café molido 10 cápsulas", precio: "11.500", imagen: "https://www.illy.com/dw/image/v2/BBDD_PRD/on/demandware.static/-/Sites-masterCatalog_illycaffe/default/dw497f25de/products/sfra/coffee/Medium2x/A178_Medium_2x_01.png?q=75" },
    { id: 42, nombre: "CÁPSULAS CAFÉ INTENSO IPERESPRESSO", descripcion: "Café molido 10 cápsulas", precio: "11.500", imagen: "https://www.illy.com/dw/image/v2/BBDD_PRD/on/demandware.static/-/Sites-masterCatalog_illycaffe/default/dwca399478/products/sfra/coffee/Medium2x/A188_Medium_2x_01.png?q=75" },
    { id: 43, nombre: "CÁPSULAS DECAFFEINATO IPERESPRESSO", descripcion: "Café molido 10 cápsulas", precio: "11.500", imagen: "https://www.illy.com/dw/image/v2/BBDD_PRD/on/demandware.static/-/Sites-masterCatalog_illycaffe/default/dw744b58bd/products/sfra/coffee/Medium2x/A189_Medium_2x_01.png?q=75" },
  ],
   capsulasCafeConSentido: [
    { id: 44, nombre: "CÁPSULAS DE CAFÉ - DULCE COMPAÑIA", descripcion: "Café molido 10 cápsulas", precio: "8.500", imagen: "https://mercadodelcafe.cl/cdn/shop/files/1815fc57-93fc-4932-a8f7-2abfcb3eaaad.png?v=1746567450&width=460" },
    { id: 45, nombre: "CÁPSULAS DE CAFÉ AROMA FRATERNAL", descripcion: "Café molido 10 cápsulas", precio: "6.500", imagen: "https://mercadodelcafe.cl/cdn/shop/files/1a410b85-f4ae-42ab-8192-6133efd39edb.png?v=1746567438&width=460" },
    { id: 46, nombre: "CÁPSULAS DE CAFÉ APOYO INTENSO", descripcion: "Café molido 10 cápsulas", precio: "11.000", imagen: "https://mercadodelcafe.cl/cdn/shop/files/c994d8a4-c21e-4ef0-8172-713f93859236.png?v=1746567444&width=460" },
    { id: 47, nombre: "CÁPSULAS DE CAFÉ APOYO INTENSO - X60 CÁPSULAS", descripcion: "Café molido 60 cápsulas", precio: "35.500", imagen: "https://mercadodelcafe.cl/cdn/shop/files/Cafe_Apoyo_Intenso_60caps_compatibles_con_nespresso_2048x2048.png?v=1758724882" },
    { id: 48, nombre: "CÁPSULAS DE CAFÉ DULCE COMPAÑIA - X60 CÁPSULAS", descripcion: "Café molido 60 cápsulas", precio: "35.500", imagen: "https://mercadodelcafe.cl/cdn/shop/files/595e19d6-c632-47ef-a673-6fc818331f1e.png?v=1753462651" },
    { id: 49, nombre: "CÁPSULAS CAFÉ CON SENTIDO - X60 CÁPSULAS", descripcion: "Café molido 60 cápsulas", precio: "35.500", imagen: "https://mercadodelcafe.cl/cdn/shop/files/595e19d6-c632-47ef-a673-6fc818331f1e.png?v=1753462651&width=460" },
  ],
   teyerba: [
    { id: 50, nombre: "TÉ NEGROR EN HOJAS CEYLON", descripcion: "te negro 100% - 75gr", precio: "16.500", imagen: "https://shopdilmah.cl/cdn/shop/files/mmp5431-edited-2d4878d4-76bf-4257-aaa9-d206a27f8a82_1300x1300.jpg?v=1754588179" },
    { id: 51, nombre: "", descripcion: "", precio: "6.500", imagen: "" },
    { id: 52, nombre: "", descripcion: "", precio: "11.000", imagen: "" },
    { id: 53, nombre: "", descripcion: "", precio: "35.500", imagen: "" },
    { id: 54, nombre: "", descripcion: "", precio: "35.500", imagen: "" },
    { id: 55, nombre: "", descripcion: "", precio: "35.500", imagen: "" },
  ],
  accesorios: [
    { id: 11, nombre: "TAZA CERÁMICA", descripcion: "350ml", precio: "2.000", imagen: "https://cafedaroma.cl/wp-content/uploads/2022/09/taza.png" },
    { id: 12, nombre: "CAFETERA", descripcion: "Capacidad 1L", precio: "15.000", imagen: "https://cafedaroma.cl/wp-content/uploads/2022/09/cafetera.png" },
  ],
};

function Slider({ items }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="slider-container">
      <button className="arrow left" onClick={scrollLeft}>&lt;</button>
      <div className="slider" ref={sliderRef}>
        {items.map((p) => (
          <div className="producto-card" key={p.id}>
            <img src={p.imagen} alt={p.nombre} />
            <h3>{p.nombre}</h3>
            <p>{p.descripcion}</p>
            <p className="precio">${p.precio}</p>
            <button>Agregar al carrito</button>
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={scrollRight}>&gt;</button>
    </div>
  );
}

export default function ProductosPage() {
  return (
    <div className="productos-page">
      <h1>CAFÉ SELECCIÓN</h1>
      <h2>Café daroma</h2>
      <Slider items={productos.cafeDaroma} />

      <h2>Café Marleys Coffee</h2>
      <Slider items={productos.cafeMarley} />

      <h2>Café Illy Coffee</h2>
      <Slider items={productos.cafeIlly} />

      <h2>Café Lavazza</h2>
      <Slider items={productos.cafeLavazza} />

      <h1>CÁPSULAS SELECCIÓN</h1>
      <h2>cápsulas Marleys Coffee</h2>
      <Slider items={productos.capsulasMarley} />

      <h2>cápsulas Illy coffee</h2>
      <Slider items={productos.capsulasIlly} />

      <h2>cápsulas Café con sentido</h2>
      <Slider items={productos.capsulasCafeConSentido} />
    </div>
  );
}
