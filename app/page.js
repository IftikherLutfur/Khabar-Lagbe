import Image from "next/image";
import HomeComponent from "./Components/HomeComponent/HomeComponent";
import FoodSlider from "./Components/FoodSlider/FoodSlider";
import ThreeCard from "./Components/ThreeCard/ThreeCard";
import DoubleBanner from "./Components/DoubleBanner/DoubleBanner";
import Link from "next/link";
import FAQ from "./Components/FAQ/FAQ";
import DaliciousStory from "./Components/DaliciousStory/DaliciousStory";
import BookProgram from "./BookProgram/page";
// bg-[#08252b]

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 font-[family-name:var(--font-geist-sans)]">

     <HomeComponent/>
     <DaliciousStory/>
     <FoodSlider/>
    
     <ThreeCard/> 
     <FAQ/>
     <DoubleBanner/>
     <BookProgram/>
 
    </div>
  );
}
