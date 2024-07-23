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
      "I worked as a data analyst at correlaction Africa.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  
] as const;

export const projectsData = [
  {
    title: "Event Hub",
    description:
      "Event Hub is a management system that enables companies to create events nd users are able to view upcoming events seamlessly.",
    tags: ["React", "Flask", "Tailwind"],
    imageUrl: eventImg,
    githubUrl:"https://github.com/IannitoTechbros/PHASE-4---GROUP-PROJECT---IAN-GIDEON-ERICK-GRIFFINS.git"
  },
  {
    title: "Hymns web app",
    description:
      "Its a web application that helps users to browse hymns by author, key and title.",
    tags: ["HTML","Js","CSS"],
    imageUrl: hymnsImg,
    githubUrl:"https://github.com/ErickGichuki/Hymns.git"
  },
  {
    title: "CLI hymns app",
    description:
      "A command line management system that enables users to create, update, read and delete hymns.",
    tags: ["Python", "Sqlite", "Click"],
    imageUrl: cliImg,
    githubUrl:"https://github.com/ErickGichuki/CLI-hymns-app.git"
  },
] as const;

export const skillsData: SkillsData = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Next js","Tailwind"],
  backend: ["Python", "Flask", "Django", "PostgreSQL", "SQlite", "MongoDB"],
} as const;
 
type SkillsData = {
  frontend: string[];
  backend: string[];
}