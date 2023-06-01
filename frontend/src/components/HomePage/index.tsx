import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Steps from "./Steps";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Steps />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default HomePage;
