import React from "react";
import {
  BannerSection,
  CitiesAndCountries,
  CouponSection,
  FeaturedSection,
  Footer,
  HeroSection,
  InfoSection,
  Navbar,
  NearmeSection,
  PopularResturants,
} from "../index";

const Homepage = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <CouponSection />
      <PopularResturants />
      <InfoSection />
      <BannerSection />
      <NearmeSection />
      <CitiesAndCountries />
    </main>
  );
};

export default Homepage;
