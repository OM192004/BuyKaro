import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router";

const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <nav className="shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">

        <div className="text-3xl font-extrabold text-theme">
          <a href="/">BuyKaro.</a>
        </div>


        <div className="flex items-center space-x-4 w-full max-w-lg">
          {/* Category Dropdown */}
          <div className="relative group">
            <button
              className="py-2 px-4 rounded-md flex items-center hover:text-theme"
              id="category-menu-button"
            >
              Categories
              <FiChevronDown size={18} className="ml-2 " />
            </button>
            <div
              className="absolute p-3 flex flex-col items-start right-0 mt-2 w-36 bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 transition-all"
              id="category-menu"
            >
              <a
                href="#electronics"
                className="block  hover:text-theme hover:underline text-gray-600 text-md"
              >
                Electronics
              </a>
              <a href="#fashion" className="block  hover:text-theme hover:underline text-gray-600 text-md">
                Fashion
              </a>
              <a href="#books" className="block  hover:text-theme hover:underline text-gray-600 text-md">
                Books
              </a>
            </div>
          </div>


          <div className="flex-grow flex items-center border border-theme rounded-md bg-white">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full px-4 py-2 focus:outline-none"
            />
            <FaSearch size={20} className="gray-800 mr-4" />
          </div>
        </div>


        <div className="flex items-center space-x-4">
          {/* Profile Dropdown */}
          <div className="relative group">
            <button
              className="py-2 px-4 rounded-md flex items-center hover:text-theme"
              id="profile-menu-button"
            >
              {isLoggedIn ? "Profile" : "Hello, Sign In"}
              <FiChevronDown size={18} className="ml-2 " />
            </button>
            <div
              className="absolute right-0 mt-2 w-fit bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 transition-all"
              id="profile-menu"
            >
              {isLoggedIn ? (
                <div className="flex bg-white  w-32 shadow-md flex-col justify-center items-start py-4 max-h-fit px-2 ">
                  <Link to="/youracc"
                    className="block  hover:text-theme hover:underline text-gray-600 text-sm"
                  >
                    Your Account
                  </Link>
                  <Link
                    to="/order"
                    className="block  hover:text-theme hover:underline text-gray-600 text-sm"
                  >
                    Your Orders
                  </Link>
                  <Link className="block  hover:text-theme hover:underline text-gray-600 text-sm">
                    Explore
                  </Link>
                  <hr className="h-1 bg-gray-500 border-1 w-full border-gray-500 my-3 rounded-sm"></hr>
                  <a
                    href="#logout"
                    onClick={() => setIsLoggedIn(false)}
                    className="block  hover:text-theme hover:underline text-gray-600 text-sm"
                  >
                    Logout
                  </a>
                </div>
              ) : (
                <div className="flex bg-white w-40 shadow-md flex-col justify-center items-center py-4 max-h-fit">

                  <Link
                    to="/login"

                    className=" px-4 py-2 bg-theme text-white hover:text-orange-200 w-3/4  rounded-md flex justify-center"
                  >
                    SIGN IN
                  </Link>
                  <div className="text-xs ">
                    New Customers?
                    <Link to="/signin" className="text-theme hover:text-orange-200 underline">
                      Start here
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <hr className="h-1 bg-gray-500 border-2 w-full border-gray-500 my-3 rounded-sm"></hr>
                    <a
                      href="#profile"
                      className="block  hover:text-theme hover:underline text-gray-600 text-sm"
                    >
                      Your Account
                    </a>
                    <Link
                      to="/order"
                      className="block  hover:text-theme hover:underline text-gray-600 text-sm"
                    >
                      Your Orders
                    </Link>
                    <Link className="block  hover:text-theme hover:underline text-gray-600 text-sm">
                      Explore
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Cart Button */}
          <Link to="/cart" className="relative">
            <button
              className="py-2 px-4 rounded-md focus:outline-none flex items-center hover:text-theme"
              id="cart-button"
            >
              <IoCart size={20} className="text-theme" />
              <span className="ml-1">Cart</span>
              <span className="absolute top-0 right-0 bg-red-500 text-xs text-white px-2 rounded-full -mt-2 -mr-2">
                3
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-gray-700 flex text-gray-300 gap-4 py-2 px-5 font-semibold">
        <Link className=" hover:underline ">Sell</Link>
        <Link className=" hover:underline">Fashion</Link>
        <Link className=" hover:underline">Health & Personal Care </Link>
        <Link className=" hover:underline">Fresh</Link>
        <Link className=" hover:underline">HouseHold</Link>
        <Link className=" hover:underline">Buy again</Link>
        <Link className=" hover:underline">Gift Cards</Link>
      </div>
    </nav>
  );
};

export default Navbar;
