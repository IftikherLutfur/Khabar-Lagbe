"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import frypan from "../Pictures/Background - 2025-03-20T145827.301.png";
import chiken from "../Pictures/Chiken.png.png";

export default function HomeComponent() {
  return (
    <div
      className="relative h-[650px] w-full bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/ac/14/58/ac1458a21d856abc958485d2d414dd50.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90"></div>

      {/* Content */}
      <div className="flex justify-center items-center">
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold uppercase"
          >
            𝑯𝑼𝑵𝑮𝑹𝒀 𝑵𝑨𝑲𝑰? Restaurant
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Welcome to our world of food! Experience a unique journey of fresh, delicious, and high-quality meals that will delight your taste buds and elevate your dining pleasure.
          </motion.p>
        </div>

        {/* 2nd Content (Animated Frypan & Chicken) */}
        <div className="mr-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image src={frypan} alt="Fry Pan" />
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            className="absolute bottom-[40px] right-16"
          >
            <Image width={200} src={chiken} alt="Fried Chicken" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
