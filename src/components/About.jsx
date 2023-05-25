import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img className="w-16 h-16 object-contain" src={icon} alt={title} />
          <h3 className="text-white text-[20px] font-bold text-center ">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

const CodeBlock = () => {
  const code = `#samti-chiheb {
                  background: "commerce business marketing management";
                  passion: "Passionate about web development!";
                  design: "Basic design skills (I'll easily collab with designers, trust me! 😂)";
                  knowledge: "Vast knowledge of the digital world. 🌐";
                  learning: " 100ms linear Quick learner (my parcours speaks for itself 🎓)"; 
                }`;

  return (
    <SyntaxHighlighter
      language="ruby"
      style={materialDark}
      className="max-w-3xl leading-[30px] "
    >
      {code}
    </SyntaxHighlighter>
  );
};

const handleClick = (e) => {
  console.log("hello");
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 mb-8 text-secondary text-[17px] leading-[30px] "
      >
        I'm determined to embark on an exciting journey into the world of web
        development and be part of a productive team
      </motion.p>
      <CodeBlock />
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-8 text-secondary text-[17px]  leading-[30px] "
      >
        Once I built up my web development skills through self-learning, I
        decided to take a step further and sharpen my abilities at DIGITALE
        CAMPUS PARIS.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-8 text-secondary text-[17px]  leading-[30px] "
      >
        Acctually, searching for an internship to gain valuable real-world
        experience in this exciting field. I enjoy collaborating and i'm motivated to contribute my skills to
        innovative projects and seeking solve real-world problems.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 items-center justify-evenly ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
