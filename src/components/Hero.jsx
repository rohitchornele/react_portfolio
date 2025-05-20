import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useState } from "react";
import Contact from "./Contact";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] lg:top-[250px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="p-2">
          <h1 className={`${styles.heroHeadText} text-white flex flex-col md:flex-row gap-3 md:gap-8 `}>
            Hi, I'm <span className="text-[#915EFF]">Rohit Chornele</span>
          </h1>
          <p className={`${styles.heroSubText} mt-5 md:mt-10 text-white-100`}>
            I develop Websites, Softwares <br className="sm:block hidden" />
            and Web Applications
          </p>

          <div className="resume-div flex flex-col md:flex-row mt-6 lg:mt-10 gap-8">
            <a href="#contact">
              <button className={`bg-[#6737cf] px-6 py-3 text-xl lg:text-2xl`}>
                Contact me
              </button>
            </a>
            <a
              href="https://drive.google.com/file/d/1xtmGulecLgeQtC4UjYkhPL9aXnIVJiRr/view?usp=drive_link"
              target="_blank"
            >
              <button className="bg-white text-[#6737cf] px-4 py-3 font-bold text-xl lg:text-2xl">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
