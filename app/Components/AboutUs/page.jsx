"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";

const AboutUs = () => {
    const [sliderRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 640px)": {
                slides: { perView: 2, spacing: 15 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 3, spacing: 20 },
            },
        },
        slides: { perView: 1, spacing: 10 },
        loop: true,
    });

    const teamMembers =
        [
            {

                role: "CEO",
                img: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?auto=format&fit=crop&w=772&q=80",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates.",
            },
            {
                role: "Manager",
                img: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?auto=format&fit=crop&w=772&q=80",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates.",
            },
            {
                role: "Server",
                img: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?auto=format&fit=crop&w=772&q=80",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates.",
            },
            {
                role: "Delivery Man",
                img: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?auto=format&fit=crop&w=772&q=80",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates.",
            },

        ]


    const storyCards = [
        {
            img: "https://res.cloudinary.com/dgisrhgoe/image/upload/v1755069994/pages13-aboutus-img1_eia60p.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet incidunt vero iste officia!",
        },
        {
            img: "https://res.cloudinary.com/dgisrhgoe/image/upload/v1755069994/pages13-aboutus-img2_ol85ae.jpg",
            text: "Beatae quibusdam repellendus sit, possimus eos deserunt eligendi, consequatur doloremque quaerat!",
        },
        {
            img: "https://res.cloudinary.com/dgisrhgoe/image/upload/v1755069994/pages13-aboutus-img3_qy67or.jpg",
            text: "Vel excepturi voluptatibus, recusandae exercitationem. Doloribus, quis!",
        },
    ];



    return (
        <div className="pt-10 min-h-screen bg-zinc-950">
            {/* Hero Section */}
            <section
                className="overflow-hidden bg-[url('https://santiagoresort.com/wp-content/uploads/2020/02/ISSUE27image3-1.jpg')] bg-cover bg-center"
            >
                <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24 text-center sm:text-left">
                    <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                        About Us
                    </h2>
                </div>
            </section>

            {/* Our Story Section */}
            <div className="mt-10 px-4">
                <h1 className="text-4xl font-bold text-center text-white">
                    Our Story
                </h1>
                <p className="text-center text-white  px-24">What began as a small kitchen dream has grown into a place where flavors meet passion. At HungryNaki, we believe food is more than just a meal — it’s an experience that brings people together. From early mornings preparing fresh ingredients to the last smile served at dinner, every dish tells a story of dedication, love, and craft.</p>
                <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap justify-center mt-5">
                    {storyCards.map((card, i) => (
                        <div
                            key={i}
                            className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden max-w-sm w-full sm:w-80 hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={card.img}
                                alt=""
                                className="w-full h-48 object-cover"
                            />
                            <p className="p-4 text-base">{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Our chief */}
            <section className=" px-24 py-16">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between pl-10">

                    {/* Left Content */}
                    <div className="flex-1 bg-black text-white">
                        <p className="uppercase text-sm tracking-widest ">Tasty and Crunchy</p>
                        <h2 className="text-5xl font-bold  mt-2">Our Chef</h2>
                        <p className=" mt-4">
                            Meet the heart of our kitchen — a master of flavors and creativity. With years of culinary expertise, our chef blends tradition and innovation to craft dishes that delight every palate. Each plate is a celebration of taste, artistry, and passion for food.
                        </p>
                        <Link href={"/Menu"}>
                            <button className="mt-6 px-6 py-3 border border-gray-300 bg-white text-black font-semibold shadow hover:bg-gray-200 transition">
                                View Our Menu
                            </button>
                        </Link>
                    </div>

                    {/* Right Image with Hover Effect */}
                    <div className="flex-1 flex justify-center">
                        <div className="relative w-[350px] h-[400px] group overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="https://res.cloudinary.com/dgisrhgoe/image/upload/v1755072347/home1-main-image-5_zimeyj.jpg" // replace with chef image
                                alt="Our Chef"
                                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50"
                            />

                            {/* Hover description */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 opacity-0 translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                <p className="text-lg font-semibold text-white">Chef John Doe</p>
                                <p className="text-sm text-gray-200 mt-2">
                                    Master chef with 20 years of experience in Italian cuisine,
                                    specializing in fresh pasta and gourmet desserts.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <div className=" px-10">
                <h1 className="text-4xl font-bold text-center text-white mb-8">
                    Meet Our Team
                </h1>
                <div className="grid grid-cols-4">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="keen-slider__slide flex">
                            <a
                                href="#"
                                className="group relative block w-[300px] bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                            >
                                <img
                                    alt={member.name}
                                    src={member.img}
                                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                                />
                                <div className="relative p-4">
                                    <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
                                        {member.role}
                                    </p>
                                    <p className="text-xl font-bold text-white">
                                        {member.name}
                                    </p>
                                    <div className="mt-32 sm:mt-48 lg:mt-64">
                                        <div className="translate-y-8 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                            <p className="text-sm text-white">{member.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default AboutUs;
