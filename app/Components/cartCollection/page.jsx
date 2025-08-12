"use client";
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const ShowCart = () => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const { data: session } = useSession();
    const email = session?.user?.email;
    console.log(email);

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/cart/find?email=${email}`);
                if (res.status === 200) {
                    setCart(res.data.cartItems);
                    console.log(res.data);
                } else {
                    console.warn("No cart items found");
                }
            } catch (error) {
                console.error("Error fetching cart data:", error);
            } finally {
                setLoading(false);
            }
        };

        if (email) {
            fetchCartData();
        }
    }, [email]);

    if (loading) return <p className="py-20 text-center">Loading your cart...</p>;

    return (
        <div className="py-20 px-5">
            <h2 className="text-2xl font-semibold mb-4">🛒 Your Cart ({cart.length} items)</h2>

            {cart.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="p-3 border-b">#</th>
                                <th className="p-3 border-b">Food</th>
                                <th className="p-3 border-b">Price (৳)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="p-3 border-b">{index + 1}</td>
                                    <td className="p-3 border-b">{item.foodName}</td>
                                    <td className="p-3 border-b">{item.amount}</td>
                                    
                                </tr>
                            
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-end mt-4">
    <div className="text-right space-y-2">
        <p className="text-lg font-semibold">Total: ৳
            {cart.reduce((acc, item) => acc + parseFloat(item.amount), 0)}
        </p>
        <button className="px-5 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded shadow">
            Pay Now
        </button>
    </div>
</div>
                </div>
            ) : (
                <p>No items in cart</p>
            )}
        </div>
    );
};

export default ShowCart;
