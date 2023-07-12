import Image from "next/image";
import React from "react";
import Carousel from "./Carousel";
import { Link, animateScroll as scroll } from "react-scroll";

const scrollDuration = 500; // Animation duration in milliseconds

function HeroSection() {
  return (
    <div className="w-screen md:h-screen md:pb-5 ">
      <div className="py-24 md:py-0 w-full md:h-full md:px-24">
        <div className="md:mt-3">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
