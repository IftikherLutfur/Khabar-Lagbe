"use client";
import React from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const SignUp = () => {
    const handleRegister = async (e) => {
        e.preventDefault();
         const newUser = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            type:"user"
        };

        try {
            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_WEB_URL}/api/auth/signup/new-user`,
                newUser
            );
            
            if (res.status === 201) {  // Assuming 201 for successful creation
                toast.success("Registration successful!");
                e.target.reset();  // Clear the form
            } else {
                toast.error("Registration failed. Please try again.");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred.");
            console.error("Error:", error.response?.data || error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-900 px-4 pt-20 pb-5">
            <Toaster />  {/* Toaster for displaying toast notifications */}
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold text-center text-zinc-800">Sign Up</h1>
                <form onSubmit={handleRegister} className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-zinc-800"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="username"
                                placeholder="Enter your username"
                                className="w-full px-4 py-2 mt-1 rounded-md border border-zinc-300 focus:outline-none focus:border-violet-600"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-zinc-800"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 mt-1 rounded-md border border-zinc-300 focus:outline-none focus:border-violet-600"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-zinc-800"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 mt-1 rounded-md border border-zinc-300 focus:outline-none focus:border-violet-600"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-violet-600 rounded-md hover:bg-violet-700 transition duration-300"
                    >
                        Sign Up
                    </button>
                    <Toaster/>
                </form>

                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px bg-zinc-300"></div>
                    <p className="px-3 text-sm text-zinc-600">Or sign up with</p>
                    <div className="flex-1 h-px bg-zinc-300"></div>
                </div>

                <div className="flex justify-center space-x-4">
                    <button className="p-3 rounded-full border border-zinc-300 hover:bg-zinc-100 transition">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="Google"
                            className="w-5 h-5"
                        />
                    </button>
                    <button className="p-3 rounded-full border border-zinc-300 hover:bg-zinc-100 transition">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"
                            alt="Twitter"
                            className="w-5 h-5"
                        />
                    </button>
                    <button className="p-3 rounded-full border border-zinc-300 hover:bg-zinc-100 transition">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                            alt="GitHub"
                            className="w-5 h-5"
                        />
                    </button>
                </div>

                <p className="text-sm text-center text-zinc-600">
                    Already have an account?
                    <a href="#" className="text-violet-600 hover:underline"> Log in</a>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
