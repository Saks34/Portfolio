import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#f3f4f6", // Light gray for light mode
        color: "#1f2937", // Tailwind gray-800
      }}
      contentArrowStyle={{ borderRight: "7px solid #e5e7eb" }} // gray-200
      date={
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {experience.date}
        </span>
      }
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
      // Set the timeline line color based on theme using CSS var
      className="timeline-element"
    >
      <div className="bg-[#f3f4f6] dark:bg-[#1d1836] p-5 rounded-lg shadow-md transition-colors duration-300">
        <h3 className="text-gray-900 dark:text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-gray-700 dark:text-secondary text-[16px] font-semibold mt-1">
          {experience.company_name}
        </p>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-gray-800 dark:text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className={`${styles.sectionSubText} text-center text-gray-800 dark:text-gray-300`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-gray-900 dark:text-white`}>
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#9ca3af">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
