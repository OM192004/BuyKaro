import React, { useState } from "react";
import OrderCard from "./OrderCard";
import { Link } from "react-router";

const OrderList = () => {
    const [activeTab, setActiveTab] = useState("Orders");

    
    const orders = [
        {
            id: 1,
            date: "19 June 2024",
            total: "1,299.00",
            shipTo: "Om Mali",
            productImage:
                "https://m.media-amazon.com/images/I/71MHneGDeqL._AC_UL320_.jpg",
            productName:
                "Boult Audio India's #1 Rated Audio Brand Z40 Earbuds with 60H Battery",
            returnDate: "1 July 2024",
            status: "Delivered",
        },
        {
            id: 2,
            date: "22 June 2024",
            total: "899.00",
            shipTo: "Om Mali",
            productImage:
                "https://m.media-amazon.com/images/I/61pDmBgzq3L._AC_UL320_.jpg",
            productName: "Sony Wireless Headphones",
            returnDate: "5 July 2024",
            status: "Not Yet Shipped",
        },
        {
            id: 3,
            date: "15 June 2024",
            total: "2,499.00",
            shipTo: "Om Mali",
            productImage:
                "https://m.media-amazon.com/images/I/81Pb9Z-B8lL._AC_UL320_.jpg",
            productName: "Apple AirPods Pro",
            returnDate: "30 June 2024",
            status: "Cancelled",
        },
    ];

    
    const filteredOrders = orders.filter((order) => {
        if (activeTab === "Orders") return order.status === "Delivered";
        if (activeTab === "Not Yet Shipped") return order.status === "Not Yet Shipped";
        if (activeTab === "Cancelled Orders") return order.status === "Cancelled";
        return [];
    });

    return (

        <div className="w-3/4 mx-auto min-h-screen p-6">
            
            <div className="text-sm text-gray-500 mb-4">
                <Link to="/youracc">
                <span className="hover:text-theme cursor-pointer">Your Account</span>{" "}
                </Link>
                &gt;{" "}
                <span className="text-gray-800 font-semibold">Your Orders</span>
            </div>


            <h1 className="text-2xl font-bold mb-6">Your Orders</h1>


            <div className="flex border-b border-gray-300 mb-4">
                {["Orders", "Buy Again", "Not Yet Shipped", "Cancelled Orders"].map(
                    (tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 text-sm font-medium ${activeTab === tab
                                ? "text-theme border-b-2 border-theme"
                                : "text-gray-700 hover:theme"
                                }`}
                        >
                            {tab}
                        </button>
                    )
                )}
            </div>



            {filteredOrders.length > 0 ? (
                filteredOrders.map((order, index) => (
                    <OrderCard key={index} order={order} />
                ))
            ) : (
                <div className="text-center mt-10 text-gray-600">
                    <p className="text-lg font-medium">
                        0 orders placed in the last 30 days
                    </p>
                    <p className="mt-2">
                        Looks like you have not placed an order in the last 30 days.{" "}
                        <a href="#" className="text-blue-500 hover:underline">
                            View orders in past 3 months
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default OrderList;
