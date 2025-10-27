import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CarritoPanel from "../../src/components/CarritoPanel";

describe("CarritoPanel", () => {
  const sampleCart = [
    { nombre: "Café", precio: 2000, imagen: "cafe.png" },
    { nombre: "Té", precio: 1500, imagen: "te.png" }
  ];

  it("muestra mensaje si el carrito está vacío", () => {
    render(<CarritoPanel carrito={[]} isOpen={true} onClose={() => {}} eliminarDelCarrito={() => {}} />);
    expect(screen.getByText("El carrito está vacío")).toBeInTheDocument();
    expect(screen.getByText("Total: $0")).toBeInTheDocument();
  });

  it("muestra correctamente los productos y el total", () => {
    render(<CarritoPanel carrito={sampleCart} isOpen={true} onClose={() => {}} eliminarDelCarrito={() => {}} />);
    expect(screen.getByText("Café")).toBeInTheDocument();
    expect(screen.getByText("Té")).toBeInTheDocument();
    expect(screen.getByText("Total: $3500")).toBeInTheDocument();
  });

  it("llama a onClose al hacer clic en ✕", () => {
    const onCloseMock = jasmine.createSpy('onClose');
    render(<CarritoPanel carrito={sampleCart} isOpen={true} onClose={onCloseMock} eliminarDelCarrito={() => {}} />);
    fireEvent.click(screen.getByText("✕"));
    expect(onCloseMock).toHaveBeenCalled();
  });

  it("llama a eliminarDelCarrito con el índice correcto", () => {
    const deleteMock = jasmine.createSpy('eliminarDelCarrito');
    render(<CarritoPanel carrito={sampleCart} isOpen={true} onClose={() => {}} eliminarDelCarrito={deleteMock} />);
    const removeButtons = screen.getAllByText("🗑️");
    fireEvent.click(removeButtons[1]);
    expect(deleteMock).toHaveBeenCalledWith(1);
  });
});
