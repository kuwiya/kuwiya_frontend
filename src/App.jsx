import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage";
import MarketPlace from "./pages/marketplace";
import { Footer } from "./components/ui";
import RestaurantPage from "./pages/restaurant";
import RestaurantsListing from "./pages/all_restaurants";
import SubscriptionPage from "./pages/subscription-page";
import DetailPage from "./pages/details-featured-page";
import LocateRestaurants from "./pages/homepage/_components/cities_countries/locate_restaurants";
import DiscountDetailsPage from "./pages/details-discounts-page";
import CouponDetailsPage from "./pages/details-coupon-page";
import AboutUs from "./pages/about-us";
import ClaimCoupon from "./pages/claim-coupon";
import AddRestaurantPage from "./pages/add-restaurant";
import UserInvitation from "./pages/user-invitation";
import Waitlist from "./pages/waitlist";
import Error from "./pages/error-screen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/restaurants" element={<RestaurantsListing />} />
        <Route
          path="/locaterestaurants/:location"
          element={<LocateRestaurants />}
        />
        <Route path="/restaurants/:id" element={<RestaurantPage />} />
        <Route path="/subscription-plan" element={<SubscriptionPage />} />
        <Route path="/featured/:id" element={<DetailPage />} />
        <Route path="/marketplace/:id" element={<DiscountDetailsPage />} />
        <Route path="/coupon/:id" element={<CouponDetailsPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/claim-coupon/:id" element={<ClaimCoupon />} />
        <Route path="/add-restaurant" element={<AddRestaurantPage />} />
        <Route path="/user-invitation" element={<UserInvitation />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
