import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc";
import { basicTech,
advancedTech } from "../constants";
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
      <p className={`${styles.sectionSubText} m-[16px]`}>. Advanced level</p>
      <div className="flex flex-row flex-wrap justify-center gap-10 ">
        {advancedTech.map((technologie) => (
          <div className="w-28 h-28 " key={technologie.name}>
            <BallCanvas icon={technologie.icon} />
          </div>
        ))}
      </div>

      <p className={`${styles.sectionSubText} m-[16px]`}>. Basic level</p>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {basicTech.map((technologie) => (
          <div className="w-28 h-28 " key={technologie.name}>
            <BallCanvas icon={technologie.icon} />
          </div>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Skills, "skills")