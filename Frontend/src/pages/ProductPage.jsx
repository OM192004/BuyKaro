import React, { useState } from "react";
import ProductCard from "../components/Products/ProductCard";
import { Link } from "react-router";

const ProductPage = () => {
    const allProducts = [
        {
            id: 1,
            image: "https://via.placeholder.com/300x200",
            name: "CLYMB",
            description: "Cosco Running Shoes, Training Shoes, Gym Shoes...",
            rating: 3,
            ratingCount: 4,
            price: 557,
            originalPrice: 999,
            discount: 44,
            coupon: 15,
            deliveryDate: "Thu, 26 Dec",
            brand: "CLYMB",
            color: "brown",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/300x200",
            name: "Nike Air Max",
            description: "High-performance running shoes.",
            rating: 5,
            ratingCount: 200,
            price: 1200,
            originalPrice: 1500,
            discount: 20,
            coupon: 50,
            deliveryDate: "Fri, 27 Dec",
            brand: "Nike",
            color: "white",
        },
        {
            id: 3,
            image: "https://via.placeholder.com/300x200",
            name: "Asian Sports",
            description: "Durable running shoes for daily wear.",
            rating: 4,
            ratingCount: 80,
            price: 700,
            originalPrice: 900,
            discount: 22,
            coupon: 20,
            deliveryDate: "Mon, 30 Dec",
            brand: "Asian",
            color: "gray",
        },
    ];

    const [filters, setFilters] = useState({
        brand: [],
        color: "",
        minPrice: 0,
        maxPrice: Infinity,
    });

    // Handle filter changes
    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFilters((prevFilters) => {
                const newBrands = checked
                    ? [...prevFilters.brand, value]
                    : prevFilters.brand.filter((brand) => brand !== value);

                return {
                    ...prevFilters,
                    brand: newBrands,
                };
            });
        } else {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [name]: name === "minPrice" || name === "maxPrice" ? Number(value) : value,
            }));
        }
    };

    // Filter logic
    const filteredProducts = allProducts.filter((product) => {
        const matchesBrand =
            filters.brand.length > 0
                ? filters.brand.includes(product.brand)
                : true;
        const matchesColor = filters.color
            ? product.color.toLowerCase() === filters.color.toLowerCase()
            : true;
        const matchesPrice =
            product.price >= filters.minPrice && product.price <= filters.maxPrice;

        return matchesBrand && matchesColor && matchesPrice;
    });

    return (
        <div>
            <div className="flex flex-col lg:flex-row min-h-screen border-gray-200 border-t-2">
                <aside className="w-full lg:w-1/6 bg-white shadow p-4 border-r border-gray-200">
                    <h2 className="text-xl font-bold mb-4">Filters</h2>

                    {/* Brand Filter */}
                    <div className="mb-4">
                        <h3 className="text-base font-medium text-gray-700 mb-2">Brands</h3>
                        <div className="space-y-2">
                            {["Asian", "Puma", "Campus", "Nike", "Sparx", "Red Tape", "Reebok"].map(
                                (brand) => (
                                    <div key={brand} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id={`brand-${brand}`}
                                            name="brand"
                                            value={brand}
                                            onChange={handleFilterChange}
                                            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                                        />
                                        <label
                                            htmlFor={`brand-${brand}`}
                                            className="ml-2 text-sm text-gray-700 hover:text-theme"
                                        >
                                            {brand}
                                        </label>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Color Filter */}
                    <div className="mb-4">
                        <h3 className="text-base font-medium text-gray-700 mb-2">Color</h3>
                        <select
                            name="color"
                            onChange={handleFilterChange}
                            className="w-full border-gray-300 rounded-md shadow-sm"
                        >
                            <option value="">All Colors</option>
                            <option value="brown">Brown</option>
                            <option value="white">White</option>
                            <option value="gray">Gray</option>
                        </select>
                    </div>

                    {/* Price Filter */}
                    <div className="mb-4">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Price</h3>
                        <div className="flex gap-2">
                            <input
                                type="number"
                                name="minPrice"
                                placeholder="Min"
                                onChange={handleFilterChange}
                                className="w-1/2 border-gray-300 rounded-md shadow-sm"
                            />
                            <input
                                type="number"
                                name="maxPrice"
                                placeholder="Max"
                                onChange={handleFilterChange}
                                className="w-1/2 border-gray-300 rounded-md shadow-sm"
                            />
                        </div>
                    </div>
                </aside>

                {/* Products */}
                <main className="w-full lg:w-5/6 p-4 bg-white">
                    <h2 className="text-2xl font-bold">Results</h2>
                    <p className="text-gray-600 text-sm mb-3">
                        Check each product page for other buying options. Price and other details
                        may vary based on product size and colour.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        ) : (
                            <p className="text-gray-500">No products found matching the filters.</p>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProductPage;
