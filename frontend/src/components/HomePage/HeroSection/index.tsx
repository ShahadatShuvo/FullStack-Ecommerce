"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://i.ibb.co/j8G3k01/Enjoy-the-best-shopping-experience-with-us.png",
    "https://i.ibb.co/qJdhL8n/hero-Img-No-Text2.png",
    "https://i.ibb.co/kcWpz4C/hero-Img-No-Text3.png",
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
  }, []);

  return (
    <div className="relative">
      <img
        src={images[currentImage]}
        alt="Carousel Image"
        className="max-h-full w-full object-cover"
      />
      <div className=" space-y-6 my-10 absolute top-4 md:top-16 lg:top-32 left-4 md:left-10 right-64 lg:right-[600px]">
        <h2 className="text-blue-950 text-2xl md:text-5xl lg:text-6xl font-bold break-words">
          {texts[currentImage]}
        </h2>
        <Link href="/">
          <button className="mt-4 my-8 bg-blue-950 text-white rounded-3xl py-2 px-4 ">
            Explore Now
          </button>
        </Link>
      </div>
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
