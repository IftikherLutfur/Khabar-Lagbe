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
      <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row items-center justify-center">

        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold uppercase"
          >
            𝑯𝑼𝑵𝑮𝑹𝒀 𝑵𝑨𝑲𝑰?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-4 text-lg md:text-xl max-w-xl mx-auto"
          >
            Welcome to our world of food! Experience a unique journey of fresh, delicious, and high-quality meals that will delight your taste buds and elevate your dining pleasure.
          </motion.p>
        </div>

        {/* 2nd Content (Animated Frypan & Chicken) */}
        <div className=" lg:flex justify-center items-center mr-5">
          {/* Fry Pan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="flex items-center gap-4">
              <Image
                src={"https://res.cloudinary.com/dgisrhgoe/image/upload/v1758524719/Background_-_2025-09-22T130428.067_uu9pd8.png"}
                width={300}
                height={200}
                alt="Fried Chicken"
              />
              <div className="space-y-3">


                
                <div className="relative group px-2 py-1 bg-white rounded-xl overflow-hidden cursor-default">
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-black transition-all duration-500 ease-in-out group-hover:h-full"></span>
                  <div className=" flex items-center gap-1 relative z-10 text-black group-hover:text-white transition-colors duration-500">
                    <Image
                    src={"https://i.pinimg.com/736x/60/09/73/60097324f2b9ce6ebf2772113a64b191.jpg"}
                    alt="dishes"
                    width={24}
                    height={24}
                    className="rounded-full"
                    />
                    <p>Dishes</p>
                  </div>
                    </div>


                 <div className="relative group px-2 py-1 bg-black rounded-xl overflow-hidden cursor-default">
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-white transition-all duration-500 ease-in-out group-hover:h-full"></span>
                  <div className=" flex items-center gap-1 relative z-10 text-white group-hover:text-black transition-colors duration-500">
                    <Image
                    src={"https://i.pinimg.com/736x/5b/d5/22/5bd522e9ad3bc25472aef5ac364aab40.jpg"}
                    alt="desert"
                    width={24}
                    height={24}
                    className="rounded-full"
                    />
                    <p>Desert</p>
                  </div>
                    </div>




                <div className="relative group px-2 py-1 bg-white rounded-xl overflow-hidden cursor-default">
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-black transition-all duration-500 ease-in-out group-hover:h-full"></span>
                  <div className=" flex items-center gap-1 relative z-10 text-black group-hover:text-white transition-colors duration-500">
                    <Image
                    src={"https://i.pinimg.com/1200x/de/c9/3b/dec93b619a8befc1e7528e8cf02ebac1.jpg"}
                    alt="platter"
                    width={24}
                    height={24}
                    className="rounded-full"
                    />
                    <p>Platter</p>
                  </div>
                    </div>




                <div className="relative group px-2 py-1 bg-black rounded-xl overflow-hidden cursor-default">
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-white transition-all duration-500 ease-in-out group-hover:h-full"></span>
                  <div className=" flex items-center gap-1 relative z-10 text-white group-hover:text-black transition-colors duration-500">
                    <Image
                    src={"https://i.pinimg.com/1200x/8e/31/e5/8e31e584f121331d2335025e0a3288cc.jpg"}
                    alt="snacks"
                    width={24}
                    height={24}
                    className="rounded-full"
                    />
                    <p>Snacks</p>
                  </div>
                    </div>


              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
