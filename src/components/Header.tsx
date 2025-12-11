"use client";

import CartIconWithPreview from "./CartIconWithPreview";

import { CartProvider } from "@/context/CartContext";

export default function Header() {
    return (
        <header className="h-10 sticky top-0">
            <div className="bg-blue-400 flex items-center justify-center">
                <CartIconWithPreview />
            </div>
        </header>
    );
}
