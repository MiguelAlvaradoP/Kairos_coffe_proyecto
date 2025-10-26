import React, { createContext, useState, useContext } from 'react';

// 1. Crear el Contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto
export const useCart = () => useContext(CartContext);

// 2. Crear el Proveedor (Provider)
export const CartProvider = ({ children }) => {
    // Inicializar el carrito desde localStorage si existe, o como array vacío
    const [cartItems, setCartItems] = useState(() => {
        try {
            const localData = localStorage.getItem('kairos_cart');
            return localData ? JSON.parse(localData) : [];
        } catch (error) {
            console.error("Error al cargar el carrito de localStorage:", error);
            return [];
        }
    });
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Persistir el carrito en localStorage cada vez que cambia
    React.useEffect(() => {
        localStorage.setItem('kairos_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Lógica para añadir un producto
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Asegúrate de que el producto tiene la información necesaria (name, price, image)
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    // Lógica para eliminar un producto
    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };

    // Lógica para calcular el total
    const cartTotal = cartItems.reduce(
        (acc, item) => acc + (item.price * item.quantity), 0
    );

    // Lógica para alternar el panel
    const toggleCart = () => {
        setIsCartOpen(prev => !prev);
    };

    // 3. Valor del Contexto
    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        cartTotal,
        cartCount: cartItems.reduce((acc, item) => acc + item.quantity, 0),
        isCartOpen,
        toggleCart,
        clearCart: () => setCartItems([])
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};