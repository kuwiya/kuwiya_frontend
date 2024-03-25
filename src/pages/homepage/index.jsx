import React from 'react';
import {
  BannerSection,
  CitiesAndCountries,
  CouponSection,
  FeaturedSection,
  HeroSection,
  InfoSection,
  NearmeSection,
  PopularResturants,
} from './_components';
import { Navbar } from '../../components/ui';

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
