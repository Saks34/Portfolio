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
  ldecor,
  classbridge,
  edusync,
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
      title: "Freelancer",
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
        "A MERN + React Native dealer and inventory management portal built for a multi-company decor business group. Features real-time stock tracking, dealer enquiry management, and a peer-to-peer partner API that lets independently deployed sister companies check inventory and place orders across each other's systems.",
      tags: [
        {
          name: "reactnative",
          color: "blue-text-gradient",
        },
        {
          name: "expressjs",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: ldecor,
      live_link: "https://ldecorstocklisting.vercel.app",
    },
    {
      name: "EduSync",
      description:
        "A microservices-based EdTech platform combining live class streaming (YouTube API + BullMQ post-stream pipeline), Redis-backed group chat with Socket.io, and biometric attendance using QR codes and face recognition. Includes AI-powered lecture summarization via Gemini and a video-on-demand library.",
      tags: [
        {
          name: "opencv",
          color: "blue-text-gradient",
        },
        {
          name: "geminiapi",
          color: "green-text-gradient",
        },
        {
          name: "redis",
          color: "pink-text-gradient",
        },
      ],
      image: edusync,
      live_link: "https://edusyncweb.vercel.app",
    },
    {
      name: "ClassBridge – Everything is Possible",
      description:
        "A live class platform integrating the YouTube API for streaming and Socket.io for real-time classroom interaction, with a school administration module covering timetables, batches, and leave requests. Deployed on AWS with a Node.js/Express backend.",
      tags: [
        {
          name: "socketio",
          color: "blue-text-gradient",
        },
        {
          name: "youtubeapi",
          color: "green-text-gradient",
        },
        {
          name: "aws",
          color: "pink-text-gradient",
        },
      ],
      image: classbridge,
      source_code_link: "https://github.com/Saks34/ClassBridge",
      live_link: "https://classbridgeweb.vercel.app",
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
