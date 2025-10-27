import React, { useState } from "react";

const CouponSection = ({ setDescuento }) => {
  const CUPON_CODE = "KAIROS10";

  const [codigo, setCodigo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipo, setTipo] = useState("");

  const aplicarCupon = () => {
    if (codigo.trim().toUpperCase() === CUPON_CODE) {
      setDescuento(0.1);
      setMensaje(`✅ Cupón ${CUPON_CODE} aplicado (10% de descuento).`);
      setTipo("success");
    } else {
      setDescuento(0);
      setMensaje("❌ Cupón inválido o expirado.");
      setTipo("danger");
    }
  };

  return (
    <div className="border-top pt-3 mt-3">
      <h5 className="fw-bold mb-2" style={{ color: "#2E1F18" }}>
        ¿Tienes un cupón?
      </h5>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Ingresa tu código (Ej: KAIROS10)"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
        <button className="btn btn-success" onClick={aplicarCupon}>
          Aplicar
        </button>
      </div>
      {mensaje && (
        <div className={`alert alert-${tipo}`} role="alert">
          {mensaje}
        </div>
      )}
    </div>
  );
};

export default CouponSection;
