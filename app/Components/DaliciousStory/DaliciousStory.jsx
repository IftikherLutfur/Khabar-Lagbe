"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

//        <div>
// <p className="text-lg font-medium uppercase tracking-widest text-yellow-400">Discover</p>
// <h1 className="text-5xl uppercase text-white">𝕺𝖚𝖗 𝖒𝖊𝖓𝖚</h1>
// </div>

const DaliciousStory = () => {
  return (
    <div className="dark:text-white text-white bg-zinc-950 py-16">
      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto px-6">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left p-5">
          <p className="text-lg font-medium uppercase tracking-widest text-yellow-400">
            Discover
          </p>
          <h1 className="text-4xl font-extrabold mt-2 leading-tight">
          𝕺𝖚𝖗 𝕯𝖊𝖑𝖎𝖈𝖎𝖔𝖚𝖘 𝕾𝖙𝖔𝖗𝖞
          </h1>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam
            vero exercitationem voluptate blanditiis officiis minus! Totam eius
            possimus, recusandae nobis corporis minus perferendis quas repellat!
            Vero fugit ipsam cupiditate. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Consectetur necessitatibus iure
            assumenda quis, pariatur maxime ut eveniet, sunt totam ipsa mollitia
            eaque quod atque explicabo numquam, perferendis omnis repellat
            corporis?
          </p>
          <h1 className=' text-xl uppercase font-bold my-4 text-white cursor-pointer'><Link href={'/BookProgram'}>Reserve your table</Link>
          
          <hr  className="w-1/2"/>
          </h1>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 relative">
          <Image
            src="https://i.pinimg.com/736x/f5/3a/a7/f53aa7c6fe0208ffd343aaa7f33ed1fd.jpg"
            width={600}
            height={400}
            alt="Dining"
            className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto px-6 py-2 border-2 rounded-xl border-white mt-10 bg-gray-900 bg-opacity-40">
        {/* Location */}
        <div className="flex flex-col items-center text-center p-2">
          <span className="text-yellow-400 text-2xl">📍</span>
          <h1 className="text-xl font-semibold mt-2">Locate Us</h1>
          <small className="text-gray-300">Uttara, Dhaka 1120</small>
        </div>

        {/* Open Hours */}
        <div className="flex flex-col items-center text-center p-4">
          <span className="text-yellow-400 text-2xl">⏰</span>
          <h1 className="text-xl font-semibold mt-2">Open Hours</h1>
          <small className="text-gray-300">10 AM - 12 PM</small>
        </div>

        {/* Reservation */}
        <div className="flex flex-col items-center text-center p-4">
          <span className="text-yellow-400 text-2xl">📞</span>
          <h1 className="text-xl font-semibold mt-2">Reservation</h1>
          <small className="text-gray-300">+8801748094567</small>
        </div>
      </div>
    </div>
  );
};

export default DaliciousStory;
