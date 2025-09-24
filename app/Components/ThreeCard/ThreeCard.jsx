import Image from "next/image";
import Link from "next/link";
import bunWithHoney from "../Pictures/Bun with honey.png";
import biriyani from "../Pictures/biriyani.png";
import dinner from "../Pictures/Background - 2025-03-20T162027.677.png";

const ThreeCard = () => {
  return (
    <div className="py-16 dark:text-white text-white bg-black">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-6xl mx-auto px-8">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-lg font-medium uppercase tracking-widest text-yellow-400">
            Discover
          </p>
          <h1 className="text-5xl uppercase text-white font-bold">
            𝕺𝖚𝖗 𝖒𝖊𝖓𝖚
          </h1>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 text-gray-300 mt-4 lg:mt-0">
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            voluptatum ullam temporibus, laboriosam praesentium dolor ducimus
            autem distinctio dicta unde hic nobis necessitatibus, incidunt
            voluptate est libero eligendi eaque! Nobis.
          </p>
        </div>
      </div>

      {/* Card Section */}

      {/* 1st Card */}
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-5xl mx-auto mt-10 p-6 bg-opacity-30 bg-gray-900 rounded-xl shadow-lg">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={bunWithHoney}
            width={350}
            height={250}
            alt="Bun with honey"
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content-1 */}
        <div className="w-full lg:w-1/2 text-center lg:text-left p-6">
          <h1 className="text-3xl font-semibold text-yellow-400">
            𝑭𝒂𝒃𝒖𝒍𝒐𝒖𝒔 𝑩𝒓𝒆𝒂𝒌𝒇𝒂𝒔𝒕
          </h1>
          <p className="font-medium text-gray-300 mt-2">
            Served the best food on the breakfast. Visit the menu to choose your
            perfect breakfast.
          </p>
          <Link href="/OnlineOrder">
            <button className="relative mt-4 px-5 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-md overflow-hidden group">
              <span className="absolute inset-0 bg-orange-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10">View Menu</span>
            </button>
          </Link>
        </div>
      </div>

      {/* 2nd Card */}

      <div className="flex flex-col lg:flex-row items-center justify-center max-w-5xl mx-auto mt-10 p-6 bg-opacity-30 bg-gray-900 rounded-xl shadow-lg">


        {/* Content-2 */}
        <div className="w-full lg:w-1/2 text-center lg:text-left p-6">
          <h1 className="text-3xl font-semibold text-yellow-400">
            𝑳𝒖𝒙𝒖𝒓𝒊𝒐𝒖𝒔 𝑳𝒖𝒏𝒄𝒉
          </h1>
          <p className="font-medium text-gray-300 mt-2">
            Enjoy a perfect lunch with a variety of dishes made with fresh ingredients.
          </p>
          <Link href="/OnlineOrder">
           <button className="relative mt-4 px-5 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-md overflow-hidden group">
              <span className="absolute inset-0 bg-orange-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10">View Menu</span>
            </button>
          </Link>
        </div>
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={biriyani}
            width={350}
            height={250}
            alt="Bun with honey"
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>


      {/* 3rd Card */}
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-5xl mx-auto mt-10 p-6 bg-opacity-30 bg-gray-900 rounded-xl shadow-lg">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={dinner}
            width={350}
            height={250}
            alt="Bun with honey"
            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content-3 */}
        <div className="w-full lg:w-1/2 text-center lg:text-left p-6">
          <h1 className="text-3xl font-semibold text-yellow-400">
            𝑬𝒍𝒆𝒈𝒂𝒏𝒕 𝑫𝒊𝒏𝒏𝒆𝒓

          </h1>
          <p className="font-medium text-gray-300 mt-2">
            End your day with a delightful dinner from our carefully crafted menu.
          </p>
          <Link href="/OnlineOrder">
          <button className="relative mt-4 px-5 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-md overflow-hidden group">
              <span className="absolute inset-0 bg-orange-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10">View Menu</span>
            </button>
          </Link>
        </div>
      </div>



    </div>
  );
};

export default ThreeCard;
