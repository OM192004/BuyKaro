import React, { useState } from 'react';
import { GrGoogle } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SigninPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        setError(''); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        console.log('Create Account Data:', formData);
        alert('Account Created Successfully!');
       
    };

    return (
        <div className='bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen'>
            <div className="text-3xl font-extrabold text-theme ml-5 pt-5">
                <a href="/">BuyKaro.</a>
            </div>
        <div className="flex items-center justify-center">
            <div className="bg-gray-700 shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-theme text-center mb-6">Create an Account</h2>
                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="example@example.com"
                            required
                            />
                    </div>
                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                            required
                            />
                    </div>
                    {/* Confirm Password */}
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Confirm your password"
                            required
                            />
                    </div>
                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-theme text-white font-medium rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                            Create Account
                        </button>
                    </div>
                </form>

                <p className="text-sm text-center text-gray-300 mt-4">
                    Login using{" "}
                    <div className="flex justify-around w-1/3 mx-auto mt-2">
                        <GrGoogle size={18} className="hover:text-slate-50" />
                        <FaFacebook size={18} className="hover:text-slate-50" />
                        <FaGithub size={18} className="hover:text-slate-50" />
                    </div>
                </p>
                <div className="mt-6 border-t border-gray-300"></div>

                <p className="text-sm text-gray-300 text-center mt-4">
                    Already have an account?{' '}
                    <a href="/login" className="text-theme hover:underline">
                        Sign In
                    </a>
                </p>
            </div>
        </div>
                            </div>
    );
};

export default SigninPage;
