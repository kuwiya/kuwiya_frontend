import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Homepage, MarketPlace } from "./components";

function App() {
  // const pathname = window.location.pathname;
  // console.log(pathname);
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/market-place" element={<MarketPlace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
