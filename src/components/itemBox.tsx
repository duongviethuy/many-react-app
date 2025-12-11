"use client";
import Product from "@/app/types/ProductModels";

interface ItemBoxProps extends Product {
    onAddToCard: (product: Product) => void;
}

export default function ItemBox({
    id,
    name,
    price,
    imageUrl,
    onAddToCard,
}: ItemBoxProps) {
    const currentProduct: Product = {
        id,
        name,
        price,
        imageUrl,
    };
    return (
        <div className="flex flex-col items-center p-2 py-4 bg-gray-100 rounded-2xl hover:scale-110 hover:shadow-md transition duration-200">
            <p className="text-xs">ID: {id}</p>
            <img className="p-4" src={imageUrl} alt="" />
            <h3 className="text-blue-600 uppercase font-bold text-lg">
                {name}
            </h3>
            <p>
                Price: {price.toLocaleString("vi-VN")}
                <span>đ</span>
            </p>
            <button
                className="bg-blue-400 p-2 px-4 rounded-2xl mt-2 transition-colors hover:bg-blue-600 text-white"
                type="button"
                onClick={() => onAddToCard(currentProduct)}
            >
                Add to card
            </button>
        </div>
    );
}
