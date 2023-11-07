import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("down", "spring", 0.7 * index)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] "
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

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px] "
      >
        I'm determined to embark on an exciting journey into the world of web
        development and be part of a productive team
      </motion.p>

      <motion.pre
        variants={textVariant()}
        className="mt-8 bg-tertiary text-[16px] text-white leading-[40px] p-8 max-w-[1000px] overflow-x-auto"
      >
        <code>
          <span className="green-text-gradient">#samtiChiheb</span>{" "}
          {`{
      background: "commerce business marketing management"; 
      passion: "Passionate about web development!"; 
      design: "Basic design skills (I'll easily collab with designers, trust me! 😂)"; 
      knowledge: "Vast knowledge of the digital world. 🌐"; 
      learning: " 100ms linear Quick learner (my parcours speaks for itself 🎓)";
    }`}
        </code>
      </motion.pre>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-8 text-secondary text-[17px]  leading-[30px] "
      >
        After learning web development on my own and getting more skills at
        DIGITALE CAMPUS PARIS, I'm ready for a real job in this exciting area.
        I'm not looking for just a short-term internship anymore. I want to join
        a team for a long-term job where I can really get into projects and help
        solve problems.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-8 text-secondary text-[17px]  leading-[30px] "
      >
        I like working with others and am ready to use what I know in a place
        that's making cool stuff happen. I'm on the lookout for a full-time job
        where I can grow and keep getting better at what I do.
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
