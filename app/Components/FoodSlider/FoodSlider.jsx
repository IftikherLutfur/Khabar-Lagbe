"use client"
import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../Style/style.css"

const carousel = (slider) => {
  const z = 300
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}

export default function FoodSlider() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  )

  const images = [
    "https://i.pinimg.com/736x/7e/88/47/7e8847374ccf2d27e72093901c158214.jpg",
    "https://i.pinimg.com/736x/19/64/50/196450fd47e222af245558f160913ff7.jpg",
    "https://i.pinimg.com/736x/82/75/69/8275699d93d465893799db4e95843308.jpg",
    "https://i.pinimg.com/736x/3d/6d/8b/3d6d8bd3f2460124fbeacf13aef6719d.jpg",
    "https://i.pinimg.com/736x/b1/4e/96/b14e967be4d2d4d121ec19d6de13ea7c.jpg",
    "https://i.pinimg.com/736x/91/f0/cb/91f0cbc6d7ae8aa17b2ec76200d69a8e.jpg",
    "https://i.pinimg.com/736x/4f/e0/95/4fe095c4d21dbd2ace384a9c07afe3ec.jpg"
  ];

  return (
    <div
      className="wrapper relative flex items-center justify-center h-[600px] bg-cover pb-10 bg-center"
      style={{
        backgroundImage:
          "url('https://galeriemagazine.com/wp-content/uploads/2021/11/NEW_MAIN_211107_F_KK_BG_0023_HighRes-1920x1200.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="scene relative z-10">
        <div
          className="carousel keen-slider mt-5 w-full max-w-2xl p-4 bg-white bg-opacity-80 rounded-lg shadow-lg"
          ref={sliderRef}
        >
          {images.map((image, i) => (
            <div key={i} className={`carousel__cell number-slide${i + 1} flex justify-center`}>
              <img
                className="h-80 w-full object-cover rounded-lg"
                src={image}
                alt={`Slide ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}