"use client"
import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const AboutUs = () => {

    const [sliderRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 400px)": {
                slides: { perView: 2, spacing: 5 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 3, spacing: 10 },
            },
        },
        slides: { perView: 1 },
    })
    return (
        <div className="pt-20 pb-10 min-h-screen px-5 bg-[#08252b] lg:px-20">
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row gap-10 items-center">
                {/* Text Section */}
                <div className="flex-1 bg-gray-100 p-6 rounded-md hover:border-2 border-orange-400 shadow-lg">
                    <h1 className="text-3xl font-bold text-orange-500">HungryNaki</h1>
                    <p className="text-lg font-semibold mb-3 text-gray-700">How it started</p>
                    <p className="text-gray-600 text-justify">
                        Our journey began with a simple yet ambitious dream—to create a place where people could enjoy high-quality food with a unique experience.
                        HungryNaki started as a small, family-like restaurant, fueled by our passion for delicious food and warm hospitality.
                        <br /><br />
                        In the early days, we operated from a modest space with a limited menu, focusing on a few carefully crafted dishes that showcased our love for flavors.
                        Despite the challenges, our dedication to excellence and customer satisfaction kept us going. Today, we continue to bring flavors to your doorstep,
                        staying true to the dream that started it all.
                    </p>
                </div>



                {/* Image Section */}
                <div className="w-full lg:w-[610px]">
                    <img
                        className="w-full h-[300px] object-cover rounded-md shadow-md"
                        src="https://i.pinimg.com/736x/25/5a/91/255a91d0fbccefa6cc064836fe46a9c4.jpg"
                        alt="HungryNaki Restaurant"
                    />

                    {/* Status */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center mt-3 bg-white p-4 rounded-md shadow-md">
                        <div className="bg-orange-500 font-bold text-white p-3 rounded-md shadow-sm">
                            <span className="text-xl">1K+</span> <br />
                            Happy Customers
                        </div>
                        <div className="bg-orange-500 font-bold text-white p-3 rounded-md shadow-sm">
                            <span className="text-xl">500+</span> <br />
                            Reviews
                        </div>
                        <div className="bg-orange-500 font-bold text-white p-3 rounded-md shadow-sm">
                            <span className="text-xl">50+</span> <br />
                            Food Items
                        </div>
                        <div className="bg-orange-500 font-bold text-white p-3 rounded-md shadow-sm">
                            On-time <br />
                            Delivery
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Story */}
            <div className="mt-16 text-center my-5">
                <h2 className="text-3xl font-bold text-orange-500">Our Story</h2>
                <p className="mt-4 text-gray-300 mx-auto max-w-3xl">
                    Started in 2019, HungryNaki was born out of a passion for great food and exceptional service.
                    We have grown from a small restaurant into a trusted name among food lovers. In 2020, during the COVID-19 quarantine, we expanded into online food delivery, allowing customers to conveniently order their favorite meals from home.
                </p>
            </div>
            <hr />
            {/* Customer reviews */}

            <div className="my-5">
    <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-6">
        What Our Clients Say
    </h1>

    <div ref={sliderRef} className="keen-slider flex gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="keen-slider__slide text-white border-2 rounded-md text-center p-6 flex flex-col items-center max-w-[350px] mx-auto">
                <p className="mb-4">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati impedit soluta placeat iure, animi, eius explicabo porro molestiae, officia fugiat asperiores voluptate numquam excepturi rerum architecto quo earum possimus commodi."
                </p>
                <img className="w-[55px] h-[55px] rounded-full border-[2px] mt-3" src="" alt="User" />
                <h1 className="text-xl font-bold mt-2">John Doe</h1>
                <p className="text-sm text-gray-300"><em>23/03/24 | 23:00</em></p>
            </div>
        ))}
    </div>
</div>

            {/* Mission & Vision */}
            <div className="mt-12 text-center">
                <h2 className="text-3xl font-bold text-orange-500">Mission & Vision</h2>
                <p className="mt-4 text-gray-300 mx-auto max-w-3xl">
                    <strong>Mission:</strong> Our mission is to deliver fresh, delicious, and high-quality meals to everyone while maintaining exceptional taste and hygiene standards. We are committed to using the finest ingredients, ensuring customer satisfaction, and making every meal a delightful experience. Our goal is to bring convenience to food lovers by providing fast, reliable, and top-notch food delivery services.

                    <br />
                    <strong>Vision:</strong> T Our vision is to become the leading food delivery service in the country, recognized for our excellence in taste, quality, and customer service. We aim to build a strong community of satisfied customers by continuously innovating, expanding our reach, and setting new benchmarks in the food industry. Through dedication and passion, we strive to create a seamless and enjoyable dining experience for all.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
