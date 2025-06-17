import {
  mobile,
  backend,
  web,
  javascriptlogo,
  htmllogo,
  csslogo,
  reactjslogo,
  redux,
  dashboard,
  tailwind,
  nodejs,
  mongodb,
  git,
  tcslogo,
  maxgenlogo,
  motionLogo,
  realestate,
  todo,
  zomato,
  urlshort,
  wplogo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Works",
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
    name: "HTML",
    icon: htmllogo,
  },
  {
    name: "CSS",
    icon: csslogo,
  },
  {
    name: "JavaScript",
    icon: javascriptlogo,
  },
  {
    name: "React JS",
    icon: reactjslogo,
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
    name: "Framer Motion",
    icon: motionLogo,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Wordpress",
    icon: wplogo,
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
    date: "Jan 2020 - May 2020",
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
  {
    name: "Todo with Local Storage",
    description:
      "A simple and efficient To-Do App built with React.js that helps users manage their daily tasks. The app uses the browser's Local Storage to save tasks, ensuring data persists across sessions without the need for a backend.",
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
    image: todo,
    source_code_link: "https://todolocal-one.vercel.app/",
    previw_link: "https://todolocal-one.vercel.app/",
  },
  {
    name: "URL Shortner App",
    description:
      "efficient URL shortener built with Node.js and Express. It allows users to generate short, shareable links that redirect to long URLs.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: urlshort,
    source_code_link: "https://github.com/rohitchornele/urlShortner",
    previw_link: "https://github.com/rohitchornele/urlShortner",
  },
];

export { services, technologies, experiences, testimonials, projects };
