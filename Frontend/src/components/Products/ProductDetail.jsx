import React from "react";
import { MdLocationPin } from "react-icons/md";
import { useState } from "react";

const ProductDetailPage = () => {
  const product = {
    name: "CLYMB Cosco Running Shoes, Training Shoes, Gym Shoes, Sports Shoes, Walking Shoes for Men's (Brown, Numeric_8)",
    rating: 2.9,
    reviews: 4,
    price: 557,
    originalPrice: 999,
    discount: 44,
    deliveryInfo: "FREE delivery Thursday, 26 December",
    fastDelivery: "Or fastest delivery Monday, 23 December.",
    stockStatus: "In stock",
    emi: "EMI starts at ₹193 per month.",
    cashback: "Upto ₹60 cashback",
    returnPolicy: "10 days Return & Exchange",
    icons: ["Secure transaction", "Free Delivery", "Pay on Delivery"],
    images: [
      "/img/shoe1.png",
      "/img/shoe2.png",
      "/img/shoe3.png",
    ],
  };
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
  ];

  return (
    <div className="p-6 bg-white min-h-screen mx-10">
      <div className="flex gap-8 ">
        
        <div className="flex gap-4 p-4 bg-white shadow-sm rounded h-fit">
          
          <div className="flex flex-col gap-2 ">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover cursor-pointer rounded bg-gray-300 ${selectedImage === index ? "ring-2 ring-theme" : ""
                  }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 w-[400px] h-[400px] bg-gray-300">
            <img
              src={images[selectedImage]}
              alt={`Product ${selectedImage + 1}`}
              className="w-full h-auto object-contain rounded"
            />
          </div>
        </div>

        <div className="space-y-4 w-[500px]">
          <h1 className="text-2xl font-semibold text-gray-800">{product.name}</h1>
          <p className="text-yellow-500">
            {product.rating} ⭐ ({product.reviews} reviews)
          </p>

          <div className="h-[2px] w-full bg-gray-300 rounded-xl"></div>

          <div>
            <div className="flex items-baseline space-x-2">
              <p className="text-2xl font-bold text-green-600">₹{product.price}</p>
              <p className="text-gray-500 line-through">₹{product.originalPrice}</p>
              <p className="text-sm text-red-600">{product.discount}% OFF</p>
            </div>
            <p className="text-sm">Inclusive of all taxes</p>
          </div>

          <div>
            <p>free delivery</p>
            <p className="text-gray-500 text-sm">{product.fastDelivery}</p>
          </div>
          <p className="font-bold text-green-700 ">{product.stockStatus}</p>

          <div className="text-sm">
            <p>{product.returnPolicy}</p>
            <p>{product.icons.join(" • ")}</p>
          </div>

          <div className="h-[2px] w-full bg-gray-300 rounded-xl"></div>

          <div className="flex justify-center items-center gap-8 p-4">

            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="w-12 h-12 flex justify-center items-center text-2xl bg-gray-200 rounded-full">
                📦
              </div>
              <p className="text-sm text-gray-700">10 days Return & Exchange</p>
            </div>

            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="w-12 h-12 flex justify-center items-center text-2xl bg-gray-200 rounded-full">
                💳
              </div>
              <p className="text-sm text-gray-700">Pay on Delivery</p>
            </div>

            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="w-12 h-12 flex justify-center items-center text-2xl bg-gray-200 rounded-full">
                🚚
              </div>
              <p className="text-sm text-gray-700">Free Delivery</p>
            </div>

            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="w-12 h-12 flex justify-center items-center text-2xl bg-gray-200 rounded-full">
                🚛
              </div>
              <p className="text-sm text-gray-700">Buykaro Delivered</p>
            </div>

            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="w-12 h-12 flex justify-center items-center text-2xl bg-gray-200 rounded-full">
                🔒
              </div>
              <p className="text-sm text-gray-700">Secure transaction</p>
            </div>
          </div>
          <div className="h-[2px] w-full bg-gray-300 rounded-xl"></div>
        </div>



        <div className="border-2 border-gray-300 w-64 p-5 flex flex-col gap-2 h-fit">

          <p className="text-2xl font-bold ">₹{product.price}</p>

          <div>
            <p>free delivery</p>
            <p className="text-gray-500 text-sm">{product.fastDelivery}</p>
          </div>

          <div className="h-[2px] w-full bg-gray-300 rounded-xl mt-2"></div>

          <div className="flex mt-2">
            <div className="flex flex-col">

              <p className="text-sm flex items-center"><MdLocationPin /> Deliver to:</p>
              <p className="text-gray-500 text-sm">Lorem ipsum.</p>

              <p className="text-gray-500 text-sm">411001</p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-lg text-green-700">{product.stockStatus}</p>
            <div className="flex gap-2">
              <p className="text-sm">Sold by:</p>
              <p className="text-gray-500 text-sm">Seller name</p>
            </div>
          </div>

          <div className="h-[2px] w-full bg-gray-300 rounded-xl mt-2"></div>

          <div className="flex items-center space-x-2 mt-2">
            <label htmlFor="quantity" className="font-medium">
              Quantity:
            </label>
            <select
              id="quantity"
              className="p-2 border border-gray-400 bg-gray-100 rounded w-full hover:bg-gray-200"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 ">
            <button className="px-4 py-2 bg-yellow-300 w-full  rounded-lg hover:bg-yellow-600">
              Add to Cart
            </button>
            <button className="px-4 py-2 bg-orange-400 w-full   rounded-lg hover:bg-orange-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
