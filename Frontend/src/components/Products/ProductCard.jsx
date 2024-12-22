import React from 'react';

const ProductCard = ({ product }) => {
  const {
    image,
    name,
    description,
    rating,
    ratingCount,
    price,
    originalPrice,
    discount,
    coupon,
    deliveryDate,
  } = product;

  return (
    <div className="w-[290px] bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      
      <div className="relative bg-gray-100 w-[290px] h-[268px]">
        {/* <img src={image} alt={name} className="object-cover w-full h-full" /> */}
      </div>

      
      <div className="p-4">
        
        <h3 className="text-gray-800 font-semibold text-sm">{name}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>

        
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={
                index < rating
                  ? "text-yellow-500 text-sm"
                  : "text-gray-400 text-sm"
              }
            >
              ★
            </span>
          ))}
          <span className="ml-2 text-gray-500 text-xs">({ratingCount})</span>
        </div>

        {/* Price */}
        <div className="mt-2">
          <div className="flex items-baseline mt-1">
            <span className="text-gray-700 font-semibold text-lg">₹{price}</span>
            <span className="text-gray-500 text-xs ml-2 line-through">
              ₹{originalPrice}
            </span>
            <span className="text-gray-700 text-xs ml-2">({discount}% off)</span>
          </div>
          <p className="text-sm text-green-600 mt-1">Save ₹{coupon} with coupon</p>
          <p className="text-gray-500 text-xs mt-1">
            FREE delivery <span className="font-medium">{deliveryDate}</span>
          </p>
        </div>

        {/* Add to Cart Button */}
        <button className="mt-4 w-full bg-theme text-white font-medium py-2 px-4 rounded hover:bg-theme1 transition">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
