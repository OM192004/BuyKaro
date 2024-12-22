import React, { useState } from "react";
import CartCard from "../components/cart/CartCard";

const CartPage = () => {
    // Example data
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            image: "https://via.placeholder.com/100", // Replace with your product image
            title: "HASHTAG FITNESS Home Gym Set 30kg Dumbbell Set",
            seller: "HASHTAG FITNESS",
            price: 1563,
            mrp: 2399,
            quantity: 1,
        },
        {
            id: 1,
            image: "https://via.placeholder.com/100", // Replace with your product image
            title: "HASHTAG FITNESS Home Gym Set 30kg Dumbbell Set",
            seller: "HASHTAG FITNESS",
            price: 1563,
            mrp: 2399,
            quantity: 1,
        },
    ]);

    const handleIncrease = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrease = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const handleDelete = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <div className="bg-gray-100 min-h-screen flex p-5 gap-3">
            <div className="bg-white rounded-lg shadow-md p-6 w-3/4 h-fit">
                <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>

                <div className="h-[2px] w-full bg-gray-300 rounded-xl my-2"></div>

                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <CartCard
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            seller={item.seller}
                            price={item.price}
                            mrp={item.mrp}
                            quantity={item.quantity}
                            onIncrease={() => handleIncrease(item.id)}
                            onDecrease={() => handleDecrease(item.id)}
                            onDelete={() => handleDelete(item.id)}
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-500">Your cart is empty.</p>
                )}
                <div className="flex justify-start items-center mt-6">
                    <p className="text-lg font-semibold">
                        Subtotal (
                        {cartItems.reduce((acc, item) => acc + item.quantity, 0)} item
                        {cartItems.length > 1 ? "s" : ""}): ₹
                        {cartItems
                            .reduce((acc, item) => acc + item.quantity * item.price, 0)
                            .toLocaleString()}
                    </p>
                </div>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md w-1/4 h-fit">
                <p className="text-lg font-semibold">
                    Subtotal (
                    {cartItems.reduce((acc, item) => acc + item.quantity, 0)} item
                    {cartItems.length > 1 ? "s" : ""}): ₹
                    {cartItems
                        .reduce((acc, item) => acc + item.quantity * item.price, 0)
                        .toLocaleString()}
                </p>
                {/* Proceed to Buy Button */}
                <button className="w-full bg-theme text-black py-2 rounded-md font-medium text-sm mt-4 hover:bg-theme1">
                    Proceed to Buy
                </button>
            </div>
        </div>
    );
};

export default CartPage;
