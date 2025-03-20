import Image from "next/image";
import HomeComponent from "./Components/HomeComponent/HomeComponent";
import FoodSlider from "./Components/FoodSlider/FoodSlider";
import ThreeCard from "./Components/ThreeCard/ThreeCard";
import DoubleBanner from "./Components/DoubleBanner/DoubleBanner";
import Link from "next/link";
import FAQ from "./Components/FAQ/FAQ";
import DaliciousStory from "./Components/DaliciousStory/DaliciousStory";
// bg-[#08252b]

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 font-[family-name:var(--font-geist-sans)]">

     <HomeComponent/>
     <DaliciousStory/>
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
