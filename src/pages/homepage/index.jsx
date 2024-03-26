import React from 'react';
import { Navbar } from '../../components/ui';
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
