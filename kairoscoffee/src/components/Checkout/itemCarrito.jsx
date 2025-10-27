// src/components/Checkout/CheckoutItem.jsx
import React from "react";
import { useCart } from "../../context/CartContext";

const CheckoutItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { id, nombre, precio, quantity, imagen } = item;

  const handleDecrease = () => {
    if (quantity > 1) updateQuantity(id, quantity - 1);
  };

  const handleIncrease = () => {
    updateQuantity(id, quantity + 1);
  };

  const handleRemove = () => {
    removeFromCart(id);
  };

  return (
    <li className="d-flex align-items-center mb-3 p-2 border-bottom">
      <img
        src={imagen}
        alt={nombre}
        className="rounded me-3"
        style={{ width: 50, height: 50, objectFit: "cover" }}
      />
      <div className="flex-grow-1">
        <span className="fw-bold d-block">{nombre}</span>
        <span className="text-muted small">
          {precio.toLocaleString("es-CL", { style: "currency", currency: "CLP" })} c/u
        </span>
      </div>

      <div className="d-flex align-items-center me-3">
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={handleDecrease}
          disabled={quantity <= 1}
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          readOnly
          className="form-control mx-1 text-center"
          style={{ width: 50 }}
        />
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>

      <span className="fw-bold me-2">
        {(precio * quantity).toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
      </span>

      <button
        className="btn btn-sm btn-outline-danger"
        onClick={handleRemove}
      >
        ×
      </button>
    </li>
  );
};

export default CheckoutItem;
