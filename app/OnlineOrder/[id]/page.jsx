"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation"; // ✅ Import useParams()

const ConfirmOrder = () => {
  const { id } = useParams(); // ✅ Get id correctly
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Extra items with prices
  const extras = [
    { name: "Tomato", price: 0 },
    { name: "Vegetables", price: 40 },
    { name: "Water", price: 20 },
    { name: "Coke", price: 20 },
  ];

  useEffect(() => {
    if (!id) return; // ✅ Ensure id exists before fetching

    const fetchFood = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_WEB_URL}/api/foods/${id}`
        );
        const fetchedFood = res.data.data;
        setFood(fetchedFood);
        setTotalPrice(fetchedFood.price); // Set initial price
      } catch (error) {
        console.error("Error fetching food:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFood();
  }, [id]); // ✅ Dependency updated

  // Handle extra selection
  const handleExtraChange = (extra) => {
    let updatedExtras;
    let newPrice = totalPrice;

    if (selectedExtras.includes(extra.name)) {
      updatedExtras = selectedExtras.filter((item) => item !== extra.name);
      newPrice -= extra.price;
    } else {
      updatedExtras = [...selectedExtras, extra.name];
      newPrice += extra.price;
    }

    setSelectedExtras(updatedExtras);
    setTotalPrice(newPrice);
  };

  if (loading) {
    return <p className="text-center text-white dark:text-white bg-zinc-900 min-h-screen pt-32">Loading...</p>;
  }

  if (!food) {
    return <p className="text-center text-red-500">Food not found!</p>;
  }

  return (
    <div className="pt-20 bg-zinc-900 min-h-screen flex flex-col items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-black text-2xl font-bold mb-3">{food.name}</h1>
        <p className="text-gray-700 text-lg font-semibold mb-2">
          Total Price: <span className="text-green-600">৳{totalPrice}</span>
        </p>

        <img
          src={food.image}
          alt={food.name}
          className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
        />

        <div className="bg-gray-100 p-4 rounded-lg shadow-md text-left w-full">
          <h2 className="text-xl font-bold mb-2">Extras:</h2>
          {extras.map((extra) => (
            <label
              key={extra.name}
              className="flex justify-between border-b py-2 items-center cursor-pointer"
            >
              <span>{extra.name}</span>
              <span className="text-gray-500">{extra.price} TK</span>
              <input
                type="checkbox"
                className="ml-2"
                checked={selectedExtras.includes(extra.name)}
                onChange={() => handleExtraChange(extra)}
              />
            </label>
          ))}
        </div>

        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 mt-4 rounded-lg shadow-md transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ConfirmOrder;
