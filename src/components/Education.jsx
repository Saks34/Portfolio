import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { Helmet } from "react-helmet";


const EducationCard = ({ edu }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#f3f4f6",
      color: "#1f2937",
    }}
    contentArrowStyle={{ borderRight: "7px solid #e5e7eb" }}
    date={
      <span className="text-sm text-gray-600 dark:text-gray-300">
        {edu.date}
      </span>
    }
    iconStyle={{ background: edu.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={edu.icon}
          alt={edu.institution}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <div className="bg-[#f3f4f6] dark:bg-[#1d1836] p-5 rounded-lg shadow-md transition-colors duration-300">
      <h3 className='text-gray-900 dark:text-white text-[24px] font-bold'>
        {edu.institution}
      </h3>
      <p className='text-gray-700 dark:text-secondary text-[16px] font-semibold mt-1'>
        {edu.degree}
      </p>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {edu.points.map((point, index) => (
          <li
            key={`edu-point-${index}`}
            className='text-gray-800 dark:text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const Education = () => (
  <>
  <Helmet>
    <title>About | Saksham Satnalika</title>
    <meta name="description" content="Learn about Saksham Satnalika – a B.Tech CSE student at LPU, skilled in React and backend dev, and a content creator on YouTube." />
    <meta name="keywords" content="Saksham Satnalika, About Saksham, LPU Student, React Developer, Backend Developer, Content Creator" />
  </Helmet>

    <motion.div
      variants={textVariant()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <p className={`${styles.sectionSubText} text-center text-gray-800 dark:text-gray-300`}>
        Where I've studied
      </p>
      <h2 className={`${styles.sectionHeadText} text-center text-gray-900 dark:text-white`}>
        Education
      </h2>
    </motion.div>

    <div className='mt-20 flex flex-col'>
      <VerticalTimeline lineColor="#9ca3af">
        {education.map((edu, index) => (
          <EducationCard key={`edu-${index}`} edu={edu} />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Education, "education");
