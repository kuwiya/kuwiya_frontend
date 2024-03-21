import './App.css';
import {
  BannerSection,
  CouponSection,
  FeaturedSection,
  Footer,
  HeroSection,
  InfoSection,
  MapSection,
  Navbar,
  PopularResturants,
} from './components';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <CouponSection />
      <PopularResturants />
      <InfoSection />
      <MapSection />
      <BannerSection />
      <Footer />
    </>
  );
}

export default App;
