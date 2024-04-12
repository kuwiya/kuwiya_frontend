import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryClientProvider } from "./utils/index.js";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactQueryClientProvider>
      <BrowserRouter>
        <ScrollToTop /> {/* Scroll to top on page change */}
        <App />
      </BrowserRouter>
    </ReactQueryClientProvider>
  </React.StrictMode>
);
