/* eslint-disable react-refresh/only-export-components */
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { Helmet } from "react-helmet-async";


const Tech = () => {
  return (
    <>
      <Helmet>
        <title>Saksham Satnalika</title>
        <meta name="description" content="Learn about Saksham Satnalika – a B.Tech CSE student at LPU, skilled in React and backend dev, and a content creator on YouTube." />
        <meta name="keywords" content="Saksham Satnalika, About Saksham, LPU Student, React Developer, Backend Developer, Content Creator" />
      </Helmet>

      {/* Heading section */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-gray-800 dark:text-gray-300`}>
          Technologies I’m familiar with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-gray-900 dark:text-white`}>
          Tech Stack
        </h2>
      </motion.div>

      {/* Tech icons with hover tooltip */}
      <div className="mt-16 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="relative group w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            {/* Tooltip */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
  bg-black text-white text-xs px-2 py-1 rounded 
  opacity-0 group-hover:opacity-100 
  transition-opacity duration-300 
  pointer-events-none z-10 whitespace-nowrap">
  {technology.name}
</div>

          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
