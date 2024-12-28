import React from "react";

const AddAddressForm = ({ onClose }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-xl text-theme font-semibold mb-6">Add a new address</h2>

    
      <form>
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2" htmlFor="country">
            Country/Region
          </label>
          <select
            id="country"
            className="border rounded-md w-full p-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option>India</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2" htmlFor="name">
            Full name (First and Last name)
          </label>
          <input
            id="name"
            type="text"
            className="border rounded-md w-full p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2" htmlFor="phone">
            Mobile number
          </label>
          <input
            id="phone"
            type="text"
            className="border rounded-md w-full p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2" htmlFor="pincode">
            Pincode
          </label>
          <input
            id="pincode"
            type="text"
            className="border rounded-md w-full p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2" htmlFor="address">
            Flat, House no., Building, Company, Apartment
          </label>
          <input
            id="address"
            type="text"
            className="border rounded-md w-full p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2" htmlFor="area">
            Area, Street, Sector, Village
          </label>
          <input
            id="area"
            type="text"
            className="border rounded-md w-full p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2" htmlFor="landmark">
            Landmark
          </label>
          <input
            id="landmark"
            type="text"
            className="border rounded-md w-full p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-gray-600 font-medium mb-2" htmlFor="city">
              Town/City
            </label>
            <input
              id="city"
              type="text"
              className="border rounded-md w-full p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-gray-600 font-medium mb-2" htmlFor="state">
              State
            </label>
            <select
              id="state"
              className="border rounded-md w-full p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Choose a state</option>
              {/* Add more states here */}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Make this my default address
          </label>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-theme text-white px-4 py-2 rounded-md hover:bg-theme1"
          >
            Add address
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAddressForm;
