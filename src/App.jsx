import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { HeroSection, Overview } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="bg-heroColor">
          <HeroSection />
        </div>
        <Overview />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
