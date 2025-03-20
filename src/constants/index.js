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
  redux,
  dashboard,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  tcslogo,
  maxgenlogo,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  realestate,
  zomato,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Tata Consultancy Services",
    icon: tcslogo,
    iconBg: "#383E56",
    date: "Jan 2022 - May 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, managers, and other developers to create high-quality web solutions.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Android Developer Intern",
    company_name: "Maxgen Technologies",
    icon: maxgenlogo,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - May 2021",
    points: [
      "Helping senior developers to Develop and maintain android applications using Java and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Admin Dashboard",
    description:
      "Web-based platform that allows businesses to keep track of their all the business operations including number of orders, revenue, feedback etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://fitpeo-dashboard-rohit.netlify.app/",
    previw_link: "https://fitpeo-dashboard-rohit.netlify.app/",
  },
  {
    name: "Real Estate Frontend",
    description:
      "Frontend for a Real Estate Agency website, able to attract customers and generate new leads for the business",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: realestate,
    source_code_link: "https://real-estate-phi-pink.vercel.app/",
    previw_link: "https://real-estate-phi-pink.vercel.app/",
  },
  {
    name: "Zomato Homepage",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: zomato,
    source_code_link: "hhttps://luminous-mermaid-11c47d.netlify.app/",
    previw_link: "https://luminous-mermaid-11c47d.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
