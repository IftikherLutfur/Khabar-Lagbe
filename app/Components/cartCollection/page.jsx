"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaRegTrashCan } from "react-icons/fa6";

const ShowCart = () => {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();
  const email = session?.user?.email;

  const subtotal = cart.reduce((acc, item) => acc + parseFloat(item.amount), 0);
  const tax = subtotal * 0.05;
  const deliveryCharge = 20;
  const grandTotal = subtotal + tax + deliveryCharge;

  const handleForOpen = () => setIsOpen(true);
  const handleForClose = () => setIsOpen(false);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/cart/find?email=${email}`
        );
        if (res.status === 200) {
          setCart(res.data.cartItems);
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

  const handleForDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/cart/delete/${id}`
      );
      if (res.status === 200) {
        setCart((prevCart) => prevCart.filter((item) => item._id !== id));
        toast.success("Item removed");
      }
    } catch (error) {
      console.log(error, "Failed to delete");
    }
  };

  const handleForCheckout = async () => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/cart/clearByEmail/${email}`
      );
      console.log(res.data)
      if (res.data.success) {
        setCart([]);
        toast.success("Payment successful 🎉");
        setTimeout(()=>{
            setIsOpen(false);
        },2000)
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  if (loading)
    return <p className="py-20 text-center text-gray-600">Loading your cart...</p>;

  return (
    <div className="py-16 px-5 min-h-screen bg-gray-50">
      {/* Checkout Sidebar */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white shadow-2xl z-50 p-6 overflow-y-auto">
          <h2 className="text-xl font-bold mb-6">💳 Payment Summary</h2>

          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <p>Food Price</p>
              <p>{subtotal} BDT</p>
            </div>
            <div className="flex justify-between">
              <p>Tax (5%)</p>
              <p>{tax.toFixed(2)} BDT</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery Charge</p>
              <p>{deliveryCharge} BDT</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-bold text-lg">
              <p>Total</p>
              <p>{grandTotal.toFixed(2)} BDT</p>
            </div>
          </div>

          <button
            onClick={handleForCheckout}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 mt-6 font-semibold rounded-md shadow"
          >
            Confirm & Pay
          </button>
          <Toaster position="bottom-center" reverseOrder={false} />
          <button
            onClick={handleForClose}
            className="w-full bg-gray-200 hover:bg-gray-300 text-black py-2 mt-3 font-medium rounded-md"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Cart Items */}
      <h2 className="text-2xl font-bold mb-6">🛒 Your Cart ({cart.length} items)</h2>

      {cart.length > 0 ? (
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-sm">
              <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                <tr>
                  <th className="p-3 border-b">#</th>
                  <th className="p-3 border-b">Food</th>
                  <th className="p-3 border-b">Price (৳)</th>
                  <th className="p-3 border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-3 border-b">{index + 1}</td>
                    <td className="p-3 border-b font-medium">{item.foodName}</td>
                    <td className="p-3 border-b">{item.amount}</td>
                    <td className="p-3 border-b text-red-500 text-lg">
                      <button
                        onClick={() => handleForDelete(item._id)}
                        className="hover:text-red-700"
                      >
                        <FaRegTrashCan />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Summary */}
          <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-t">
            <p className="text-lg font-semibold text-gray-800">
              Total: ৳ {subtotal}
            </p>
            <button
              onClick={handleForOpen}
              className="mt-3 sm:mt-0 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded shadow"
            >
              Pay Now
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <p className="text-gray-600">No items in your cart 🛍️</p>
        </div>
      )}
    </div>
  );
};

export default ShowCart;
