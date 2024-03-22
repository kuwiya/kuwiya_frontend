import "./App.css";
import {
  BannerSection,
  CitiesAndCountries,
  CouponSection,
  FeaturedSection,
  Footer,
  HeroSection,
  InfoSection,
  Navbar,
  PopularResturants,
} from "./components";
import NearMeSection from "./components/near-me_section";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <CouponSection />
      <PopularResturants />
      <InfoSection />
      <BannerSection />
      <NearMeSection />
      <CitiesAndCountries />
      <Footer />
    </>
  );
}

export default App;
