import React from "react";
import { KeyboardCanvas } from "./canvas";

const HeroSection = () => {
  return (
    <>
      <section className={`relative w-full h-screen mx-auto`}>
        <KeyboardCanvas />
      </section>
    </>
  );
};

export default HeroSection;
