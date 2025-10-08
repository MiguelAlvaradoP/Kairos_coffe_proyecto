import React, { useRef } from "react";

const Carrusel = ({ children }) => {
  const carruselRef = useRef(null);

  const scroll = (dir) => {
    carruselRef.current.scrollBy({
      left: dir === "left" ? -280 : 280,
      behavior: "smooth",
    });
  };

  return (
    <div className="carrusel-container">
      <button className="carrusel-btn prev" onClick={() => scroll("left")}>
        &lt;
      </button>
      <div className="carrusel" ref={carruselRef}>
        {children}
      </div>
      <button className="carrusel-btn next" onClick={() => scroll("right")}>
        &gt;
      </button>
    </div>
  );
};

export default Carrusel;
