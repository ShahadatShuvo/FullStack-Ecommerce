import DiscoverMore from "./DiscoverMore";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import NewArrival from "./NewArrival";
import ProductDisplay from "./ProductsDisplay";
import ProductContainer from "./ProductsDisplay";
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
      <ProductContainer />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default HomePage;
