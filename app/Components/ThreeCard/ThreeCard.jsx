import Link from "next/link";

const ThreeCard = () => {
    return (
        <div className="py-8">
            {/* Title Section */}
            <div className="flex items-center justify-center px-8 md:px-36 py-4">
                <div className="flex-1 border-t border-orange-500"></div>
                <span className="mx-4 text-orange-500 font-bold text-lg md:text-xl">HAVE IT YOUR WAY</span>
                <div className="flex-1 border-t border-orange-500"></div>
            </div>

            {/* Cards Section */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-white">
                {/* Left Card */}
                <div className="bg-white w-full md:w-80 h-[400px] flex flex-col justify-center items-center rounded-lg transform transition-all duration-500 hover:scale-105 p-6">
                    <h1 className="uppercase text-black text-lg md:text-2xl font-bold">our menus</h1>
                    <p className="text-black text-opacity-75 my-3 text-sm md:text-base text-center">
                        Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste natus error sit.
                    </p>
                    <Link href="/Menu"><button className="bg-orange-400 rounded-sm text-sm md:text-xl font-bold px-4 py-2">
                        VIEW MENUS
                    </button></Link>
                </div>

                {/* Middle Image Card */}
                <div className="w-full md:w-80 h-[400px]">
                    <img
                        className="w-full h-full object-cover rounded-lg"
                        src="https://i.pinimg.com/736x/66/99/d9/6699d9685050b97dbf573cd91a336d2c.jpg"
                        alt="Delicious food"
                    />
                </div>

                {/* Right Card */}
                <div className="bg-zinc-200 w-full md:w-80 h-[400px] flex flex-col justify-center items-center rounded-lg p-6 transform transition-all duration-500 hover:scale-105">
                    <h1 className="uppercase text-black text-lg md:text-2xl font-bold">order online</h1>
                    <p className="text-black text-opacity-75 my-3 text-sm md:text-base text-center">
                        Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste natus error sit.
                    </p>
                    <Link href="/OnlineOrder"><button className="bg-black text-white rounded-sm text-sm md:text-xl font-bold px-4 py-2">
                        ORDER ONLINE
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default ThreeCard;
