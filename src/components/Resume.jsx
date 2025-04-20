import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { cvData } from "../constants"; // Assume cvData.general and cvData.fullstack
import { SectionWrapper } from "../hoc";
import { Helmet } from "react-helmet";


const Resume = () => {
  return (
    <>
  <Helmet>
    <title>About | Saksham Satnalika</title>
    <meta name="description" content="Learn about Saksham Satnalika – a B.Tech CSE student at LPU, skilled in React and backend dev, and a content creator on YouTube." />
    <meta name="keywords" content="Saksham Satnalika, About Saksham, LPU Student, React Developer, Backend Developer, Content Creator" />
  </Helmet>

      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-gray-800 dark:text-gray-300`}>
          Get to know more about me
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-gray-900 dark:text-white`}>
          Resume
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-col lg:flex-row gap-10 items-center justify-center">
        {[cvData.general, cvData.fullstack].map((resume, index) => (
          <motion.div
            key={resume.title}
            variants={fadeIn("", "", index * 0.2, 1)}
            className="flex flex-col items-center bg-gray-100 dark:bg-tertiary rounded-2xl p-6 shadow-md dark:shadow-lg transition-colors duration-300 max-w-md"
          >
            <h3 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              {resume.title}
            </h3>

            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              src={resume.image}
              alt={`${resume.title} Preview`}
              className="w-full rounded-xl border border-gray-300 dark:border-gray-600"
            />

            <motion.a
              href={resume.url}
              download={resume.title === "General Resume" ? "Saksham's Resume" : "Saksham's Specialized Resume"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-[#915EFF] text-white px-6 py-2 rounded-xl hover:bg-purple-600 transition duration-300"
            >
              Download {resume.title}
            </motion.a>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Resume, "resume");
