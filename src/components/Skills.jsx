import { SectionWrapper } from "../hoc";
import { basicTech, advancedTech } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { useTranslation } from "react-i18next";

const Card = ({ index, title, name, icon }) => (
  <div className="xs:w-[150px]">
    <motion.div
      variants={fadeIn("down", "spring", 0.2 * index)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px]"
    >
      <div className="bg-tertiary rounded-[20px] py-3 px-6 min-h-[150px] flex justify-evenly items-center flex-col">
        <img className="w-16 h-16 object-contain" src={icon} alt={title} />
        <h3 className="text-white text-[16px] text-center">{name}</h3>
      </div>
    </motion.div>
  </div>
);

const SkillsCard = ({ title, skills }) => (
  <div>
    <p className={`${styles.sectionSubText} m-[16px]`}>{title}</p>
    <div className="mt-4 flex flex-wrap gap-4 items-center justify-evenly ">
      {skills.map((skill, index) => (
        <Card key={index} index={index} {...skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div variants={textVariant()} >
        <h2 className={`${styles.sectionHeadText}`}>
          {t("section_headtext_skills")}
        </h2>
      </motion.div>

      <div
        className="flex flex-col"
        // "lg:flex-row"
      >
        <SkillsCard title={t("advanced_level")} skills={advancedTech} />
        <div className=" w-[1px] h-[full] bg-[white] m-[50px] sx:hidden"></div>
        <SkillsCard title={t("basic_level")} skills={basicTech} />
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
