import React from "react";

const AddressCard = ({ name, address, city, state, phone, isDefault }) => {
  return (
    <div className="border rounded-md p-4 w-80 shadow-md bg-white">
      
      {isDefault && (
        <div className="mb-2 text-sm font-medium text-gray-500">
          <span className="bg-yellow-200 px-2 py-1 rounded-md">
            Default
          </span>
        </div>
      )}

      
      <p className="font-medium">{name}</p>
      <p className="text-sm text-gray-600">{address}</p>
      <p className="text-sm text-gray-600">{city}, {state}</p>
      <p className="text-sm text-gray-600">Phone number: {phone}</p>

      
      <div className="mt-4 flex gap-4 text-sm">
        <a href="#" className="text-blue-500 hover:underline">Edit</a>
        <a href="#" className="text-blue-500 hover:underline">Remove</a>
        {!isDefault && (
          <a href="#" className="text-blue-500 hover:underline">Set as Default</a>
        )}
      </div>
    </div>
  );
};

export default AddressCard;
