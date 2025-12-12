"use client";

import Product from "@/app/types/productModel";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

export default function ProductCard({
    product,
    onAddToCart,
}: ProductCardProps) {
    const { handleAddToCart } = useCart();
    return (
        <div className="flex flex-col space-y-3 bg-blue-50 items-center rounded-md py-4">
            <img
                className="w-50 py-3 hover:scale-110 transition-all"
                src={product.imgURL}
                alt=""
            />
            <h2 className="uppercase text-red-600 font-bold">{product.name}</h2>
            <p>
                Price: {product.price.toLocaleString("vi-VN")}
                <span>đ</span>
            </p>
            <button
                className="bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-700 transition-all cursor-pointer"
                type="button"
                onClick={() => handleAddToCart(product)}
            >
                Add to cart
            </button>
        </div>
    );
}
