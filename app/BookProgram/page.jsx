import { getServerSession } from "next-auth";
import React from "react";
import { authOption } from "../api/auth/[...nextauth]/route";

const BookProgram = async () => {
  const session = await getServerSession(authOption);
  console.log({ session });

  return (
    <div
      className="min-h-screen bg-fixed flex items-center justify-center bg-cover bg-center relative py-12 px-4"
      style={{ backgroundImage: "url('https://www.batihanvadi.com/content-image/galleries/auto-auto/113.jpg')" }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative w-full max-w-xl bg-white/10 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-gray-200/30">
        <h1 className="text-white text-center text-3xl font-extrabold tracking-wider mb-2 uppercase">
          Reservation
        </h1>
        <p className="text-center text-gray-300 text-sm font-light mb-6">
          Secure your table now
        </p>

        <form className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full bg-transparent text-white border border-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full bg-transparent text-white border border-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email (Optional)"
            className="w-full bg-transparent text-white border border-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <div className="flex space-x-4">
            <input
              type="date"
              name="date"
              required
              className="w-1/2 bg-transparent text-white border border-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="time"
              name="time"
              required
              className="w-1/2 bg-transparent text-white border border-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <select
            name="duration"
            className="w-full bg-transparent text-white border border-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="2 hours">2 Hours</option>
            <option value="4 hours">4 Hours</option>
            <option value="Full Day">Full Day</option>
          </select>

          <div className="flex justify-between text-gray-300">
            <label className="flex items-center space-x-2">
              <input type="radio" name="seating" value="Indoor" className="accent-yellow-400" />
              <span>Indoor</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="seating" value="Outdoor" className="accent-yellow-400" />
              <span>Outdoor</span>
            </label>
          </div>

          <textarea
            name="specialRequest"
            placeholder="Special Requests (Optional)"
            className="w-full bg-transparent text-white border border-gray-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button
            type="submit"
            className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Book a Table
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookProgram;