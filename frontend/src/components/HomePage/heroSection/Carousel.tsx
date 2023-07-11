/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
// import { Link as ScrollLink } from "react-scroll";

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/img/banner/banner1.png",
    "/img/banner/banner2.png",
    "/img/banner/banner3.png",
  ];

  const texts = [
    "Exclusive collection for everyone",
    "Start shopping from home instantly",
    "New Products added every minute",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="relative  md:w-full ">
      <img
        src={images[currentImage]}
        alt="Carousel Image"
        height={50}
        width={50}
        className="max-h-full w-full md:object-cover object-fill"
      />
      <div className="mt-10 md:mt-0 space-y-6 md:my-10 my-0 absolute top-5 lg:top-32 left-2 md:left-10 right-48 lg:right-[600px]">
        <h2 className="text-blue-950 text-sm font-serif md:text-5xl lg:text-6xl font-bold break-words">
          {texts[currentImage]}
        </h2>

        <Button
          variant="contained"
          className="text-sm md:text-lg rounded-full bg-black"
        >
          <a href="/">Explore Now</a>
        </Button>
      </div>
      <div className="absolute -bottom-16 md:bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentImage ? "bg-gray-900" : "bg-gray-400"
            }`}
          ></button>
          // <div></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
