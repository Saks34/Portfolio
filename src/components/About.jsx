/* eslint-disable react/no-unknown-property */
    /* eslint-disable react/prop-types */
    /* eslint-disable no-unused-vars */
    /* eslint-disable react-refresh/only-export-components */
    import React, { useEffect, useState } from "react";
    import { Tilt } from 'react-tilt';
    import { motion } from "framer-motion";
    
    import { styles } from "../styles";
    import { services } from "../constants";
    import { SectionWrapper } from "../hoc";
    import { fadeIn, textVariant } from "../utils/motion";
    import { Helmet } from "react-helmet-async";
    
    const ServiceCard = ({ index, title, icon }) => (
      <Tilt className='xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className={`
            w-full p-[1px] rounded-[20px]
            shadow-[0_1px_3px_RGBA(0,0,0,0.1)]
            green-pink-gradient
            dark:from-[#232325] dark:to-[#1d1836]
            transition-colors duration-300
          `}
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='bg-[rgba(223,223,242,0.8)] dark:bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img
              src={icon}
              alt={title}
              className='w-16 h-16 object-contain'
            />
            <h3 className='text-gray-900 dark:text-white text-[20px] font-bold text-center'>
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    );

    const About = () => {
      return (
        <>
        
      <Helmet>
        <title>Saksham Satnalika</title>
        <meta name="description" content="Learn about Saksham Satnalika – a B.Tech CSE student at LPU, skilled in React and backend dev, and a content creator on YouTube." />
        <meta name="keywords" content="Saksham Satnalika, About Saksham, LPU Student, React Developer, Backend Developer, Content Creator" />
      </Helmet>

        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} dark:text-gray-400 text-gray-600`}>Introduction</p>
          <h2 className={`${styles.sectionHeadText} dark:text-white text-gray-900`}>Overview</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary dark:text-gray-300 text-gray-700 text-[17px] max-w-3xl leading-[30px]'
        >
          I am currently pursuing a Bachelor of Technology (B.Tech) degree in Computer Science and Engineering at Lovely Professional University, where I am in my third year of studies. Alongside my academic journey, I am also a content creator on YouTube, where I combine my technical expertise and creative skills to connect with a broader audience. I have a strong understanding of web development, particularly in React and backend technologies.
        </motion.p>

        <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </>
      );
    };

    export default SectionWrapper(About, "about");
