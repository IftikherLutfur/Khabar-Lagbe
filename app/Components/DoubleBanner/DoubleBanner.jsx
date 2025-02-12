const DoubleBanner = () => {
    return (
      <div className="px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  
          {/* First image div */}
          <div>
            <img
              className="h-[300px] md:h-[400px] lg:h-[600px] w-full object-cover"
              src="https://i.pinimg.com/736x/a8/00/5d/a8005dea85c5ff3e559a6462c357ecdd.jpg"
              alt="Tomato Sauce"
            />
          </div>
  
          {/* First text div */}
          <div className="bg-white text-black py-8 px-4 md:px-16 lg:py-16">
            <div className="flex items-center justify-center py-4">
              <div className="flex-1 border-t-2 border-black"></div>
              <span className="mx-4 text-black font-bold text-xl md:text-2xl">Present</span>
              <div className="flex-1 border-t-2 border-black"></div>
            </div>
            <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold">
              Tomato Original <br />
              <span className="text-red-400">Sauce</span>
            </h1>
            <p className="text-lg md:text-xl font-bold uppercase text-center mt-5 mb-6">
              OUR SIGNATURE HANDMADE BEEF PATTY
            </p>
            <p className="text-center text-sm md:text-base lg:px-12">
              Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste natus error sit.
            </p>
            <div className="flex justify-center mt-8">
              <button className="bg-red-600 font-bold text-white text-lg md:text-xl px-6 py-2 rounded-sm">
                VIEW MENUS
              </button>
            </div>
          </div>
  
          {/* Second text div */}
          <div className="bg-black text-white py-8 px-4 md:px-16 lg:py-16">
            <div className="flex items-center justify-center py-4">
              <div className="flex-1 border-t-2 border-white"></div>
              <span className="mx-4 text-white font-bold text-xl md:text-2xl">Always</span>
              <div className="flex-1 border-t-2 border-white"></div>
            </div>
            <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-green-400">Fresh</span> <br /> Salad
            </h1>
            <p className="text-lg md:text-xl font-bold uppercase text-center mt-5 mx-4 md:mx-8 lg:mx-16 mb-6">
              Life is like a burger; the more you add to it, the better it becomes
            </p>
            <p className="text-center text-sm md:text-base lg:px-12">
              Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste natus error sit.
            </p>
            <div className="flex justify-center mt-8">
              <button className="bg-green-600 font-bold text-white text-lg md:text-xl px-6 py-2 rounded-sm">
                VIEW MENUS
              </button>
            </div>
          </div>
  
          {/* Second image div */}
          <div>
            <img
              className="h-[300px] md:h-[400px] lg:h-[600px] w-full object-cover"
              src="https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg"
              alt="Fresh Salad"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default DoubleBanner;
  