import { image } from "framer-motion/client";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    python,
    tailwind,
    nodejs,
    mongodb,
    git,
    cpp,
    java,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    etp,
    tictactoe,
    threejs,
    College,
    Primary,
    resume,
    res,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fifteen,
    sixteen,
    seventeen,
    eighteen,
    nineteen,
    specializedres,
    specializedresume
  } from "../assets";
  
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "tech",
      title: "Tech Stack",
    }, 
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "resume",
      title: "Resume",
    },
    {
      id: "certificate",
      title: "Certificates",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  const certificates = [
    {
      name: "Mastering Data Structures & Algorithm using C and C++",
      date: "20 Oct,2023",
      download_link: one,
    },
    {
      name: "Introduction to Generative AI",
      date: "17 Jan,2024",
      download_link: two,
    },
    {
      name: "Generative AI for Everyone",
      date: "21 Jan,2024",
      download_link: three,
    },
    {
      name: "GenAI for Everyone",
      date: "28 Jan,2024",
      download_link: four,
    },
    {
      name: "Introduction to Large Language Models",
      date: "28 Jan,2024",
      download_link: five,
    },
    {
      name: "Generative AI Primer",
      date: "31 Jan,2024",
      download_link: six,
    },
    {
      name: "Algorithms on Strings",
      date: "8 Feb,2024",
      download_link: seven,
    },
    {
      name: "Prompt Engineering for ChatGPT",
      date: "23 Feb,2024",
      download_link: eight,
    },
    {
      name: "Learn to code with AI",
      date: "4 Apr,2024",
      download_link:nine,
    },
    {
      name: "ChatGPT for Beginners: Save time with Microsoft Excel",
      date: "4 Apr,2024",
      download_link:ten,
    },
    {
      name: "Generative AI with Large Language Models",
      date: "4 Apr,2024",
      download_link: eleven,
    },
    {
      name: "Build AI Apps with ChatGPT, Dall-E, and GPT-4",
      date: "20 Apr,2024",
      download_link:twelve,
    },
    {
      name: "ChatGPT Playground for Beginners: Intro to NLP AI",
      date: "20 Apr,2024",
      download_link: thirteen,
    },
    {
      name: "ChatGPT Advanced Data Analysis",
      date: "20 Apr,2024",
      download_link: fourteen,
    },
    {
      name: "Dynamic Programming, Greedy Algorithms",
      date: "5 May,2024",
      download_link:fifteen,
    },
    {
      name: "Approximation Algorithms and Linear Programming",
      date: "5 May,2024",
      download_link:sixteen,
    },
    {
      name: "HTML, CSS, and Javascript for Web Developers",
      date: "20 May,2024",
      download_link: seventeen,
    },
    {
      name: "Server side JavaScript with Node.js",
      date: "20 May,2024",
      download_link: eighteen,
    },
    {
      name: "Data Structures and Algorithms - Self Paced",
      date: "31 Aug,2024",
      download_link: nineteen,
    },
  ];

  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "CPP",
      icon: cpp,
    },
    {
      name: "Java",
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  

  const cvData = {
    general: {
      title: "General Resume",
      image: res,
      url: resume,
    },
    fullstack: {
      title: "Specialized Resume",
      image: specializedres,
      url:specializedresume,
    },
  };
  

  
  const projects = [
    {
      name: "E-Commerce Website",
      description:
        "Full-stack e-commerce platform featuring product listings, cart functionality, user authentication, and smart product recommendations using Gemini API.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Saks34/Ecommerce",
    },
    {
      name: "ETP - Everything is Possible",
      description:
        "Digital learning system designed for intuitive navigation, dynamic content management, and inclusive education with backend services for user tracking.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "aws",
          color: "pink-text-gradient",
        },
      ],
      image: etp,
      source_code_link: "https://github.com/Saks34/ETP---Everything-is-Possible",
    },
    {
      name: "Tic-Tac-Toe Game",
      description:
        "Interactive 2-player Java game using OOP and data structures like arrays and stacks to handle real-time board logic and winning conditions.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "oop",
          color: "green-text-gradient",
        },
        {
          name: "algorithms",
          color: "pink-text-gradient",
        },
      ],
      image: tictactoe,
      source_code_link: "https://github.com/Saks34",
    }
  ];

  const education = [
    {
      degree: "Primary School",
      institution: "DAV Public School",
      icon: Primary,
      iconBg: "#E6DEDD",
      date: "2008 - 2020",
      points: [
        "Built a strong academic foundation across all core subjects.",
        "Actively participated in inter-school competitions and science exhibitions.",
      ],
    },
    {
      degree: "Secondary School",
      institution: "DAV Public School",
      icon: Primary,
      iconBg: "#383E56",
      date: "2020 - 2022",
      points: [
        "Focused on advanced science and mathematics courses.",
        "Achieved academic excellence in both 10th and 12th board examinations.",
      ],
    },
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Lovely Professional University",
      icon: College,
      iconBg: "#E6DEDD",
      date: "2022 - Present",
      points: [
        "Currently pursuing B.Tech in Computer Science and Engineering.",
        "Gaining hands-on experience in Java and full-stack web development .",
      ],
    }
    

  ];
  
  export { services, technologies, experiences, projects, certificates, cvData, education, navLinks };