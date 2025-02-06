"use client"
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <ul className='text-xl justify-between px-10 z-20 absolute w-full text-white bg-zinc-800 uppercase flex items-center py-3'>
                <li>Home</li>
                <li>our menus</li>
                <li>Order online</li>
                <li>about us</li>
                <li>Contact us</li>
            </ul>
        </div>
    );
};

export default Navbar;