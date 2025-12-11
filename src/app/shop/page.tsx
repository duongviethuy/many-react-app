"use client";
import React from "react";

import Product from "../types/ProductModels";
import ItemBox from "@/components/itemBox";
import CartIconWithPreview from "@/components/CartIconWithPreview";
import { useCart } from "@/context/CartContext";

const testData: Product[] = [
    {
        id: 1,
        name: "Cà phê Đen Đá",
        price: 25000,
        imageUrl: "https://placehold.co/320x200/50c878/white?text=Ca+Phe+Den", // Xanh lá
    },
    {
        id: 2,
        name: "Trà Đào Cam Sả",
        price: 35000,
        imageUrl: "https://placehold.co/320x200/ff69b4/white?text=Tra+Dao", // Hồng
    },
    {
        id: 3,
        name: "Bánh Mì Pate",
        price: 40000,
        imageUrl: "https://placehold.co/320x200/ffa500/white?text=Banh+Mi", // Cam
    },
    {
        id: 4,
        name: "Bánh Pizza Hải Sản",
        price: 150000,
        imageUrl:
            "https://placehold.co/320x200/00bfff/white?text=Pizza+Hai+San", // Xanh dương nhạt
    },
    {
        id: 5,
        name: "Kem Vani Dâu",
        price: 55000,
        imageUrl: "https://placehold.co/320x200/9400d3/white?text=Kem+Dau", // Tím đậm
    },
    {
        id: 6,
        name: "Nước Ép Cam Tươi",
        price: 30000,
        imageUrl: "https://placehold.co/320x200/f0e68c/black?text=Nuoc+Ep+Cam", // Vàng nhạt
    },
    {
        id: 7,
        name: "Mì Ý Sốt Cà Chua",
        price: 75000,
        imageUrl: "https://placehold.co/320x200/dc143c/white?text=Mi+Y+Sot", // Đỏ
    },
    {
        id: 8,
        name: "Sandwich Gà Nướng",
        price: 50000,
        imageUrl: "https://placehold.co/320x200/8b4513/white?text=Sandwich+Ga", // Nâu
    },
    {
        id: 9,
        name: "Coca Cola Lon",
        price: 15000,
        imageUrl: "https://placehold.co/320x200/b0c4de/black?text=Coca+Cola", // Xám nhạt
    },
    {
        id: 10,
        name: "Trà Sữa Trân Châu",
        price: 45000,
        imageUrl: "https://placehold.co/320x200/deb887/black?text=Tra+Sua", // Nâu nhạt
    },
];

export default function Shop() {
    const { onAddToCart } = useCart();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full space-y-5">
            <div>
                <h1 className="text-5xl font-sans font-black text-blue-700">
                    WELCOME TO MY SHOP
                </h1>
            </div>
            <div className="grid grid-cols-5 gap-8 max-w-7xl p-2">
                {testData.map((product) => (
                    <div key={product.id}>
                        <ItemBox {...product} onAddToCard={onAddToCart} />
                    </div>
                ))}
            </div>
        </div>
    );
}
