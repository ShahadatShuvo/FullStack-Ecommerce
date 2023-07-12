"use client";

import DiscoverMore from "./DiscoverMore";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NewArrival from "./NewArrival";
import Steps from "./Steps";
import Testimonial from "./Testimonial";
import HeroSection from "./heroSection/HeroSection";
import TrendingProducts from "./trendingProducts/TrendingProducts";

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TrendingProducts />
      <DiscoverMore />
      <NewArrival />
      <Steps />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default HomePage;
