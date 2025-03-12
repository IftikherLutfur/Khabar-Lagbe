"use client";
import React, { useState } from 'react';
import { Menu, X } from "lucide-react"; // Icons for the hamburger menu
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showUserOptions, setShowUserOptions] = useState(false);
    const session = useSession();

    return (
        <div className="bg-zinc-800 bg-opacity-5 shadow-xl fixed w-full z-20">
            {/* Navbar Container */}
            <div className="flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <h1 className="text-white text-2xl font-bold">HungryNaki?</h1>

                {/* Hamburger Menu (for small screens) */}
                <div
                    className="md:hidden text-white text-3xl cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </div>

                {/* Links (Hidden on small screens, visible on medium and larger screens) */}
                <ul className="hidden md:flex items-center space-x-8 text-white uppercase text-lg">
                    <li className="hover:text-orange-400 cursor-pointer font-bold"><Link href={'/'}>Home</Link></li>
                    <li className="hover:text-orange-400 cursor-pointer font-bold"><Link href="/Menu">Menu</Link></li>
                    <li className="hover:text-orange-400 cursor-pointer font-bold">
                        <Link href="/OnlineOrder">Order Online</Link> </li>
                    <li className="hover:text-orange-400 cursor-pointer font-bold"><Link href="/Components/AboutUs">About Us</Link></li>
                    <li className="hover:text-orange-400 cursor-pointer font-bold">Contact Us</li>

                    {session.status === "authenticated" ? (
                        <div className="relative">
                            {/* User Image (Click to toggle options) */}
                            <img
                                className="w-[50px] h-[50px] rounded-full cursor-pointer"
                                src={session?.data?.user?.image}
                                alt="User"
                                onClick={() => setShowUserOptions(!showUserOptions)}
                            />

                            {/* User Dropdown */}
                            {showUserOptions && (
                                <div className="absolute right-0 mt-2 w-48 bg-zinc-900 shadow-lg rounded-lg p-3">
                                    <p className="text-white font-bold">{session?.data?.user?.name}</p>
                                    <button
                                        onClick={() => signOut()}
                                        className="w-full mt-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="bg-zinc-900 cursor-pointer rounded-md py-1 px-2">
                            <button className="hover:text-orange-400 bg-zinc-900 border-r-2 px-2"><Link href={'/api/auth/signin'}>Login</Link></button>
                            <button className="hover:text-orange-400 bg-zinc-900 px-2"><Link href={'/api/auth/signup'}>Register</Link></button>
                        </div>
                    )}
                </ul>
            </div>

            {/* Dropdown Menu (Visible on small screens when toggled) */}
            {isOpen && (
                <ul className="md:hidden flex flex-col space-y-2 text-white uppercase text-lg bg-zinc-800 bg-opacity-90 px-6 py-4">
                    <li className="hover:text-orange-400 cursor-pointer font-bold"><Link href={'/'}>Home</Link></li>
                    <li className="hover:text-orange-400 cursor-pointer font-bold"><Link href="/Menu">Menu</Link></li>
                    <li className="hover:text-orange-400 cursor-pointer font-bold">
                        <Link href="/OnlineOrder">Order Online</Link> </li>
                    <li className="hover:text-orange-400 cursor-pointer"><Link href={'/AboutUs'}>About Us</Link></li>
                    <li className="hover:text-orange-400 cursor-pointer">Contact Us</li>
                    {session.status === "authenticated" ? (
                        <button onClick={() => signOut()} className="hover:text-orange-400 bg-zinc-900 px-2 rounded-md cursor-pointer">
                            Logout
                        </button>
                    ) : (
                        <div className="hover:text-orange-400 bg-zinc-900 cursor-pointer px-2">
                            <button className="hover:text-orange-400 bg-zinc-900 cursor-pointer px-2"><Link href={'/api/auth/signin'}>Login</Link></button>
                            <button className="hover:text-orange-400 bg-zinc-900 cursor-pointer px-2"><Link href={'/api/auth/signup'}>Register</Link></button>
                        </div>
                    )}
                </ul>
            )}
        </div>
    );
};

export default Navbar;
