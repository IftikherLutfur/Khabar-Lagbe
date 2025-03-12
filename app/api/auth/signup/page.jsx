"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation"; // Corrected useRouter import

const SignUp = () => {
    const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY;
    const image_hosting = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    const router = useRouter(); // Initialize useRouter
    const [profilePhoto, setProfilePhoto] = useState(null);

    // Upload image to imgbb
    const uploadImageToImgbb = async (imageFile) => {
        const formData = new FormData();
        formData.append("image", imageFile);

        try {
            const response = await axios.post(image_hosting, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            return response.data.data.display_url; // Return uploaded image URL
        } catch (error) {
            console.error("Image upload failed:", error);
            throw new Error("Failed to upload image. Please try again.");
        }
    };

    // Handle registration
    const handleRegister = async (e) => {
        e.preventDefault();

        if (!profilePhoto) {
            toast.error("Please upload a profile image.");
            return;
        }

        try {
            // Upload image and get URL
            const profilePhotoUrl = await uploadImageToImgbb(profilePhoto);

            const newUser = {
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value,
                image: profilePhotoUrl,
                type: "user",
            };

            const res = await axios.post(
                `${process.env.NEXT_PUBLIC_WEB_URL}/api/auth/signup/new-user`,
                newUser
            );

            if (res.status === 201) {
                toast.success("Registration successful!");
                e.target.reset();
                setProfilePhoto(null);
                router.push("/"); // Redirect to home page
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
                            <label htmlFor="username" className="block text-sm font-medium text-indigo-800">
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
                            <label htmlFor="email" className="block text-sm font-medium text-indigo-800">
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
                            <label htmlFor="password" className="block text-sm font-medium text-indigo-800">
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

                        {/* Profile Image Upload */}
                        <div>
                            <label htmlFor="profile-image" className="block text-sm font-medium text-indigo-800">
                                Profile Image
                            </label>
                            <input
                                type="file"
                                id="profile-image"
                                accept="image/*"
                                className="w-full px-4 py-2 mt-1 rounded-lg border border-indigo-300 focus:outline-none focus:border-indigo-600"
                                onChange={(e) => setProfilePhoto(e.target.files[0])}
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
