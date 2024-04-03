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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/restaurants" element={<RestaurantsListing />} />
        <Route path="/locaterestaurants/:location" element={<LocateRestaurants />} />
        <Route path="/restaurants/:id" element={<RestaurantPage />} />
        <Route path="/subscription-plan" element={<SubscriptionPage />} />
        <Route path="/featured/:id" element={<DetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
