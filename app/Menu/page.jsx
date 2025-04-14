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
        const res = await axios.get(`${process.env.NEXT_PUBLIC_WEB_URL || process.env.NEXT_PUBLIC_DEPLOY_URL}/api/foods`);
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

  const breakfast = foods.filter(food=>food.category === "breakfast")
  console.log(breakfast);
  const lunch = foods.filter(food=>food.category === "lunch")
  console.log(lunch);
  const dinner = foods.filter(food=>food.category === "dinner")
  console.log(dinner);
  const fastfood = foods.filter(food=>food.category === "fastfood")
  console.log(fastfood);
  

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
      <TabList className='flex gap-10 font-bold bg-zinc-800 p-2 justify-center my-4 mx-[340px] rounded-md border-[1px]'>
      <Tab className='rounded-md  p-1' as={Fragment}>
          {({ hover, selected }) => (
            <button className={clsx( selected && 'bg-yellow-400 text-black font-bold ')}>All Foods</button>
          )}
        </Tab>
        <Tab className='rounded-md  p-1' as={Fragment}>
          {({ hover, selected }) => (
            <button className={clsx( selected && 'bg-yellow-400 text-black ')}>Fast Food</button>)}</Tab>

        <Tab className='rounded-md  p-1' as={Fragment}>
          {({ hover, selected }) => (
            <button className={clsx( selected && 'bg-yellow-400 text-black ')}>Breakfast </button>)}</Tab>
       
        <Tab className='rounded-md  p-1' as={Fragment}>
          {({ hover, selected }) => (
            <button className={clsx( selected && 'bg-yellow-400 text-black ')}>Lunch</button>)}</Tab>
       
        <Tab className='rounded-md  p-1' as={Fragment}>
          {({ hover, selected }) => (
            <button className={clsx( selected && 'bg-yellow-400 text-black ')}>Dinner</button>)}</Tab>
       
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
            <div className='flex justify-center'>
              <img 
                className='w-40 h-32 sm:w-48 sm:h-36 object-cover rounded-md' 
                src={food.image || "https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/beef-burger.png"} 
                alt={food.name} 
              />
              <div className='text-lg  font-bold text-orange-400 absolute ml-64'>{food.price} Tk</div>
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
            <div className='flex justify-center'>
              <img 
                className='w-40 h-32 sm:w-48 sm:h-36 object-cover rounded-md' 
                src={food.image || "https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/beef-burger.png"} 
                alt={food.name} 
              />
              <div className='text-lg  font-bold text-orange-400 absolute ml-64'>{food.price} Tk</div>
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
            <div className='flex justify-center'>
              <img 
                className='w-40 h-32 sm:w-48 sm:h-36 object-cover rounded-md' 
                src={food.image || "https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/beef-burger.png"} 
                alt={food.name} 
              />
              <div className='text-lg  font-bold text-orange-400 absolute ml-64'>{food.price} Tk</div>
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
            <div className='flex justify-center'>
              <img 
                className='w-40 h-32 sm:w-48 sm:h-36 object-cover rounded-md' 
                src={food.image || "https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/beef-burger.png"} 
                alt={food.name} 
              />
              <div className='text-lg  font-bold text-orange-400 absolute ml-64'>{food.price} Tk</div>
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
            <div className='flex justify-center'>
              <img 
                className='w-40 h-32 sm:w-48 sm:h-36 object-cover rounded-md' 
                src={food.image || "https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/beef-burger.png"} 
                alt={food.name} 
              />
              <div className='text-lg  font-bold text-orange-400 absolute ml-64'>{food.price} Tk</div>
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
