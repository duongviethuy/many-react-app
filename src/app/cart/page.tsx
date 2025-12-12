"use client";

import { useCart } from "@/context/CartContext";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";

export default function CartPage() {
    const {
        cartItems,
        totalProducts,
        totalPrices,
        handleUpdateQuantity,
        handleDeleteItem,
    } = useCart();

    const emptyCartBlock = (
        <div className="flex items-center justify-center my-5">
            <div className="w-100 flex items-center justify-center border-4 border-red-700 p-4 rounded-lg">
                <h1>Không có sản phẩm nào trong giỏ hàng</h1>
            </div>
        </div>
    );
    return (
        <>
            {cartItems.length === 0 ? (
                emptyCartBlock
            ) : (
                <div className="flex w-full items-center justify-center my-5">
                    <div className="flex flex-col space-y-3 min-w-1/2">
                        {cartItems.map((item) => (
                            <div
                                className="grid grid-cols-6 p-3 place-items-center items-center border-2 border-blue-900 rounded hover:bg-blue-100 transition-all"
                                key={item.id}
                            >
                                <img
                                    className="w-40"
                                    src={item.imgURL}
                                    alt=""
                                />
                                <h1 className="text-md wrap-anywhere uppercase font-bold text-blue-600">
                                    {item.name}
                                </h1>
                                <div className="flex items-center justify-center">
                                    <button
                                        onClick={() =>
                                            handleUpdateQuantity(
                                                item.id,
                                                "descrease"
                                            )
                                        }
                                        className="scale-150 hover:scale-200 transition-all"
                                    >
                                        <CiCircleMinus />
                                    </button>
                                    <input
                                        className="text-center w-20 outline-0 "
                                        type="text"
                                        value={item.quantity}
                                    />
                                    <button
                                        onClick={() =>
                                            handleUpdateQuantity(
                                                item.id,
                                                "increase"
                                            )
                                        }
                                        className="scale-150 hover:scale-200 transition-all"
                                    >
                                        <CiCirclePlus />
                                    </button>
                                </div>
                                <p>
                                    Đơn giá:{" "}
                                    {item.price.toLocaleString("vi-VN")}đ
                                </p>
                                <p>
                                    Thành tiền:{" "}
                                    {(
                                        item.price * item.quantity
                                    ).toLocaleString("vi-VN")}
                                    đ
                                </p>
                                <button
                                    onClick={() => handleDeleteItem(item.id)}
                                    className="scale-150 hover:scale-200 transition-all"
                                >
                                    <FaTrashAlt />
                                </button>
                            </div>
                        ))}
                        <div className="text-4xl font-bold flex place-content-end">
                            <p className="text-blue-600">
                                TỔNG {totalProducts} SẢN PHẨM{" "}
                                {totalPrices.toLocaleString("vi-VN")}Đ
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
