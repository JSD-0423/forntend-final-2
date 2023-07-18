import NewArrivalsSection from "./new-arrivals-section";
import BrandsSection from "./brands-section";
import HandPickedSection from "./handpicked-section";
import Banner from "./banner-section";
import HeroSection from "../../components/hero-section";

const Home = () => {
  return (
    <>
      <HeroSection />
      <NewArrivalsSection />
      <HandPickedSection />
      <BrandsSection />
      <Banner />
    </>
  );
};

export default Home;
