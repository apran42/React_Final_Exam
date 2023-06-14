import React, { createContext, useState } from 'react';


export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (newItem) => {
        const existingItemIndex = cart.findIndex(
            (item) => item.id === newItem.id
        );

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].amount += newItem.amount;
            setCart(updatedCart);
        } else {
            setCart([...cart, newItem]);
        }
    };

    const removeFromCart = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const updateQuantity = (itemId, amount) => {
        const updatedCart = cart.map((item) => {
            if (item.id === itemId) {
                const newAmount = item.amount + amount;
                if (newAmount < 0) {
                    return {
                        ...item,
                        amount: 0,
                    };
                }
                return {
                    ...item,
                    amount: newAmount,
                };
            }
            return item;
        });
        setCart(updatedCart);
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
