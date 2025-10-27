// src/components/Checkout/ShippingPaymentForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext"; // Importamos el contexto

const ShippingPaymentForm = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart(); // Usamos cartItems y clearCart del contexto

  const [formData, setFormData] = useState({
    nombre: "",
    direccion: "",
    ciudad: "",
    codigoPostal: "",
    metodoPago: "tarjeta",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    // Vaciar carrito del contexto
    clearCart();

    // Redirigir a confirmación
    navigate("/confirmation");
  };

  return (
    <form onSubmit={handleSubmit} className="row g-3">
      <div className="col-12">
        <label className="form-label">Nombre Completo</label>
        <input
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="col-12">
        <label className="form-label">Dirección</label>
        <input
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">Ciudad</label>
        <input
          name="ciudad"
          value={formData.ciudad}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">Código Postal</label>
        <input
          name="codigoPostal"
          value={formData.codigoPostal}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <fieldset className="mt-4 mb-3">
        <legend className="h3" style={{ color: "#2E1F18" }}>
          Método de Pago
        </legend>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="metodoPago"
            value="tarjeta"
            checked={formData.metodoPago === "tarjeta"}
            onChange={handleChange}
          />
          <label className="form-check-label">💳 Tarjeta de crédito / débito</label>
        </div>
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="radio"
            name="metodoPago"
            value="transferencia"
            checked={formData.metodoPago === "transferencia"}
            onChange={handleChange}
          />
          <label className="form-check-label">🏦 Transferencia bancaria</label>
        </div>
      </fieldset>

      <div className="d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate("/productos")}
        >
          Volver al Carrito
        </button>
        <button type="submit" className="btn btn-success">
          Confirmar Compra
        </button>
      </div>
    </form>
  );
};

export default ShippingPaymentForm;
