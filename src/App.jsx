import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage";
import MarketPlace from "./pages/marketplace";
import { Footer } from "./components/ui";
import RestaurantPage from "./pages/restaurant";
import RestaurantsListing from "./pages/all_restaurants";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/restaurants" element={<RestaurantsListing />} />
        <Route path="/restaurants/:id" element={<RestaurantPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
