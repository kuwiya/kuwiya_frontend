import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage';
import MarketPlace from './pages/marketplace';
import { Footer } from './components/ui';

function App() {
  // const pathname = window.location.pathname;
  // console.log(pathname);
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/marketplace" element={<MarketPlace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
