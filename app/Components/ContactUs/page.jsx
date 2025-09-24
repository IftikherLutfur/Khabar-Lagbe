"use client";
import Image from "next/image";
import { FaBoxOpen, FaLocationArrow } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
    return (
        <div className="w-full min-h-screen bg-[#000000]">
            {/* Hero Section with Gradient Overlay */}
            <div className="relative overflow-hidden py-32 md:py-44">
                {/* Background Image */}
                <div className="absolute inset-0 bg-[url('https://santiagoresort.com/wp-content/uploads/2020/02/ISSUE27image3-1.jpg')] bg-cover bg-center"></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>

                {/* Content */}
                <div className="relative z-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl text-center text-white font-bold">
                        CONTACT US
                    </h1>
                </div>
            </div>

            {/* Contact Section */}
            <div className="py-8 px-4 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-7xl mx-auto">
                {/* div-1: Info */}
                <div className="flex-1">
                    <span className="text-white uppercase text-sm">KEEP CLOSE</span>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mt-2">Get In Touch</h1>
                    <p className="text-gray-300 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, sit. Odit ipsa voluptatibus optio. Officia, tenetur voluptatibus. Molestias ad dolore earum debitis necessitatibus praesentium! Sit dolore et laborum blanditiis ipsa.
                    </p>
                    <div className="text-white text-lg sm:text-xl font-semibold my-5">
                        <span className="flex items-center gap-3 my-3">
                             <FaLocationArrow className="text-2xl" /> Hungry Naki 
                             <br />
                            <span className="text-sm">Gazipur, Dhaka, Bangladesh</span>
                             </span>
                        <span className="flex items-center gap-3 my-3">
                             <IoIosCall className="text-2xl" /> +8801934-452096</span>
                        <span className="flex items-center gap-3 my-3">
                             <MdEmail className="text-2xl" /> hungryNaki@example.com</span>
                        <span className="flex items-center gap-3 my-3">
                             <FaBoxOpen className="text-2xl" />Open 10:00 AM | Close 11 PM</span>
                    </div>

                    <p className="text-white mb-2">Follow us</p>
                   <hr className="w-[67px]"/>
                    <div className="flex items-center gap-5 mt-5">
                        <Image
                        src={"https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" || ""}
                        alt="facebook logo"
                        width={24}
                        height={24}
                        className="rounded-full"
                        />
                        <Image
                        src={"https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebdd90aef8ef8c749e848_X-EverythingApp-Logo-Twitter.jpg" || ""}
                        alt="X logo"
                        width={24}
                        height={24}
                        className="rounded-full border border-white"
                        />
                        <Image 
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuH7c5cLpGehi0b4iQk90fXUzC9p7Ebla13w&s" || ""}
                        alt="instagram logo"
                        width={24}
                        height={24}
                        className="rounded-full"
                        />
                    
                    </div>

                </div>

                {/* div-2: Form */}
                <div className="flex-1">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-2">Your Details</h1>
                    <span className="text-white text-sm mb-4 inline-block">Let us know how to get back to you</span>
                    <form action="" className="flex flex-col gap-4">
                        {/* Name & Email */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <label htmlFor="Name" className="text-white text-sm">Name</label>
                                <input
                                    type="text"
                                    id="Name"
                                    className="w-full border border-white rounded-md p-2 mt-1 bg-transparent text-white placeholder-gray-400"
                                    placeholder="Write your name"
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="Email" className="text-white text-sm">Email Address</label>
                                <input
                                    type="email"
                                    id="Email"
                                    className="w-full border border-white rounded-md p-2 mt-1 bg-transparent text-white placeholder-gray-400"
                                    placeholder="Write your email"
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div>
                            <label htmlFor="Subject" className="text-white text-sm">Subject</label>
                            <input
                                type="text"
                                id="Subject"
                                className="w-full border border-white rounded-md p-2 mt-1 bg-transparent text-white placeholder-gray-400"
                                placeholder="Write the subject here"
                            />
                        </div>

                        {/* Comment/Question */}
                        <div>
                            <label htmlFor="Comment" className="text-white text-sm">Comment / Question</label>
                            <textarea
                                id="Comment"
                                className="w-full border border-white rounded-md p-2 mt-1 bg-transparent text-white placeholder-gray-400 resize-none"
                                placeholder="Write here..."
                                rows={5}
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-2 bg-yellow-400 text-black font-bold py-2 px-6 rounded-md hover:bg-yellow-500 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
