import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/ui";
import {
  BannerSection,
  CitiesAndCountries,
  CouponSection,
  FeaturedSection,
  HeroSection,
  InfoSection,
  NearmeSection,
  PopularResturants,
} from "./_components";

const Homepage = () => {
  const [scrolling, setScrolling] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      {!(width <= 500 )&& (
        <>
         <BannerSection />
          <NearmeSection />
          <CitiesAndCountries />
        </>
      )}
    </main>
  );
};

export default Homepage;
