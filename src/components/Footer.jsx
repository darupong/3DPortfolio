import React from "react";
import { TbBrandThreejs, TbBrandReactNative } from "react-icons/tb";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer shadow-lg footer-center p-10 bg-base-200 text-base-content rounded">
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.facebook.com/ineungwenlek/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook
              className=" w-6 h-6 text-black dark:text-white"
              role="button"
            />
          </a>
          <a
            href="https://github.com/darupong"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              className=" w-6 h-6 text-black dark:text-white"
              role="button"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/darupongchouypu/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin
              className=" w-6 h-6 text-black dark:text-white"
              role="button"
            />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by Darupong Chouypu</p>
        <div className=" flex flex-row gap-2 items-center">
          <p>Powered by React with Three.js</p>
          <TbBrandThreejs className="text-xl" />
          <TbBrandReactNative className="text-xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
