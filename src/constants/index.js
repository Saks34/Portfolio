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
  native,
  carrent,
  etp,
 merakhata,
  threejs,
  College,
  Primary,
  resume,
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
  specializedresume,
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
      download_link: nineteen,
    },
  ];
  
  const cvData = {
    general: {
      title: "General Resume",
      url: resume,
    },
    fullstack: {
      title: "Specialized Resume",
      url: specializedresume,
    },
  };
  
  // Services shown on About page
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: reactjs,
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

  // Technologies shown on Tech page
  

  // Work experiences (can be left empty for now)
  const experiences = [
    // Add experience objects here if available
  ];

  const technologies = [
    { name: "CSS 3", icon: css},
    { name: "HTML 5", icon: html},
    { name: "JavaScript", icon: javascript},
    { name: "TypeScript", icon: typescript},
    { name: "React JS", icon: reactjs },
    { name: "Tailwind CSS", icon: tailwind},
    { name: "Node JS", icon: nodejs },
    { name: "MongoDB", icon: mongodb},
    { name: "Git", icon: git},
    { name: "Python", icon: python},
    { name: "Java", icon: java},
    { name: "Three JS", icon: threejs},
    { name: "C++", icon: cpp},
    { name: "React Native", icon: native},
  ];
  
  const projects = [
    {
      name: "Mera Khata",
      description:
        "A system designed for effortless record-keeping, seamless transaction management, and reliable client handling with backend services for data security.",
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
      image: merakhata,
      source_code_link: "https://github.com/Saks34/Mera-Khata",
    },
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
          name: "geminiapi",
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
  ];
  
  // Education timeline data
  const education = [
    {
      degree: "Primary School",
      institution: "DAV Public School",
      icon: Primary,
      iconBg: "#E6DEDD",
      date: "2019 - 2020",
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
      date: "2021 - 2022",
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
    },
  ];
  
  export { services, technologies, experiences, projects, certificates, cvData, education , navLinks };
