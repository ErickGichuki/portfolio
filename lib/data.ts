import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import hymnsImg from "@/public/hymns.png";
import eventImg from "@/public/event.png";
import cliImg from "@/public/cli.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  
  {
    title: "Data Analyst",
    location: "Kisumu, Kenya",
    description:
      "Served as a Data Analyst at Correlaction Africa, where I analyzed and interpreted complex data to support business decisions",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  
] as const;

export const projectsData = [
  {
    title: "Event Hub",
    description:
      "A robust system designed to enable organisations manage events while offering users an intuitive interface to view & engage with upcoming events.",
    tags: ["React", "Flask", "Tailwind"],
    imageUrl: eventImg,
    githubUrl:"https://github.com/IannitoTechbros/PHASE-4---GROUP-PROJECT---IAN-GIDEON-ERICK-GRIFFINS.git"
  },
  {
    title: "Hymns web app",
    description:
      "Its a platform that allows users to search and browse hymns by author, key and title, making it easy to find and explore a wide range of hymns.",
    tags: ["HTML","Js","CSS"],
    imageUrl: hymnsImg,
    githubUrl:"https://github.com/ErickGichuki/Hymns.git"
  },
  {
    title: "CLI hymns app",
    description:
      "A command line management system that enables users to create, update, read and delete hymns efficiently.",
    tags: ["Python", "Sqlite", "Click"],
    imageUrl: cliImg,
    githubUrl:"https://github.com/ErickGichuki/CLI-hymns-app.git"
  },
] as const;

type SkillsCategory = "frontend" | "backend";

type SkillsData = {
  [key in SkillsCategory]:readonly string[];
}

export const skillsData: SkillsData = {
  frontend: ["HTML", "CSS", "JavaScript", "React","Tailwind"],
  backend: ["Python", "Flask", "PostgreSQL", "SQlite", "MongoDB"],
} as const;