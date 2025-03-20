"use client"
import { useKeenSlider } from 'keen-slider/react';
import React from 'react';


const FAQ = () => {
   const [sliderRef] = useKeenSlider({
          breakpoints: {
              "(min-width: 400px)": {
                  slides: { perView: 2, spacing: 5 },
              },
              "(min-width: 1000px)": {
                  slides: { perView: 3, spacing: 10 },
              },
          },
          slides: { perView: 1 },
      })
    return (
        <div className='py-10 bg-zinc-950'>
           <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-6">
           𝑾𝒉𝒂𝒕 𝑶𝒖𝒓 𝑪𝒍𝒊𝒆𝒏𝒕𝒔 𝑺𝒂𝒚
    </h1>
             <div ref={sliderRef} className="keen-slider flex gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="keen-slider__slide text-white border-2 rounded-md text-center p-6 flex flex-col items-center max-w-[350px] mx-auto">
                <p className="mb-4">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati impedit soluta placeat iure, animi, eius explicabo porro molestiae, officia fugiat asperiores voluptate numquam excepturi rerum architecto quo earum possimus commodi."
                </p>
                <img className="w-[55px] h-[55px] rounded-full border-[2px] border-yellow-400 mt-3" src="" alt="User" />
                <h1 className="text-xl font-bold mt-2">John Doe</h1>
                <p className="text-sm text-gray-300"><em>23/03/24 | 23:00</em></p>
            </div>
        ))}
    </div>
    
        </div>
    );
};

export default FAQ;