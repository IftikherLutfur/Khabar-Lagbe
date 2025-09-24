"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Title from '../Components/Title/Title';
import Link from 'next/link';
import clsx from 'clsx'
import { Fragment } from 'react'

const FoodsPage = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/foods`);
        if (res.status === 200) {
          setFoods(res.data.foods);
        } else {
          console.error("Error finding foods");
        }
      } catch (error) {
        console.error("Something went wrong", error);
      }
    };
    fetchFoods();
  }, []);

  const breakfast = foods.filter(food => food.category === "breakfast")
  const lunch = foods.filter(food => food.category === "lunch")
  const dinner = foods.filter(food => food.category === "dinner")
  const fastfood = foods.filter(food => food.category === "fastfood")


  return (
    <div className='bg-zinc-900 text-white pt-20 pb-10 min-h-screen px-4'>
      {/* Section Header */}
      <div className="text-center">
        <Title
          SubHeading={"HungryNaki? "}
          Heading={"our menus"}
        />
        <p className='uppercase my-6 text-sm md:text-lg'>
          Smoked brisket, tender ribs, smoked sausage, bacon & cheddar with <br className="hidden md:block" />
          lettuce, tomato, house BBQ & ranch.
        </p>
      </div>

      <TabGroup>

        <TabList className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 font-bold bg-zinc-800 p-2 rounded-md border border-zinc-700 mx-2 sm:mx-10 md:mx-20 lg:mx-[340px] my-4">
          {["All Foods", "Fast Food", "Breakfast", "Lunch", "Dinner"].map((tabName, idx) => (
            <Tab key={idx} className="rounded-md p-1" as={Fragment}>
              {({ selected }) => (
                <button
                  className={clsx(
                    "px-3 py-1 rounded-md transition-colors",
                    selected ? "bg-yellow-400 text-black font-bold" : "text-white hover:bg-yellow-500 hover:text-black"
                  )}
                >
                  {tabName}
                </button>
              )}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {/* All Foods div */}
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {foods.map((food) => (
                <div
                  key={food._id}
                  className='bg-zinc-800 rounded-lg p-5 flex-col md:flex-row items-center gap-5 shadow-md'
                >
                  <div className='relative flex justify-center'>
                    <img
                      className='w-40 h-32 sm:w-48 sm:h-36 md:w-56 md:h-40 lg:w-60 lg:h-44 object-cover rounded-md'
                      src={food.image}
                      alt={food.name}
                    />
                    {/* Price badge */}
                    <div className='absolute top-2 right-2 bg-orange-800 bg-opacity-55 text-white font-bold px-1 py-1 rounded-md text-sm sm:text-base md:text-lg lg:text-xl'>
                      {food.price} Tk
                    </div>
                  </div>
                  <div className='flex-1 text-center md:text-left'>
                    <h1 className='text-lg sm:text-xl md:text-2xl uppercase font-bold'>{food.name}</h1>
                    <p className='font-semibold mt-2'>Ingredients:⤵️</p>
                    {food.ingredients && (
                      <ul className='grid grid-cols-2 sm:grid-cols-3 gap-1 text-xs sm:text-sm'>
                        {food.ingredients.map((ind, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-orange-500">▫️</span> {ind}
                          </li>
                        ))}
                      </ul>
                    )}
                    <p className='text-sm text-gray-300 mt-2'>
                      {food.description}
                    </p>

                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          {/* fastfood */}
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {fastfood.map((food) => (
                <div
                  key={food._id}
                  className='bg-zinc-800 rounded-lg p-5 flex-col md:flex-row items-center gap-5 shadow-md'
                >
                   <div className='relative flex justify-center'>
                    <img
                      className='w-40 h-32 sm:w-48 sm:h-36 md:w-56 md:h-40 lg:w-60 lg:h-44 object-cover rounded-md'
                      src={food.image}
                      alt={food.name}
                    />
                    {/* Price badge */}
                    <div className='absolute top-2 right-2 bg-orange-800 bg-opacity-55 text-white font-bold px-1 py-1 rounded-md text-sm sm:text-base md:text-lg lg:text-xl'>
                      {food.price} Tk
                    </div>
                  </div>
                  <div className='flex-1 text-center md:text-left'>
                    <h1 className='text-lg sm:text-xl md:text-2xl uppercase font-bold'>{food.name}</h1>
                    <p className='font-semibold mt-2'>Ingredients:⤵️</p>
                    {food.ingredients && (
                      <ul className='grid grid-cols-2 sm:grid-cols-3 gap-1 text-xs sm:text-sm'>
                        {food.ingredients.map((ind, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-orange-500">▫️</span> {ind}
                          </li>
                        ))}
                      </ul>
                    )}
                    <p className='text-sm text-gray-300 mt-2'>
                      {food.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          {/* breakfast */}
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {breakfast.map((food) => (
                <div
                  key={food._id}
                  className='bg-zinc-800 rounded-lg p-5 flex-col md:flex-row items-center gap-5 shadow-md'
                >
                  <div className='relative flex justify-center'>
                    <img
                      className='w-40 h-32 sm:w-48 sm:h-36 md:w-56 md:h-40 lg:w-60 lg:h-44 object-cover rounded-md'
                      src={food.image}
                      alt={food.name}
                    />
                    {/* Price badge */}
                    <div className='absolute top-2 right-2 bg-orange-800 bg-opacity-55 text-white font-bold px-1 py-1 rounded-md text-sm sm:text-base md:text-lg lg:text-xl'>
                      {food.price} Tk
                    </div>
                  </div>
                  <div className='flex-1 text-center md:text-left'>
                    <h1 className='text-lg sm:text-xl md:text-2xl uppercase font-bold'>{food.name}</h1>
                    <p className='font-semibold mt-2'>Ingredients:⤵️</p>
                    {food.ingredients && (
                      <ul className='grid grid-cols-2 sm:grid-cols-3 gap-1 text-xs sm:text-sm'>
                        {food.ingredients.map((ind, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-orange-500">▫️</span> {ind}
                          </li>
                        ))}
                      </ul>
                    )}
                    <p className='text-sm text-gray-300 mt-2'>
                      {food.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          {/* Lunch */}
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {lunch.map((food) => (
                <div
                  key={food._id}
                  className='bg-zinc-800 rounded-lg p-5 flex-col md:flex-row items-center gap-5 shadow-md'
                >
                   <div className='relative flex justify-center'>
                    <img
                      className='w-40 h-32 sm:w-48 sm:h-36 md:w-56 md:h-40 lg:w-60 lg:h-44 object-cover rounded-md'
                      src={food.image}
                      alt={food.name}
                    />
                    {/* Price badge */}
                    <div className='absolute top-2 right-2 bg-orange-800 bg-opacity-55 text-white font-bold px-1 py-1 rounded-md text-sm sm:text-base md:text-lg lg:text-xl'>
                      {food.price} Tk
                    </div>
                  </div>
                  <div className='flex-1 text-center md:text-left'>
                    <h1 className='text-lg sm:text-xl md:text-2xl uppercase font-bold'>{food.name}</h1>
                    <p className='font-semibold mt-2'>Ingredients:⤵️</p>
                    {food.ingredients && (
                      <ul className='grid grid-cols-2 sm:grid-cols-3 gap-1 text-xs sm:text-sm'>
                        {food.ingredients.map((ind, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-orange-500">▫️</span> {ind}
                          </li>
                        ))}
                      </ul>
                    )}
                    <p className='text-sm text-gray-300 mt-2'>
                      {food.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

          {/* dinner */}
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {dinner.map((food) => (
                <div
                  key={food._id}
                  className='bg-zinc-800 rounded-lg p-5 flex-col md:flex-row items-center gap-5 shadow-md'
                >
                  <div className='relative flex justify-center'>
                    <img
                      className='w-40 h-32 sm:w-48 sm:h-36 md:w-56 md:h-40 lg:w-60 lg:h-44 object-cover rounded-md'
                      src={food.image}
                      alt={food.name}
                    />
                    {/* Price badge */}
                    <div className='absolute top-2 right-2 bg-orange-800 bg-opacity-55 text-white font-bold px-1 py-1 rounded-md text-sm sm:text-base md:text-lg lg:text-xl'>
                      {food.price} Tk
                    </div>
                  </div>
                  <div className='flex-1 text-center md:text-left'>
                    <h1 className='text-lg sm:text-xl md:text-2xl uppercase font-bold'>{food.name}</h1>
                    <p className='font-semibold mt-2'>Ingredients:⤵️</p>
                    {food.ingredients && (
                      <ul className='grid grid-cols-2 sm:grid-cols-3 gap-1 text-xs sm:text-sm'>
                        {food.ingredients.map((ind, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-orange-500">▫️</span> {ind}
                          </li>
                        ))}
                      </ul>
                    )}
                    <p className='text-sm text-gray-300 mt-2'>
                      {food.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>

        </TabPanels>
      </TabGroup>


      {/* Food Items List */}

      {/* Order Button */}
      <div className="flex justify-center mt-10">
        <button className='text-lg sm:text-xl text-black font-bold uppercase py-3 px-8 bg-yellow-400 rounded-md hover:bg-yellow-500 transition'>
          <Link href="/OnlineOrder">Order Online</Link>
        </button>
      </div>
    </div>
  );
};

export default FoodsPage;
