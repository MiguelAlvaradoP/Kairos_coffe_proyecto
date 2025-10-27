import React, { useState, useEffect } from "react";
import ShippingPaymentForm from "../components/Checkout/shippingPaymentForm";
import OrderSummary from "../components/Checkout/ResumenPedido";
import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [descuento, setDescuento] = useState(0);
  const [total, setTotal] = useState(0);
  const [iva, setIva] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  const IVA_RATE = 0.19;

  useEffect(() => {
    calcularTotales();
  }, [cartItems, descuento]); // ✅ dependencias actualizadas

  const calcularTotales = () => {
    const subtotalNeto = cartItems.reduce(
      (acc, item) => acc + item.precioUnitario * item.cantidad,
      0
    );

    const descuentoMonto = subtotalNeto * descuento;
    const subtotalConDescuento = subtotalNeto - descuentoMonto;
    const ivaCalc = subtotalConDescuento * IVA_RATE;
    const totalFinal = subtotalConDescuento + ivaCalc;

    setSubtotal(subtotalNeto);
    setIva(ivaCalc);
    setTotal(totalFinal);
  };

  const actualizarCantidad = (index, nuevaCantidad) => {
    const itemId = cartItems[index].id;
    updateQuantity(itemId, nuevaCantidad);
  };

  const eliminarProducto = (index) => {
    const itemId = cartItems[index].id;
    removeFromCart(itemId);
  };

  return (
    <main className="container py-5">
      <h1 className="text-center mb-4" style={{ color: "#2E1F18" }}>
        Finalizar Compra
      </h1>

      <div className="row g-4">
        <section className="col-lg-7">
          <div className="card shadow-lg p-4 h-100">
            <h2 style={{ color: "#556B2F" }}>Información de Envío y Pago</h2>
            <ShippingPaymentForm carrito={cartItems} /> {/* ✅ aquí también */}
          </div>
        </section>

        <aside className="col-lg-5">
          <OrderSummary
            carrito={cartItems}
            subtotal={subtotal}
            iva={iva}
            total={total}
            descuento={descuento}
            setDescuento={setDescuento}
            actualizarCantidad={actualizarCantidad}
            eliminarProducto={eliminarProducto}
          />
        </aside>
      </div>
    </main>
  );
};

export default CheckoutPage;
