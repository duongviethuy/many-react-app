"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function Header() {
    const { totalProducts, totalPrices } = useCart();
    return (
        <header className="flex items-center justify-around w-full min-h-20 sticky top-0 bg-blue-700">
            <div>
                <h1 className="text-white font-extrabold text-5xl text-shadow-2xs">
                    <Link href={"/"}>SIMPLE SHOPPING APP</Link>
                </h1>
            </div>
            <button className="bg-white text-blue-400 p-2 rounded-lg">
                CART ({totalProducts}-{totalPrices.toLocaleString("vi-VN")}đ)
            </button>
        </header>
    );
}
