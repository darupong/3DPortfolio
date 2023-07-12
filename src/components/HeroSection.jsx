import React from "react";
import { KeyboardCanvas } from "./canvas";

const HeroSection = () => {
  return (
    <>
      <section className={`relative w-full h-screen mx-auto`}>
        <div className="absolute flex flex-row justify-center inset-0 top-[160px]">
          <div className="flex flex-col">
            <p className="text-center text-[60px] font-bold text-white">
              Hi! I'm Neung Darupong
            </p>
            <p className="text-center text-4xl font-bold text-white">
              <span className="text-sky-500">Front-end</span> Developer &{" "}
              <span className="text-red-500">Game </span>
              Developer
            </p>
          </div>
        </div>
        <KeyboardCanvas />
      </section>
    </>
  );
};

export default HeroSection;
