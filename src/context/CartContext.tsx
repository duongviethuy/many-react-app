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
    handleAddToCard: (product: Product) => void;
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

    const handleAddToCard = useCallback((product: Product) => {
        const existedItem = cartItems.find((item) => item.id === product.id);
        if (existedItem) {
            setCartItems((prevs) => {
                return prevs.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            });
        } else {
            setCartItems((prevs) => [...prevs, { ...product, quantity: 1 }]);
        }
        alert(`Thêm thành công ${product.name}`);
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
        return { cartItems, totalProducts, totalPrices, handleAddToCard };
    }, [cartItems, totalProducts, totalPrices, handleAddToCard]);
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};
