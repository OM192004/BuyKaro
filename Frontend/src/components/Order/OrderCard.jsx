import React from "react";

const OrderCard = ({ order }) => {
    return (
        <div className="bg-white border border-gray-300 rounded-lg mb-4">
            <div className="bg-gray-200 p-4">
                <div className="flex justify-between items-center border-b mb-2 ">
                    <div className="text-sm text-gray-600 flex gap-12">
                        <p>
                            <span className="font-medium text-gray-800">Order Placed</span><br />
                            {order.date}
                        </p>
                        <p>
                            <span className="font-medium text-gray-800">Total</span><br />
                            ₹{order.total}
                        </p>
                        <p>
                            <span className="font-medium text-gray-800">Ship To</span><br />
                            {order.shipTo}
                        </p>
                    </div>
                    <div className="text-sm text-blue-900 text-right">
                        <a href="#" className="hover:underline">
                            View order details
                        </a>
                        <br />
                        <a href="#" className="hover:underline">
                            Invoice
                        </a>
                    </div>
                </div>
            </div>

            
            <div className="flex items-center p-4">
                
                <img
                    src={order.productImage}
                    alt={order.productName}
                    className="w-20 h-20 rounded-lg object-cover mr-4 bg-gray-400"
                />
                {/* Product Info */}
                <div className="flex-grow">
                    <h3 className="text-sm font-medium text-gray-800 hover:text-theme1">
                        {order.productName}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                        Return window closed on {order.returnDate}
                    </p>
                    <div className="mt-2 flex items-center space-x-2">
                        <button className="border border-gray-300 px-3 py-1 text-sm rounded-md hover:bg-gray-100">
                            Buy it again
                        </button>
                        <button className=" text-gray-600 text-sm rounded-md hover:underline">
                            View your item
                        </button>
                    </div>
                </div>
                {/* Actions */}
                <div className="flex flex-col items-end space-y-2">
                    <button className="bg-theme text-white px-3 py-1 text-sm rounded-md hover:bg-theme1 w-full">
                        Get product support
                    </button>
                    <button className="border border-gray-300 px-3 py-1 text-sm rounded-md hover:bg-gray-100">
                        Write a product review
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
