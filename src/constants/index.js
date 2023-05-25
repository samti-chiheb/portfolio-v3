import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  vuejs,
  tailwind,
  nodejs,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  wordpress,
  php,
  symfony,
  photoshop,
  illustrator,
  theAdvisor,
  weatherApp,
  myPortfolio,
  githubSocial,
  linkedin,
  phone,
  instagram,
  mail,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React js Developer",
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

const basicTech = [
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "symfony",
    icon: symfony,
  },
  {
    name: "wordpress",
    icon: wordpress,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "photoshop",
    icon: photoshop,
  },
  {
    name: "illustrator",
    icon: illustrator,
  },
];

const advancedTech = [
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "php",
    icon: php,
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

const testimonials = [
  {
    testimonial:
      "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet lorem et adip lorem ipsum dolor sit amet lorem et ",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet lorem et adip lorem ipsum dolor sit amet lorem et ",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet lorem et adip lorem ipsum",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const social = [
  {
    name: "linkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/samti-chiheb/",
  },
  {
    name: "github",
    icon: githubSocial,
    link: "https://github.com/samti-chiheb",
  },
  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/shypou/",
  },
  {
    name: "phone",
    icon: phone,
    link: "tel:0604533289",
  },
  {
    name: "mail",
    icon: mail,
    link: "mailto:chiheb.samti@gmail.com?subject=i like you portfolio",
  },
];

const projects = [
  {
    name: "The advisor",
    description:
      "Powered by React, The Advisor utilizes a random advice API to deliver up to 5 insightful advices per day. Capture inspiration by saving your favorite advice to Notion.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: theAdvisor,
    source_code_link: "https://github.com/samti-chiheb/the-advisor",
  },
  {
    name: "weather app",
    description:
      "Vue.js weather app. Powered by a reliable weather API, it provides real-time updates based on your location. Plus, track your battery level for seamless planning.",
    tags: [
      {
        name: "VueJs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weatherApp,
    source_code_link: "https://github.com/samti-chiheb/weather-app",
  },
  {
    name: "my portfolio",
    description:
      "my impressive portfolio created with React and Tailwind. Discover seamless navigation, stunning visuals, and innovative 3D creations powered by React Three Fiber. ",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "three-react-fiber",
        color: "pink-text-gradient",
      },
    ],
    image: myPortfolio,
    source_code_link: "https://github.com/samti-chiheb/portfolio-v3",
  },
];

export {
  services,
  basicTech,
  advancedTech,
  experiences,
  testimonials,
  projects,
  social,
};
