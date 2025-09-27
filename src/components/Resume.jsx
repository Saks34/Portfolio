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
    <title>Saksham Satnalika</title>
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

      <div className="mt-10 flex flex-col lg:flex-row flex-wrap gap-10 items-center justify-center px-4">
        {[cvData.general, cvData.fullstack].map((resume, index) => (
          <motion.div
            key={resume.title}
            variants={fadeIn("", "", index * 0.2, 1)}
            className="flex flex-col items-center justify-center bg-gray-100 dark:bg-tertiary rounded-2xl p-6 shadow-md dark:shadow-lg transition-all duration-300 text-center w-80 md:w-96 hover:shadow-xl hover:-translate-y-1"
          >

           
            <motion.a
              href={resume.url}
              download={resume.title === "General Resume" ? "Saksham's Resume" : "Saksham's Specialized Resume"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-[#915EFF] text-white px-6 py-2 rounded-xl hover:bg-purple-600 transition-colors duration-300 text-center font-medium shadow focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent"
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
