"use client";

import Product from "@/app/types/productModel";
import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";

interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    totalProducts: number;
    totalPrices: number;
    handleAddToCart: (product: Product) => void;
    handleUpdateQuantity: (id: string, type: "increase" | "descrease") => void;
    handleDeleteItem: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) throw new Error("Lỗi");
    return context;
};

interface CardProviderProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CardProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const handleAddToCart = useCallback((product: Product) => {
        setCartItems((prevs) => {
            const existingItem = prevs.find((item) => item.id === product.id);
            if (existingItem)
                return prevs.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            else return [...prevs, { ...product, quantity: 1 }];
        });
    }, []);

    const handleUpdateQuantity = useCallback(
        (id: string, type: "increase" | "descrease") => {
            setCartItems((prevs) => {
                return prevs
                    .map((item) => {
                        if (item.id === id)
                            return type === "increase"
                                ? { ...item, quantity: item.quantity + 1 }
                                : { ...item, quantity: item.quantity - 1 };
                        else return item;
                    })
                    .filter((item) => item.quantity > 0);
            });
        },
        []
    );

    const handleDeleteItem = useCallback((id: string) => {
        setCartItems((prevs) => prevs.filter((item) => item.id !== id));
    }, []);

    const { totalProducts, totalPrices } = useMemo(() => {
        return {
            totalProducts: cartItems.reduce(
                (prevs, current) => prevs + current.quantity,
                0
            ),
            totalPrices: cartItems.reduce(
                (prevs, current) => prevs + current.quantity * current.price,
                0
            ),
        };
    }, [cartItems]);

    const contextValue: CartContextType = useMemo(() => {
        return {
            cartItems,
            totalProducts,
            totalPrices,
            handleAddToCart,
            handleUpdateQuantity,
            handleDeleteItem,
        };
    }, [
        cartItems,
        totalProducts,
        totalPrices,
        handleAddToCart,
        handleUpdateQuantity,
        handleDeleteItem,
    ]);
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};
