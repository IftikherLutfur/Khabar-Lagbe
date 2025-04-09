"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation"; // ✅ Import useParams()
import Link from "next/link";
import { useSession } from "next-auth/react";

const ConfirmOrder = () => {
    const { id } = useParams(); // ✅ Get id correctly
    const [food, setFood] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedExtras, setSelectedExtras] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [extraQuantities, setExtraQuantities] = useState({ Water: 1, Coke: 1, Vegetables: 1 });

    const session = useSession()
    console.log(session?.data?.user?.email);


    // Extra items with prices
    const extras = [
        { name: "Salad", price: 0 },
        { name: "Vegetables", price: 40 },
        { name: "Water", price: 20 },
        { name: "Coke", price: 20 },
    ];

    useEffect(() => {
        if (!id) return;

        const fetchFood = async () => {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_WEB_URL}/api/foods/${id}`
                );
                console.log(`${process.env.NEXT_PUBLIC_WEB_URL}/api/foods/${id}`);

                const fetchedFood = res.data.data;
                console.log(res.data);

                setFood(fetchedFood);
                setTotalPrice(fetchedFood.price);
            } catch (error) {
                console.error("Error fetching food:", error.response ? error.response.data : error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFood();
    }, [id]);




    // const handlePayment = async () => {
    //     try {
    //       if (!totalPrice || totalPrice <= 0) {
    //         console.error("Invalid total price:", totalPrice);
    //         return alert("Total price must be greater than 0!");
    //       }

    //       const customerDetails = {
    //         name: "Customer",  // replace with actual customer name
    //         email: "customer@example.com",  // replace with actual customer email
    //         address1: "Dhaka",  // replace with actual customer address
    //         phone: "01700000000",  // replace with actual phone number
    //         city: "Dhaka",  // replace with actual city
    //       };

    //       const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_URL}/api/payment`, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //           totalPrice,
    //           productName: "Product Name",  // Example product name
    //           customerDetails,
    //         }),
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //       });

    //       const data = await response.json();

    //       if (data?.url) {
    //         window.location.href = data.url; // Redirect to Mobile Banking payment page
    //       } else {
    //         console.error("Failed to get mobile banking payment URL:", data);
    //         alert("Payment initiation failed. Please try again.");
    //       }

    //     } catch (error) {
    //       console.error("Payment error:", error);
    //       alert("Something went wrong while processing the payment.");
    //     }

    // window.location.href = mblBankingUrl.gateway_url

    //   };


    // handle fot add to cart
    const handleForAddToCart =async (totalPrice, food) => {
        console.log(totalPrice);
        console.log(session?.user?.email);

        console.log(food.name);
       try {
        const cartDetails = {
            amount: totalPrice,
            foodName: food.name,
            userEmail: session?.data?.user?.email

        }

        const res = await axios.post(`${process.env.NEXT_PUBLIC_WEB_URL}/api/cart/post`, cartDetails)
        if(res.status=== 200)
            alert("Item added successfully")
        else{
            alert("Somthing went wrong")
        }
       } catch (error) {
        console.error("Error adding data")
       }


    }

    // Handle quantity change
    const handleQuantity = async (type) => {
        let newQuantity = type === "increase" ? quantity + 1 : quantity - 1;
        if (newQuantity >= 1 && newQuantity <= 5) {
            setQuantity(newQuantity);
            setTotalPrice(food.price * newQuantity + calculateExtrasPrice());
        }
    };

    // Handle extra selection
    const handleExtraChange = (extra) => {
        let updatedExtras = selectedExtras.includes(extra.name)
            ? selectedExtras.filter((item) => item !== extra.name)
            : [...selectedExtras, extra.name];

        setSelectedExtras(updatedExtras);
        setTotalPrice(food.price * quantity + calculateExtrasPrice(updatedExtras));
    };

    // Handle extra quantity change
    const handleExtraQuantity = (extraName, type) => {
        let newQuantities = { ...extraQuantities };
        let newQuantity = type === "increase" ? newQuantities[extraName] + 1 : newQuantities[extraName] - 1;

        if (newQuantity >= 0 && newQuantity <= 5) {
            newQuantities[extraName] = newQuantity;
            setExtraQuantities(newQuantities);
            setTotalPrice(food.price * quantity + calculateExtrasPrice(selectedExtras, newQuantities));
        }
    };

    // Calculate total extra price
    const calculateExtrasPrice = (extrasList = selectedExtras, extraQty = extraQuantities) => {
        return extrasList.reduce((sum, extraName) => {
            let extra = extras.find((e) => e.name === extraName);
            return sum + (extra.price * (extraQty[extraName] || 1));
        }, 0);
    };

    if (loading) {
        return <p className="text-center text-white dark:text-white bg-zinc-900 min-h-screen pt-32">Loading...</p>;
    }

    if (!food) {
        return <p className="text-center text-red-500">Food not found!</p>;
    }

    return (
        <div className="pt-20 bg-zinc-900 min-h-screen flex pb-10 flex-col items-center">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center transform transition-all duration-500 hover:scale-105">
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
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-lg font-bold">Quantity:</span>
                        <div className="flex items-center">
                            <button className="bg-red-500 px-2 py-1 text-white rounded-md" onClick={() => handleQuantity("decrease")}>-</button>
                            <span className="mx-3">{quantity}</span>
                            <button className="bg-green-500 px-2 py-1 text-white rounded-md" onClick={() => handleQuantity("increase")}>+</button>
                        </div>
                    </div>

                    <h2 className="text-xl font-bold mb-2">Extras:</h2>
                    {extras.map((extra) => (
                        <div key={extra.name} className="flex justify-between border-b py-2 items-center">
                            <label className="flex-grow cursor-pointer">{extra.name}</label>
                            <span className="text-gray-500">{extra.price} TK</span>
                            <input
                                type="checkbox"
                                className="ml-2"
                                checked={selectedExtras.includes(extra.name)}
                                onChange={() => handleExtraChange(extra)}
                            />
                            {(extra.name === "Water" || extra.name === "Coke" || extra.name === "Vegetables") && selectedExtras.includes(extra.name) && (
                                <div className="flex items-center ml-4">
                                    <button className="bg-red-500 px-2 py-1 text-white rounded-md" onClick={() => handleExtraQuantity(extra.name, "decrease")}>-</button>
                                    <span className="mx-2">{extraQuantities[extra.name]}</span>
                                    <button className="bg-green-500 px-2 py-1 text-white rounded-md" onClick={() => handleExtraQuantity(extra.name, "increase")}>+</button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <button onClick={() => handleForAddToCart(totalPrice, food)} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 mt-4 rounded-lg shadow-md transition">
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ConfirmOrder;



