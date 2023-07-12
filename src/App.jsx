import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { HeroSection } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="bg-[#272935]">
          <HeroSection />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
