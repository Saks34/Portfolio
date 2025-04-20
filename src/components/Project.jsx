/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Helmet } from "react-helmet";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full sm:w-[360px]"
      >
        <div
  className={`p-[1px] rounded-[20px]
    shadow-[0_1px_3px_rgba(0,0,0,0.1)]
    blue-tint-gradient
    dark:from-[#232325] dark:to-[#1d1836]
    transition-colors duration-300
  `}
>

         <div className="bg-[rgba(223,223,242,0.8)] dark:bg-tertiary p-5 rounded-[20px] transition-colors duration-300 h-[480px] flex flex-col justify-between">


            <div className="relative w-full h-[230px]">
              <img
                src={image}
                alt="project_image"
                className="w-full h-full object-cover rounded-2xl"
              />

              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
  onClick={() => window.open(source_code_link, "_blank")}
  className="bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
>
  <img
    src={github}
    alt="GitHub"
    className="github-icon w-6 h-6"
  />
</div>

              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-gray-900 dark:text-white font-bold text-[24px]">
                {name}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300 text-[14px]">
                {description}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};


const Project = () => {
  return (
    <>
    
  <Helmet>
    <title>About | Saksham Satnalika</title>
    <meta name="description" content="Learn about Saksham Satnalika – a B.Tech CSE student at LPU, skilled in React and backend dev, and a content creator on YouTube." />
    <meta name="keywords" content="Saksham Satnalika, About Saksham, LPU Student, React Developer, Backend Developer, Content Creator" />
  </Helmet>

      <motion.div variants={textVariant()}>
        
        <h2 className={`${styles.sectionHeadText} text-gray-900 dark:text-white`}>
          Projects
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-gray-700 dark:text-gray-300 text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Project, "project");
