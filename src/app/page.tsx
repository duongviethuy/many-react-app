"use client";

import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import { MOCK_PRODUCTS } from "@/untils/mock-products";
import ProductCard from "@/components/ProductCard";
import Product from "./types/productModel";

export default function Home() {
    const handleAddToCard = (product: Product) => {
        alert(product.id);
    };
    return (
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-4 gap-4 p-3">
                {MOCK_PRODUCTS.map((item) => {
                    return (
                        <div key={item.id}>
                            <ProductCard
                                product={item}
                                onAddToCart={handleAddToCard}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
