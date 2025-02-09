import Image from "next/image";
import HomeComponent from "./Components/HomeComponent/HomeComponent";
import FoodSlider from "./Components/FoodSlider/FoodSlider";
import ThreeCard from "./Components/ThreeCard/ThreeCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 font-[family-name:var(--font-geist-sans)]">

     <HomeComponent/>
     <FoodSlider/>
     <ThreeCard/>  
    </div>
  );
}
