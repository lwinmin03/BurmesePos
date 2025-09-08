import { useState } from "react";
import ProductCard from "./ProductCard.jsx";
import burmeseFood from "../../../Constant/Products.js";

function Product() {
    const [page, setPage] = useState(1);
    const [activeCategory, setActiveCategory] = useState("All");

    const pagePerFood = 12;

    // Filter products by category
    const filteredProducts =
        activeCategory === "All"
            ? burmeseFood
            : burmeseFood.filter((food) => food.category === activeCategory);

    // Pagination logic
    const totalPages = Math.ceil(filteredProducts.length / pagePerFood);
    const endIndex = page * pagePerFood;
    const startIndex = endIndex - pagePerFood;
    const currentProducts = filteredProducts.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const categories = [
        { id: "C00", name: "All" },
        { id: "C01", name: "Breakfast" },
        { id: "C02", name: "Lunch" },
        { id: "C03", name: "Snack" },
        { id: "C04", name: "Drink" },
    ];

    return (
        <div className="w-full h-full mt-2 px-2 overflow-y-auto flex flex-col gap-2">
            {/* Category Header */}
            <header className="flex p-2 overflow-x-auto items-center justify-start gap-5">
                <div className="flex py-1 overflow-y-hidden items-center gap-5 w-full">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => {
                                setActiveCategory(cat.name);
                                setPage(1);
                            }}
                            className={`px-2 max-w-28 py-2 rounded-sm shadow cursor-pointer ${
                                activeCategory === cat.name
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-900 bg-white"
                            }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            </header>

            {/* Product Grid */}
            <main className="min-h-[75%] w-full overflow-y-scroll mt-2 gap-1 md:gap-2 place-items-center md:place-items-start grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {currentProducts.length > 0 ? (
                    currentProducts.map((food) => (
                        <ProductCard
                            key={food.id}
                            name={food.name}
                            price={food.price}

                        />
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">
                        No products found.
                    </p>
                )}
            </main>

            {/* Pagination */}
            <div className="h-1/12 mb-3 lg:mb-0 flex justify-between items-center gap-5">
                <button
                    disabled={page === 1}
                    onClick={() => handlePageChange(page - 1)}
                    className="px-2 bg-white w-28 py-2 rounded-sm shadow cursor-pointer disabled:opacity-50"
                >
                    PREV
                </button>

                <span>
          {page} of {totalPages}
        </span>

                <button
                    disabled={page === totalPages}
                    onClick={() => handlePageChange(page + 1)}
                    className="px-2 bg-white w-28 py-2 rounded-sm shadow cursor-pointer disabled:opacity-50"
                >
                    NEXT
                </button>
            </div>
        </div>
    );
}

export default Product;
