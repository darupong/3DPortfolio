/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { KeyboardCanvas } from "./canvas";

const HeroSection = () => {
  return (
    <>
      <section className={`relative w-full h-screen mx-auto`}>
        <div className="absolute container mx-auto flex flex-row justify-start inset-0 top-[160px]">
          <div className="flex flex-col">
            <p className="text-center text-[60px] font-bold dark:text-white text-gray-800">
              Hi! I'm Neung Darupong
            </p>
            <p className="text-start text-4xl font-bold dark:text-white text-gray-800">
              <span className="text-sky-500">Front-end</span> Website Developer
            </p>
            <p className="text-start text-4xl font-bold dark:text-white text-gray-800">
              <span className="text-red-500">Unity Game</span> Developer
            </p>
            <p className="text-start text-4xl font-bold dark:text-white text-gray-800">
              <span className="text-green-500">Content</span> Creator
            </p>
          </div>
        </div>
        <KeyboardCanvas />
      </section>
    </>
  );
};

export default HeroSection;
