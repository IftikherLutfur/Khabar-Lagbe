
const ThreeCard = () => {
    return (
        <div className="py-4">
            <div class="flex items-center justify-center px-36 py-4">
                <div class="flex-1 border-t border-orange-500"></div>
                <span class="mx-4 text-orange-500 font-bold text-xl">HAVE IT YOUR WAY</span>
                <div class="flex-1 border-t border-orange-500"></div>
            </div>


            <div className="flex justify-center items-center text-white">

                {/* image card */}
                <div className="w-80">
                  <img className="w-80 rounded-l-md h-[400px]" src="https://i.pinimg.com/736x/66/99/d9/6699d9685050b97dbf573cd91a336d2c.jpg" alt="" />
                </div>

                {/* Menu card */}
                <div className="bg-white px-10 py-10 w-80">
                    <h1 className="uppercase text-black text-2xl font-bold ">
                        order online</h1>
                    <p className="text-black text-opacity-75 my-3 w-52">Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste natus error sit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                    <button className="bg-orange-400 rounded-sm text-xl font-bold p-2">VIEW MENUS</button>
                </div>

                {/* Order card */}
                <div className="bg-zinc-200 px-10 py-10 rounded-r-md w-80">
                    <h1 className="uppercase text-black text-2xl font-bold ">
                        order online</h1>
                    <p className="text-black text-opacity-75 my-3 w-52">Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste natus error sit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                    <button className="bg-black rounded-sm text-xl font-bold p-2">ORDER ONLINE</button>
                </div>
            </div>

        </div>
    );
};

export default ThreeCard;