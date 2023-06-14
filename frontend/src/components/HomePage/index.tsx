import DiscoverMore from "./DiscoverMore";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import NewArrival from "./NewArrival";
import Steps from "./Steps";
import Testimonial from "./Testimonial";

function HomePage() {
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
