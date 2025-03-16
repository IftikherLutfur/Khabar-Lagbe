import Image from "next/image";
import HomeComponent from "./Components/HomeComponent/HomeComponent";
import FoodSlider from "./Components/FoodSlider/FoodSlider";
import ThreeCard from "./Components/ThreeCard/ThreeCard";
import DoubleBanner from "./Components/DoubleBanner/DoubleBanner";
import Title from "./Components/Title/Title";
import Link from "next/link";
import FAQ from "./Components/FAQ/FAQ";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#08252b] font-[family-name:var(--font-geist-sans)]">

     <HomeComponent/>
     <FoodSlider/>
     <div className="mt-5">
     <div className="text-center">
        <p className='text-xl font-bold text-orange-400'>──────────Book your program──────────</p>
        <h1 className='text-4xl md:text-5xl uppercase font-bold my-4 text-white cursor-pointer'><Link href={'/BookProgram'}>Book</Link></h1>
        <p className='text-xl font-bold text-orange-400'>/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /</p>
       
      </div>
      </div> 
     <ThreeCard/> 
     <FAQ/>
     <DoubleBanner/>
 
    </div>
  );
}
