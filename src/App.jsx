import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { HeroSection, StarsCanvas } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="">
          <HeroSection />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
