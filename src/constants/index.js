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
  jedy,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "nav_about",
  },
  {
    id: "skills",
    title: "nav_skills",
  },
  {
    id: "projects",
    title: "nav_projects",
  },
  {
    id: "testimonials",
    title: "nav_testimonials",
  },
  {
    id: "contact",
    title: "nav_contact",
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
    title: "experiences_01_title",
    company_name: "Jedy formation",
    icon: jedy,
    iconBg: "#fff",
    date: "experiences_01_date",
    points: [`experiences_01_point1`, `experiences_01_point2`],
  },
];

const testimonials = [
  {
    testimonial: "testimonials_01_feedback",
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
    description: "beer_repository_description",
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
    description: "cms_portfolio_description",
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
    description: "my_portfolio_description",
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
    description: "the_advisor_description",
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
    description: "weather_app_description",
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
  navLinks,
  services,
  basicTech,
  advancedTech,
  experiences,
  testimonials,
  projects,
  social,
};
