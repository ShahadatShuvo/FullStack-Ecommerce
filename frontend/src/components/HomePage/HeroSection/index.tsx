"use client";
import { useEffect, useState } from "react";

function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://i.ibb.co/t2WnQ9v/hero-Img-Final2.png",
    "https://i.ibb.co/jfXTMZ8/hero-Img-Final1.png",
    "https://i.ibb.co/7J99yrZ/hero-Img-Final3.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative">
      <img
        src={images[currentImage]}
        alt="Carousel Image"
        className="max-h-full w-full object-cover"
      />
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentImage ? "bg-gray-900" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
