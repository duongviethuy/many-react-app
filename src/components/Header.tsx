"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaShoppingCart, FaHome } from "react-icons/fa";

export default function Header() {
    const { totalProducts, totalPrices } = useCart();
    const pathname = usePathname();
    const cartButtonLink = pathname === "/" ? "/cart" : "/";
    return (
        <header className="flex items-center justify-around w-full min-h-20 sticky top-0 bg-blue-700">
            <div>
                <h1 className="text-white font-extrabold text-5xl text-shadow-2xs">
                    <Link href={"/"}>SIMPLE SHOPPING APP</Link>
                </h1>
            </div>
            <Link
                href={cartButtonLink}
                className="bg-white text-blue-400 p-2 rounded-lg hover:scale-110 hover:bg-red-600 hover:text-white transition-all"
            >
                {cartButtonLink !== "/" ? (
                    <div className="flex items-center space-x-2">
                        <FaShoppingCart />
                        <p>
                            ({totalProducts}) -{" "}
                            {totalPrices.toLocaleString("vi-VN")}đ
                        </p>
                    </div>
                ) : (
                    <div>Go back to shopping page</div>
                )}
            </Link>
        </header>
    );
}
