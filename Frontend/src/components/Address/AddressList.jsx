import React, { useState } from "react";
import AddAddressForm from "./AddAddressForm";
import AddAddressCard from "./AddAddressCard";
import AddressCard from "./AddressCard";
import { Link } from "react-router";

const AddressList = () => {
    const [showForm, setShowForm] = useState(false);

    const addresses = [
        {
            name: "Om Mali",
            address: "Gangotri Apartments, near Daji Misal, Kadiche Maidan, Somwar Peth",
            city: "PUNE",
            state: "MAHARASHTRA 411011",
            phone: "7820984922",
            isDefault: true,
        },
    ];

    return (
        <div className="mb-20 bg-white p-8 mx-auto w-fit">
            <div className="text-sm text-gray-500 mb-4">
                <Link to="/youracc">
                    <span className="hover:text-theme cursor-pointer">Your Account</span>{" "}
                </Link>
                &gt;{" "}
                <span className="text-gray-800 font-semibold">Your Addresses</span>
            </div>
            <h1 className="text-2xl font-semibold ">Addresses</h1>
            <div className="h-[2px] w-full bg-gray-300 rounded-xl mt-2 mb-7"></div>
            {showForm ? (
                <AddAddressForm onClose={() => setShowForm(false)} />
            ) : (
                <div className="flex gap-6 flex-wrap">
                    <div onClick={() => setShowForm(true)}>
                        <AddAddressCard />
                    </div>
                    {addresses.map((address, index) => (
                        <AddressCard key={index} {...address} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AddressList;
