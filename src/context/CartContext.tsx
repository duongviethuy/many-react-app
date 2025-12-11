"use client";

import { createContext, ReactNode, useContext, useMemo } from "react";

import Product from "@/app/types/ProductModels";
import { useState } from "react";

interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    onAddToCart: (product: Product) => void;
    onUpdateQuantity: (id: number, type: "increment" | "decrement") => void;
    totalPrice: number;
}

const calculateTotalPrice = (cartItems: CartItem[]): number => {
    return cartItems.reduce((prevs, item) => {
        return prevs + item.price * item.quantity;
    }, 0);
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    // STATE để lưu trữ các sản phẩm trong giỏ hàng
    const [cart, setCart] = useState<CartItem[]>([]);

    //UseMemo tính toán lại tổng tiền khi cart thay đồi
    const totalPrice: number = useMemo(() => calculateTotalPrice(cart), [cart]);

    //LOGIC ĐỂ THÊM SẢN PHẨM
    const handleAddToCart = (product: Product) => {
        setCart((prevs) => {
            let updatedCart;
            const existingCartItem = prevs.find(
                (item) => item.id === product.id
            );
            if (existingCartItem) {
                updatedCart = prevs.map((currentItem) =>
                    currentItem.id === product.id
                        ? { ...currentItem, quantity: currentItem.quantity + 1 }
                        : currentItem
                );
            } else {
                const newItem: CartItem = { ...product, quantity: 1 };
                updatedCart = [...prevs, newItem];
            }
            return updatedCart;
        });
    };

    const handleUpdateQuantity = (
        id: number,
        type: "increment" | "decrement"
    ) => {
        setCart((prevs) => {
            const updatedCart = prevs.map((item) => {
                if (item.id === id) {
                    const newQuantity =
                        type === "increment"
                            ? item.quantity + 1
                            : item.quantity - 1;
                    return { ...item, quantity: newQuantity };
                } else return item;
            });
            return updatedCart.filter((item) => item.quantity > 0);
        });
    };

    const contextValue: CartContextType = {
        cart: cart,
        onAddToCart: handleAddToCart,
        onUpdateQuantity: handleUpdateQuantity,
        totalPrice,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined)
        throw new Error("useCart must be used within a CartProvider");
    return context;
};
