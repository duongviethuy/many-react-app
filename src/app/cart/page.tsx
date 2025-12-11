"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Cart() {
    // Lấy tất cả dữ liệu và hàm xử lý từ Context
    const { cart, totalPrice, onUpdateQuantity } = useCart();

    // Hàm format tiền tệ
    const formatCurrency = (amount: number) => {
        return amount.toLocaleString("vi-VN") + " VNĐ";
    };

    return (
        <div className="min-h-screen p-8 bg-gray-50 max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">
                🛒 GIỎ HÀNG CỦA TÔI
            </h1>

            {/* Xử lý giỏ hàng trống */}
            {cart.length === 0 ? (
                <div className="text-center p-10 border rounded-lg bg-white shadow-lg">
                    <p className="text-xl text-gray-600 mb-4">
                        Giỏ hàng của bạn đang trống!
                    </p>
                    <Link
                        href="/shop"
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        Bấm vào đây để mua sắm
                    </Link>
                </div>
            ) : (
                // Hiển thị nội dung giỏ hàng
                <div className="space-y-4">
                    {/* DANH SÁCH SẢN PHẨM */}
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
                        >
                            {/* Tên và Ảnh */}
                            <div className="flex items-center space-x-4 w-1/2">
                                <img
                                    src={item.imageUrl}
                                    alt={item.name}
                                    className="w-16 h-16 object-cover rounded-md"
                                />
                                <div>
                                    <h2 className="font-semibold text-lg text-gray-800">
                                        {item.name}
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        Giá: {formatCurrency(item.price)}
                                    </p>
                                </div>
                            </div>

                            {/* Số lượng và Nút điều chỉnh */}
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() =>
                                        onUpdateQuantity(item.id, "decrement")
                                    }
                                    className="bg-red-500 text-white font-bold w-8 h-8 rounded-full hover:bg-red-600 transition disabled:opacity-50"
                                    disabled={item.quantity <= 1} // Disable nút giảm khi số lượng là 1
                                >
                                    -
                                </button>
                                <span className="font-bold text-xl w-6 text-center">
                                    {item.quantity}
                                </span>
                                <button
                                    onClick={() =>
                                        onUpdateQuantity(item.id, "increment")
                                    }
                                    className="bg-green-500 text-white font-bold w-8 h-8 rounded-full hover:bg-green-600 transition"
                                >
                                    +
                                </button>
                            </div>

                            {/* Tổng tiền của Item */}
                            <p className="font-extrabold text-lg w-1/4 text-right">
                                {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>
                    ))}

                    {/* TỔNG KẾT */}
                    <div className="mt-8 pt-4 border-t-4 border-blue-600 bg-white p-6 rounded-lg shadow-xl">
                        <div className="flex justify-between items-center">
                            <h3 className="text-2xl font-bold">
                                TỔNG THANH TOÁN:
                            </h3>
                            <span className="text-3xl font-extrabold text-green-600">
                                {formatCurrency(totalPrice)}
                            </span>
                        </div>
                        <button className="w-full mt-6 bg-blue-700 text-white py-3 rounded-lg text-xl font-bold hover:bg-blue-800 transition">
                            TIẾN HÀNH THANH TOÁN
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
