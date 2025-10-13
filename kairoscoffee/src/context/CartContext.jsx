import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        // Cargar carrito desde localStorage al iniciar
        const savedCart = localStorage.getItem('kairosCart');
        if (savedCart) {
        setCartItems(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        // Guardar carrito en localStorage cada vez que cambie
        localStorage.setItem('kairosCart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, quantity = 1) => {
        setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item.id === product.id);
        
        if (existingItem) {
            return prevItems.map(item =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
        } else {
            return [...prevItems, { ...product, quantity }];
        }
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
        }

        setCartItems(prevItems =>
        prevItems.map(item =>
            item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getCartItemsCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const value = {
        cartItems,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartItemsCount,
        toggleCart,
        setIsCartOpen
    };

    return (
        <CartContext.Provider value={value}>
        {children}
        </CartContext.Provider>
    );
};