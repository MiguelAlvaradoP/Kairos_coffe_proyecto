import React from "react";
import CheckoutItem from "./itemCarrito";
import CouponSection from "./cupon";

const OrderSummary = ({
  carrito,
  subtotal,
  iva,
  total,
  descuento,
  setDescuento,
  actualizarCantidad,
  eliminarProducto,
}) => {
  return (
    <div className="card shadow-lg p-4 h-100">
      <h2 style={{ color: "#556B2F" }}>Resumen del Pedido</h2>

      <ul className="list-unstyled mb-3">
        {carrito.map((item, index) => (
          <CheckoutItem
            key={item.id}
            item={item}
            index={index}
            actualizarCantidad={actualizarCantidad}
            eliminarProducto={eliminarProducto}
          />
        ))}
      </ul>

      <CouponSection setDescuento={setDescuento} />

      <div className="pt-3 mt-3 border-top">
        <table className="table table-borderless">
          <tbody>
            <tr>
              <td>Subtotal:</td>
              <td className="text-end">
                {subtotal.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
              </td>
            </tr>
            <tr>
              <td>Descuento ({(descuento * 100).toFixed(0)}%)</td>
              <td className="text-end text-danger">
                -{(subtotal * descuento).toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
              </td>
            </tr>
            <tr>
              <td>IVA (19%)</td>
              <td className="text-end">
                {iva.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
              </td>
            </tr>
            <tr className="fw-bold fs-5">
              <td>TOTAL:</td>
              <td className="text-end">
                {total.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderSummary;
