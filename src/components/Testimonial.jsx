import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { useTranslation } from "react-i18next";

const TestimonialCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  testimonialLink,
  personLink,
  t,
}) => {
  const handleTestimonialClick = () => {
    if (testimonialLink) {
      window.open(testimonialLink, "_blank", "noopener,noreferrer");
    }
  };

  const handlePersonClick = () => {
    if (personLink) {
      window.open(personLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[420px] w-full m-auto"
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p
          className="text-white tracking-wider text-[16px] cursor-pointer"
          onClick={handleTestimonialClick}
        >
          {t(testimonial)}
        </p>
        <div
          className="mt-7 flex justify-between items-center gap-1 cursor-pointer"
          onClick={handlePersonClick}
        >
          <div className="flex-1 flex flex-col ">
            <p className="text-white font-medium text-[16px] ">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px] ">
              {designation} of {company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback-by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Testimonial = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-12 bg-black-100 rounded-[20px] " id="testimonials">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            {t("section_subtext_testimonials")}
          </p>
          <h2 className={styles.sectionHeadText}>
            {t("section_headtext_testimonials")}
          </h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.name}
            index={index}
            t={t}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Testimonial, "testimonial");
