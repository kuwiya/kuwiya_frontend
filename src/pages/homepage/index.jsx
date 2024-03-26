import React, { useEffect, useState } from 'react';
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
  const [scrolling, setScrolling] = useState(false);
 
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  
  return (
    <main>
      <Navbar scrolling={scrolling} />
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
