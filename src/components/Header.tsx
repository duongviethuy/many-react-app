"use client";

export default function Header() {
    return (
        <header className="flex items-center justify-around min-h-20 sticky top-0 bg-blue-300">
            <div>
                <h1 className="text-white font-extrabold text-5xl text-shadow-2xs">
                    SIMPLE SHOPPING APP
                </h1>
            </div>
            <button>CART (0)</button>
        </header>
    );
}
