import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import hymnsImg from "@/public/hymns.png";
import cliImg from "@/public/cli.png";
import kiganjoImg from "@/public/kiganjo.png"
import bericksImg from "@/public/bericks.png";

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
    title:"SDA Kiganjo Church Choir",
    description:
    "A high-standard music platform tailored for SDA choir, enabling seamless collaboration and song management.",
    tags: ["Nextjs", "Django", "Cloudinary"],
    imageUrl: kiganjoImg,
    githubUrl: "https://github.com/ErickGichuki/Kiganjochoir-frontend.git"
  },
  {
    title:"Bericks Designs",
    description:
    "An ecommerce website that showcases a curated collection of best selling items, complete with detailed product insights and competitive pricing.",
    tags: ["React", "Tailwind", "Firebase"],
    imageUrl: bericksImg,
    githubUrl: "https://github.com/ErickGichuki/Bericks-frontend.git"
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