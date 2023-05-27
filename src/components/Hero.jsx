import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import {HeroParallax} from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen ma-auto">
      <HeroParallax />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-[1]">
        <a href="#about">
          <div className="w-[40px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
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
