import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useTranslation } from "react-i18next";



const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("section_subtext_about")} </p>
        <h2 className={styles.sectionHeadText}>
          {t("section_headtext_about")}
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px] "
      >
        {t("about_description_1")}
      </motion.p>

      <motion.pre
        variants={textVariant()}
        className="mt-8 bg-tertiary text-[16px] text-white leading-[40px] p-8 max-w-[1000px] overflow-x-auto"
      >
        <code>
          <span className="green-text-gradient">#samtiChiheb</span>{" "}
          {t("about_code_snippet")}
        </code>
      </motion.pre>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-8 text-secondary text-[17px]  leading-[30px] "
      >
        {t("about_additional_paragraph_1")}
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]  leading-[30px] "
      >
        {t("about_additional_paragraph_2")}
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
