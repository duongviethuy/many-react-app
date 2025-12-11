"use client";

import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import { MOCK_PRODUCTS } from "@/utils/mock-products";
import ProductCard from "@/components/ProductCard";
import Product from "./types/productModel";

export default function Home() {
    return (
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3">
                {MOCK_PRODUCTS.map((item) => {
                    return (
                        <div key={item.id}>
                            <ProductCard
                                product={item}
                                onAddToCart={() => {}}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
