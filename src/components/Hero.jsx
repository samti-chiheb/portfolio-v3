import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import {HeroParallax} from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen ma-auto">
      {/* <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, i'm <span className="text-[#915eff]">Chiheb</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develope UI <br className="sm:block hidden" />
            and Web App using React, Js Vue.
          </p>
        </div>
      </div> */}
      {/* <ComputersCanvas /> */}
      <HeroParallax />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[40px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-4 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
