import { getServerSession } from "next-auth";
import React from "react";
import { authOption } from "../api/auth/[...nextauth]/route";

const BookProgram =async () => {

  const session = await getServerSession(authOption)
  console.log({session});
  

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative py-12"
      style={{
        backgroundImage: "url('https://www.batihanvadi.com/content-image/galleries/auto-auto/113.jpg')",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative w-full max-w-lg backdrop-blur-sm shadow-lg rounded-lg p-6">
        <h1 className="text-gray-200 text-center text-2xl font-bold mb-6">
          Confirm Booking
        </h1>

        <form className="space-y-4">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full bg-gray-700 text-white border border-gray-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full bg-gray-700 text-white border border-gray-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email (Optional)"
            className="w-full bg-gray-700 text-white border border-gray-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Date & Time */}
          <div className="flex space-x-2">
            <input
              type="date"
              name="date"
              required
              className="w-1/2 bg-gray-700 text-white border border-gray-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="time"
              name="time"
              required
              className="w-1/2 bg-gray-700 text-white border border-gray-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Duration */}
          <select
            name="duration"
            className="w-full bg-gray-700 text-white border border-gray-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="2 hours">2 Hours</option>
            <option value="4 hours">4 Hours</option>
            <option value="Full Day">Full Day</option>
          </select>

          {/* Seating Preference */}
          <div className="flex space-x-4 text-gray-300">
            <label className="flex items-center">
              <input
                type="radio"
                name="seating"
                value="Indoor"
                className="mr-2"
              />
              Indoor
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="seating"
                value="Outdoor"
                className="mr-2"
              />
              Outdoor
            </label>
          </div>

          {/* Special Request */}
          <textarea
            name="specialRequest"
            placeholder="Special Requests (Optional)"
            className="w-full bg-gray-700 text-white border border-gray-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookProgram;
