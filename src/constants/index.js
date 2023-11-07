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
  wordpress,
  php,
  mongodb,
  nextJs,
  symfony,
  photoshop,
  illustrator,
  theAdvisor,
  weatherApp,
  myPortfolio,
  cmsPortfolio,
  githubSocial,
  linkedin,
  phone,
  mail,
  yoannImg,
  beerRepo,
  jedy
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
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "NextJS Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Symfony Developer",
    icon: backend,
  },
  {
    title: "API Management",
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
    name: "mongodb",
    icon: mongodb,
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
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "symfony",
    icon: symfony,
  },
];

const experiences = [
  {
    title: "Full stack developer",
    company_name: "Jedy formation",
    icon: jedy,
    iconBg: "#fff",
    date: "August 2023 - February 2023",
    points: [
      `Web development (Javascript, Next.js, PHP, Symfony, SASS) .`,
      `Development of a Next.js web application communicating with an API created in Symfony.`,
    ],
  },
];

const testimonials = [
  {
    testimonial: `J'ai pu travailler avec Chiheb quelques mois sur un projet (NextJS - Symfony).
Chiheb est un profil curieux, appliqué et qui progresse vite. Il a réalisé un projet de qualité en ayant un rôle de dev fullstack, ce qui m'amène à vous recommander son profil.`,
    name: "Yoann Coualan",
    designation: "CTO",
    company: "Jedy Formation",
    image: yoannImg,
    testimonialLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7121052156912128001/",
    personLink: "https://www.linkedin.com/in/yoanncoualan/",
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
    name: "Beer repository",
    description:
      " A React-based exploration of beers styled with Styled-components, tapping into the 'https://punkapi.com/' API, outfitted with custom-built pagination, tailored hooks, and smart cache management for a high-performance web experience",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Styled-components",
        color: "pink-text-gradient",
      },
      {
        name: "API Implementation",
        color: "green-text-gradient",
      },
    ],
    image: beerRepo,
    source_code_link: "https://github.com/samti-chiheb/custom-portfolio",
    view_code_link: "https://innovatelifestore.com/",
  },
  {
    name: "CMS Portfolio",
    description:
      "React-powered Portfolio integrated with Sanity CMS. Explore my projects with ease, thanks to a seamless content management system that keeps the portfolio up to date effortlessly. ",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Headless-CMS-Sanity",
        color: "green-text-gradient",
      },
    ],
    image: cmsPortfolio,
    source_code_link: "https://github.com/samti-chiheb/custom-portfolio",
  },
  {
    name: "my portfolio",
    description:
      "my impressive portfolio created with React and Tailwind. Discover seamless navigation, stunning visuals, and innovative 3D creations powered by React Three Fiber. ",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
    ],
    image: myPortfolio,
    source_code_link: "https://github.com/samti-chiheb/portfolio-v3",
    view_code_link: "https://samtichiheb.com",
  },

  {
    name: "The advisor",
    description:
      "Powered by React, The Advisor utilizes a random advice API to deliver up to 5 insightful advices per day. Capture inspiration by saving your favorite advice to Notion.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "API Implementation",
        color: "green-text-gradient",
      },
    ],
    image: theAdvisor,
    source_code_link: "https://github.com/samti-chiheb/the-advisor",
    view_code_link: "https://chiheb-react01.netlify.app",
  },

  {
    name: "weather app",
    description:
      "Vue.js weather app. Powered by a reliable weather API, it provides real-time updates based on your location. Plus, track your battery level for seamless planning.",
    tags: [
      {
        name: "Vue JS",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "API Implementation",
        color: "blue-text-gradient",
      },
    ],
    image: weatherApp,
    source_code_link: "https://github.com/samti-chiheb/weather-app",
    view_code_link: "https://chiheb-vue01.netlify.app/",
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
