import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipo, setTipo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setTipo("error");
      setMensaje("Por favor, ingresa un correo válido.");
    } else {
      setTipo("success");
      setMensaje("¡Suscripción exitosa! Recibirás nuestras novedades pronto.");
      setEmail("");
      setTimeout(() => setMensaje(""), 3000);
    }
  };

  return (
    <footer className="main-footer py-4 mt-5 bg-custom-dark text-white">
      <div className="container text-center">
        <h5 className="fw-bold">Newsletter</h5>
        <form onSubmit={handleSubmit} className="d-flex newsletter-form justify-content-center">
          <input
            type="email"
            className="form-control me-2"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            →
          </button>
        </form>
        {mensaje && (
          <div
            className={`alert mt-2 ${
              tipo === "success" ? "alert-success" : "alert-danger"
            }`}
          >
            {mensaje}
          </div>
        )}
        <p className="mt-3">&copy; 2025 Kairós Coffee. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
