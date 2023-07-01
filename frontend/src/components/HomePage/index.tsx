"use client";

import DiscoverMore from "./DiscoverMore";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import NewArrival from "./NewArrival";
import Steps from "./Steps";
import Testimonial from "./Testimonial";
import { useContext } from "react";
import { CartItemContext } from "@/app/context";
import AuthSuccess from "../Accounts/AuthSuccess";

function HomePage() {
  const { isLoginComplete, checkLogin } = useContext(CartItemContext);
  console.log("isLoginComplete", isLoginComplete);

  return (
    <div>
      {isLoginComplete && (
        <AuthSuccess
          msg="Login Successfully Completed!"
          type="success"
          show={2}
        />
      )}
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
