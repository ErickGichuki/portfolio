import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import hymnsImg from "@/public/hymns.png";
import eventImg from "@/public/event.png";
import cliImg from "@/public/cli.png";
import danImg from "@/public/daniel.png";
import spaceImg from "@/public/spacehub.png";
import farbestImg from "@/public/farbest.png"

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
    title:"Erick Solutions",
    description:
    "Its an e-commerce platform that showcases a curated collection of best-selling items, complete with detailed product insights and competitive pricing.",
    tags: ["React", "Tailwind", "Firebase"],
    imageUrl: farbestImg,
    githubUrl: "https://github.com/ErickGichuki/erics.git"
  },
  {
    title:"SpaceHub",
    description:
    "It is a dynamic platform designed to make users easily discover and book unique spaces for a variety of events. It offers a seamless experience for finding and renting the perfect venue",
    tags: ["React", "Flask", "Postgresql"],
    imageUrl: spaceImg,
    githubUrl: "https://github.com/IannitoTechbros/PHASE-5-GROUP-PROJECT---IAN---ERICK---MARTIN---FELIX---JEREMIAH.git"
  },
  {
    title: "Daniel Interior Designs",
    description:
      "An interior design web app for Daniel Interior Designs. The platform is designed with a focus on modern design aesthetics and user experience.",
    tags: ["React", "Flask", "Tailwind"],
    imageUrl: danImg,
    githubUrl:"https://github.com/ErickGichuki/Daniel-Interior-designs.git"
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
  frontend: ["HTML", "CSS", "JavaScript", "React","Tailwind", "Next.js"],
  backend: ["Python", "Flask", "Django", "PostgreSQL", "SQlite", "MongoDB"],
} as const;