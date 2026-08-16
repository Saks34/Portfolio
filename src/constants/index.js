import {
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
  native,
  carrent,
  etp,
  merakhata,
  threejs,
  College,
  Primary,
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
      id: "contact",
      title: "Contact",
    },
  ];
  
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
    { name: "HTML 5", icon: html},
    { name: "CSS 3", icon: css},
    { name: "JavaScript", icon: javascript},
    { name: "TypeScript", icon: typescript},
    { name: "React JS", icon: reactjs },
    { name: "Tailwind CSS", icon: tailwind},
    { name: "Node JS", icon: nodejs },
    { name: "MongoDB", icon: mongodb},
    { name: "Git", icon: git},
    { name: "Python", icon: python},
    { name: "Three JS", icon: threejs},
    { name: "React Native", icon: native},
  ];
  
  const projects = [
    {
      name: "LDecor",
      description:
        "A MERN + React Native dealer and inventory management portal featuring real-time stock tracking, dealer enquiries, and an intuitive admin dashboard.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "reactnative",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: merakhata,
      source_code_link: "#",
    },
    {
      name: "EduSync",
      description:
        "A microservices EdTech platform with live classes, group chat, and biometric attendance (QR + face recognition), built with React, Node.js, and FastAPI.",
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
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "#",
    },
    {
      name: "ClassBridge – Everything is Possible",
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
      date: "2022 - 2026",
      points: [
        "Completed B.Tech in Computer Science and Engineering with a CGPA of 76.10%.",
        "Authored an IEEE/Scopus-indexed research paper (ICCCES-2026) on smart attendance systems using machine learning.",
      ],
    },
  ];
  
  export { services, technologies, experiences, projects, education, navLinks };
