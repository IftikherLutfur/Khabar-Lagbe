"use client";
import React, { useState } from 'react';
import { Menu, X } from "lucide-react"; // Icons for the hamburger menu
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                <ul className="hidden md:flex space-x-8 text-white uppercase text-lg">
                    <li className="hover:text-orange-400 cursor-pointer font-bold"><Link href={'/'}>Home</Link></li>
                    <li className="hover:text-orange-400 cursor-pointer font-bold"><Link href="/Menu">Menu</Link></li>
                    <li className="hover:text-orange-400 cursor-pointer font-bold">
                        <Link href="/OnlineOrder">Order Online</Link> </li>
                    <li className="hover:text-orange-400 cursor-pointer font-bold">About Us</li>
                    <li className="hover:text-orange-400 cursor-pointer font-bold">Contact Us</li>
                </ul>
            </div>

            {/* Dropdown Menu (Visible on small screens when toggled) */}
            {isOpen && (
                <ul className="md:hidden flex flex-col space-y-2 text-white uppercase text-lg bg-zinc-800 bg-opacity-90 px-6 py-4">
                    <li className="hover:text-orange-400 cursor-pointer">Home</li>
                    <li className="hover:text-orange-400 cursor-pointer">Our Menus</li>
                    <li className="hover:text-orange-400 cursor-pointer">Order Online</li>
                    <li className="hover:text-orange-400 cursor-pointer">About Us</li>
                    <li className="hover:text-orange-400 cursor-pointer">Contact Us</li>
                </ul>
            )}
        </div>
    );
};

export default Navbar;
