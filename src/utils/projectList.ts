import { cardType } from "../components/projects/ProjectCard";

import junkyard from "~/assets/junkyard-of-shangri-la/junkyard-of-shangri-la_light_mode.jpg";
import rightdrive from "~/assets/rightdrive-dev-test/rightdrive-dev-test_page1.jpg";
import wbtracker from "~/assets/wbtracker/wbtracker_home.png";
import yspm from "~/assets/yspm/yspm_landing_page_light_mode.jpg";
// import ev_dashboard from "~/assets/ev-dashboard/ev-dashboard_tab1.jpg";

export const projects: Omit<
  cardType,
  "setShowProjectView" | "order" | "setSelectedProject" | "setGridEffect"
>[] = [
  {
    title: "Junkyard of SL",
    technologies: [
      "Python",
      "FastAPI",
      "Server-Side Rendering",
      "Nuxt",
      "Vue",
      "TypeScript",
      "Tailwind",
      "Web Accessibility",
    ],
    description: [
      "Implemented a robust backend to facilitate efficient web scraping, enabling real-time search functionality for products within the online bookstore.",
      "Prioritized accessibility by integrating features in compliance with WCAG, including comprehensive support for screen readers and keyboard navigation, providing an inclusive experience for a wide range of users.",
    ],
    image: junkyard,
    link: "https://junkyard-of-shangri-la.onrender.com",
    status: "Work In Progress",
  },
  {
    title: "RD Dev Test",
    technologies: [
      "React",
      "Redux",
      "TypeScript",
      "Material UI",
      "Serverless",
      "Express",
      "Redis",
      "Vitest",
      "React Testing Library",
      "Web Accessibility",
    ],
    description: [
      "Prioritized accessibility by adhering to WCAG guidelines, implementing features such as screen reader support and keyboard navigation for an inclusive experience.",
      "Demonstrated expertise in implementing advanced features, including caching mechanisms, rate limiting, and exponential backoff, contributing to the application's efficiency and reliability.",
    ],

    image: rightdrive,
    link: "https://rightdrive-dev-test.netlify.app",
    status: "Completed",
  },
  {
    title: "YSPM",
    technologies: ["React", "TypeScript", "Mantine UI", "Express", "REST API"],

    description: [
      "Implemented a robust backend to seamlessly interact with the Spotify platform, allowing users to create and manage playlists with ease.",
      "Designed an intuitive user interface that supports key features such as the creation of genre-based playlists, providing users with a personalized and curated listening experience.",
      "Introduced innovative functionality for playlist subscriptions, allowing users to follow and stay updated on their favorite playlists effortlessly.",
    ],
    image: yspm,
    link: "https://yspm-ccnd.onrender.com",
    status: "Work In Progress",
  },
  /*
  {
    title: "EV-Dashboard",
    technologies: ["Figma", "React", "TypeScript", "SCSS"],
    description:[
      "Engineered a modular system to support up to 20 smaller applications internally, treating them as widgets, contributing to the platform's flexibility and scalability.",
      "Collaborated closely with cross-functional teams, participating in agile development sprints, and ensuring the alignment of technical solutions with project goals.",
    ],
      image: ev_dashboard,
    link: "https://ev-dashboard.onrender.com",
    status: "Hiatus",
  },
  */
  {
    title: "WB Tracker",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    description: [
      "Enabled users to participate in mental health surveys, providing a valuable tool for self-reflection and tracking mental health trends over time.",
      "Developed graphing features to visualize mental health data trends, empowering users to gain insights into their well-being and fostering a proactive approach to mental health management.",
    ],
    image: wbtracker,
    link: "https://wbtracker.onrender.com",
    status: "Completed",
  },
];
