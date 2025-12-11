"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartIconWithPreview() {
    const { cart, totalPrice } = useCart();
    return (
        <div>
            <h1>ss</h1>
        </div>
    );
}
