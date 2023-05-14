import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My skills</p>
        <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technologie) => (
          <div className="w-28 h-28 " key={technologie.name}>
            <BallCanvas icon={technologie.icon} />
          </div>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Skills, "skills")