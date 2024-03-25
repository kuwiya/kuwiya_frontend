// all components export
import Navbar from "./navbar";
import HeroSection from "./hero_section";
import Button from "./button";
import FeaturedSection from "./featured_section";
import CouponSection from "./coupon_section";
import PopularResturants from "./popular_section";
import InfoSection from "./info_section";
import MapSection from "./map_section";
import BannerSection from "./banner_section";
import NearmeSection from "./near-me_section";
import Footer from "./footer_section";
import CitiesAndCountries from "./cities_countries";

export {
  Navbar,
  HeroSection,
  Button,
  FeaturedSection,
  CouponSection,
  PopularResturants,
  InfoSection,
  MapSection,
  BannerSection,
  NearmeSection,
  CitiesAndCountries,
  Footer,
};

export { default as MarketPlace } from "./market-place/index";
export { default as Homepage } from "./homepage/index";
//My suggestion is we can use this way so we don't have to import and export
// export {default as Navbar} from "./navbar/index"
