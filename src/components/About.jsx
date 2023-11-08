import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ index, title, icon }) => (
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
        className="mt-8 text-secondary text-[17px]  leading-[30px] "
      >
        {t("about_additional_paragraph_2")}
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
