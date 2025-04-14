"use client";
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const ShowCart = () => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const { data: session, status } = useSession();
    const email = session?.user?.email;

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_WEB_URL || process.env.NEXT_PUBLIC_DEPLOY_URL}/api/cart/find?email=${email}`);
                if (res.status === 200) {
                    setCart(res.data.cartItems);
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

    if (loading) return <p className="py-20">Loading your cart...</p>;

    return (
        <div className="py-20 px-5">
            <h2 className="text-2xl font-semibold mb-4">🛒 Your Cart</h2>
            {cart.length > 0 ? (
                <ul className="space-y-2">
                    {cart.map((item, index) => (
                        <li key={index} className="border p-3 rounded shadow">
                            <strong>{item.foodName}</strong> — Quantity: {item.amount}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No items in cart</p>
            )}
        </div>
    );
};

export default ShowCart;
