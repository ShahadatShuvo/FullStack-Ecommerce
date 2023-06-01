import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Steps from "./Steps";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import NewArrival from "./NewArrival";

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <NewArrival />
      <Steps />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default HomePage;
