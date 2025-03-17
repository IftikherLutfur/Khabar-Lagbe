"use client"

import { useEffect, useState } from "react";
import Title from "../Components/Title/Title";
import axios from "axios";
import Link from "next/link";

const OnlineOrder = () => {
  const [foods, setFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortedFoods, setSortedFoods] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_WEB_URL}/api/foods`);
        if (res.status === 200) {
          setFoods(res.data.foods);
          setSortedFoods(res.data.foods); // Initially set sorted foods to all foods
        } else {
          console.error("Error finding foods");
        }
      } catch (error) {
        console.error("Something went wrong", error);
      }
    };
    fetchFoods();
  }, []);

  useEffect(() => {
    // Filter foods based on search query
    const filteredFoods = foods.filter(food =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort foods based on selected sortOrder
    const sorted = [...filteredFoods].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setSortedFoods(sorted);
  }, [searchQuery, sortOrder, foods]);

  return (
    <div className="bg-zinc-900 text-white pt-20 pb-10 min-h-screen px-4">
      <Title
        SubHeading={"HungryNaki?"}
        Heading={"Order Online"}
      />

      <div className="my-10 flex flex-wrap justify-center gap-10">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by food name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 text-black py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        
        {/* Sorting Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSortOrder("asc")}
            className="px-4 py-2 bg-orange-500 rounded-sm hover:bg-orange-400"
          >
            Low to High
          </button>
          <button
            onClick={() => setSortOrder("desc")}
            className="px-4 py-2 bg-orange-500 rounded-sm hover:bg-orange-400"
          >
            High to Low
          </button>
        </div>
      </div>

      {/* Displaying Food Items */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {sortedFoods.map((food) => (
          <div key={food._id} className="relative bg-zinc-800 p-4 rounded-lg overflow-hidden">
            <div className='text-lg font-bold text-orange-400 absolute top-2 right-2 bg-zinc-900 rounded-md p-1'>{food.price} Tk</div>
            <img 
              className="w-full h-56 object-cover rounded-lg" 
              src={food.image || "https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/beef-burger.png"} 
              alt={food.name} 
            />
            <div className="mt-4">
              <h1 className="text-2xl font-bold">{food.name}</h1>
            </div>
            <div className="mt-2">
              <button className="bg-orange-500 px-4 py-2 uppercase rounded-sm w-full">
                <Link href={`/OnlineOrder/${food._id}`}>Order</Link>
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineOrder;
