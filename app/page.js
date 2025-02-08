import Image from "next/image";
import HomeComponent from "./Components/HomeComponent/HomeComponent";
import FoodSlider from "./Components/FoodSlider/FoodSlider";

export default function Home() {
  return (
    <div className="min-h-screen text-black font-[family-name:var(--font-geist-sans)]">

     <HomeComponent/>
     <FoodSlider/>  
    </div>
  );
}
