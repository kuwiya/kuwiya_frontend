import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage, MarketPlace } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/market-place" element={<MarketPlace />} />
      </Routes>
    </>
  );
}

export default App;
