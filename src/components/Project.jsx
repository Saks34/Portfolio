/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { FaGithub } from "react-icons/fa6";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Helmet } from "react-helmet-async";

/* ── Animated Eye Icon ─────────────────────────────────── */
const AnimatedEyeIcon = ({ isHovered, isDark }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="overflow-visible"
  >
    {/* Outer eye shape */}
    <motion.path
      d="M2.42 12.713c-.136-.215-.204-.323-.242-.49a1.2 1.2 0 0 1 0-.446c.038-.167.106-.275.242-.49C3.546 9.505 6.895 5 12 5s8.455 4.505 9.58 6.287c.136.215.204.323.242.49.029.125.029.321 0 .446-.038.167-.106.275-.242.49C20.455 14.495 17.105 19 12 19s-8.454-4.505-9.58-6.287Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={false}
      animate={{
        pathLength: 1,
        strokeWidth: isHovered ? 2 : 1.8,
      }}
      transition={{ duration: 0.3 }}
    />
    {/* Iris circle */}
    <motion.circle
      cx="12"
      cy="12"
      r="3.5"
      stroke="currentColor"
      strokeWidth="1.8"
      fill={isHovered ? (isDark ? "rgba(34,211,238,0.25)" : "rgba(6,182,212,0.2)") : "none"}
      initial={false}
      animate={{
        r: isHovered ? 4 : 3.5,
        strokeWidth: isHovered ? 2 : 1.8,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    />
    {/* Pupil dot */}
    <motion.circle
      cx="12"
      cy="12"
      fill="currentColor"
      initial={false}
      animate={{
        r: isHovered ? 2.2 : 1.5,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 18 }}
    />
    {/* Glint / light reflection */}
    <motion.circle
      cx="13.8"
      cy="10.5"
      fill={isDark ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.9)"}
      initial={false}
      animate={{
        r: isHovered ? 0.9 : 0.55,
        opacity: isHovered ? 1 : 0.6,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    />
  </svg>
);


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  const [eyeHovered, setEyeHovered] = useState(false);
  const isDark = document.documentElement.classList.contains("dark");

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

         <div className="bg-[rgba(223,223,242,0.8)] dark:bg-tertiary p-5 rounded-[20px] transition-colors duration-300 flex flex-col justify-between h-full min-h-[480px]">
            <div>
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 dark:bg-[#100d25]">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover object-top rounded-2xl"
                />

                <div className="absolute inset-0 flex justify-end gap-2 m-3 card-img_hover pointer-events-none">
                  {/* Eye (Live Demo) Button */}
                  {live_link && (
                    <motion.div
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.9 }}
                      onHoverStart={() => setEyeHovered(true)}
                      onHoverEnd={() => setEyeHovered(false)}
                      onClick={() => window.open(live_link, "_blank")}
                      className="w-9 h-9 rounded-full flex justify-center items-center cursor-pointer pointer-events-auto transition-all duration-300 backdrop-blur-md shadow-md bg-white/90 text-gray-800 border border-black/10 hover:bg-white hover:text-cyan-600 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] dark:bg-black/80 dark:text-white dark:border-white/20 dark:hover:bg-[#151030] dark:hover:text-cyan-400 dark:hover:border-cyan-400 dark:hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] group"
                      title="Live Demo"
                    >
                      <AnimatedEyeIcon isHovered={eyeHovered} isDark={isDark} />
                    </motion.div>
                  )}

                  {/* GitHub Button */}
                  {source_code_link && (
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.92 }}
                      onClick={() => window.open(source_code_link, "_blank")}
                      className="w-9 h-9 rounded-full flex justify-center items-center cursor-pointer pointer-events-auto transition-all duration-300 backdrop-blur-md shadow-md bg-white/90 text-gray-800 border border-black/10 hover:bg-white hover:text-purple-600 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] dark:bg-black/80 dark:text-white dark:border-white/20 dark:hover:bg-[#151030] dark:hover:text-purple-400 dark:hover:border-purple-400 dark:hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] group"
                      title="Source Code"
                    >
                      <FaGithub className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-gray-900 dark:text-white font-bold text-[22px]">
                  {name}
                </h3>
                <p className="mt-2 text-gray-700 dark:text-gray-300 text-[14px] leading-[22px]">
                  {description}
                </p>
              </div>
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
    <title>Saksham Satnalika</title>
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
