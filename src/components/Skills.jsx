import { SectionWrapper } from "../hoc";
import { basicTech, advancedTech } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { useTranslation } from "react-i18next";

const SkillsCategorie = ({ title, skills }) => {
  return (
    <>
      <p className={`${styles.sectionSubText} m-[16px]`}>{title}</p>
      <div className="flex flex-row flex-wrap justify-center gap-8 ">
        {skills.map((technologie) => (
          <div
            className="h-20 w-20 bg-gradientSecondary flex justify-center rounded-full items-center"
            key={technologie.name}
          >
            <div className="w-14 h-14 ">
              <img
                src={technologie.icon}
                alt={technologie.name}
                className="w-full h-full "
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const Skills = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>
          {t("section_subtext_skills")}{" "}
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          {t("section_headtext_skills")}
        </h2>
      </motion.div>
      <SkillsCategorie title={t("advanced_level")} skills={advancedTech} />
      <SkillsCategorie title={t("basic_level")} skills={basicTech} />
    </>
  );
};

export default SectionWrapper(Skills, "skills");
