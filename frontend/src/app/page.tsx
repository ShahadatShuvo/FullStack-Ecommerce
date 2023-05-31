import HeroSection from "@/components/HomePage/HeroSection";
import Navbar from "@/components/HomePage/Navbar";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
    </div>
  );
}
