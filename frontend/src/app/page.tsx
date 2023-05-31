import Footer from "@/components/HomePage/Footer";
import HeroSection from "@/components/HomePage/HeroSection";
import Navbar from "@/components/HomePage/Navbar";
import Steps from "@/components/HomePage/Steps";
import Testimonial from "@/components/HomePage/Testimonial";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <Steps />
      <Testimonial />
      <Footer />
    </div>
  );
}
