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
        <HeroSection />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
