"use client";

import DiscoverMore from "./DiscoverMore";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import NewArrival from "./NewArrival";
import Steps from "./Steps";
import Testimonial from "./Testimonial";
import { useContext } from "react";
import { CartItemContext } from "@/app/context";

function HomePage() {
  const { isLoginComplete, checkLogin } = useContext(CartItemContext);
  console.log("isLoginComplete", isLoginComplete);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <NewArrival />
      <Steps />
      <DiscoverMore />
      <Testimonial />
    </div>
  );
}

export default HomePage;
