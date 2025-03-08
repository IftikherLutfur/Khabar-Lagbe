"use client";
import React from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";

const SignUp = () => {
    const handleRegister = async (e) => {
        e.preventDefault();
        const newUser = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            type: "user",
        };

        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_WEB_URL}/api/auth/signup/new-user`,
                newUser
            );

            if (res.status === 201) {
                toast.success("Registration successful!");
                e.target.reset();
            } else {
                toast.error("Registration failed. Please try again.");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred.");
            console.error("Error:", error.response?.data || error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#08252b] px-4 py-10">
            <Toaster />
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105">
                <h1 className="text-3xl font-bold text-center text-indigo-800">Create Account</h1>
                <form onSubmit={handleRegister} className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-indigo-800"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="username"
                                placeholder="John Doe"
                                className="w-full px-4 py-2 mt-1 rounded-lg border border-indigo-300 focus:outline-none focus:border-indigo-600"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-indigo-800"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@email.com"
                                className="w-full px-4 py-2 mt-1 rounded-lg border border-indigo-300 focus:outline-none focus:border-indigo-600"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-indigo-800"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="********"
                                className="w-full px-4 py-2 mt-1 rounded-lg border border-indigo-300 focus:outline-none focus:border-indigo-600"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px bg-indigo-300"></div>
                    <p className="px-3 text-sm text-indigo-600">Or sign up with</p>
                    <div className="flex-1 h-px bg-indigo-300"></div>
                </div>

                <div className="flex justify-center space-x-4">
                    <button className="p-3 rounded-full border border-indigo-300 hover:bg-indigo-100 transition duration-300">
                        <FaGoogle className="text-red-500 w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-full border border-indigo-300 hover:bg-indigo-100 transition duration-300">
                        <FaTwitter className="text-blue-400 w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-full border border-indigo-300 hover:bg-indigo-100 transition duration-300">
                        <FaGithub className="text-gray-800 w-5 h-5" />
                    </button>
                </div>

                <p className="text-sm text-center text-indigo-600">
                    Already have an account?
                    <a href="#" className="text-indigo-800 font-semibold hover:underline ml-1">Log in</a>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
