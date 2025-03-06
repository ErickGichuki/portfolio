import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import tictacImg from "@/public/tictac.png";
import cliImg from "@/public/cli.png";
import kiganjoImg from "@/public/kiganjo.png"
import bericksImg from "@/public/bericks.png";
import danielsImg from "@/public/daniels.png";

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
    location: "Nairobi, Kenya",
    description:
      "Worked as a Data Analyst at Correlaction Africa, leveraging analytical skills to interpret complex datasets and provide actionable insights to support strategic business decisions.",
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
    githubUrl: "https://sdakiganjochurchchoir.vercel.app/"
  },
  {
    title:"Bericks Designs",
    description:
    "An ecommerce website that showcases a curated collection of best selling items, complete with detailed product insights and competitive pricing.",
    tags: ["React", "Tailwind", "Django"],
    imageUrl: bericksImg,
    githubUrl: "https://bericks.vercel.app/"
  },
  {
    title: "Daniel Interior Designs",
    description:
      "An interior design-based company that offers services for transforming spaces with creativity and precision, providing custom solutions tailored to each client's needs.",
    tags: ["Nextjs", "Python", "Tailwind"],
    imageUrl: danielsImg,
    githubUrl:"https://danielinteriordesigns.vercel.app/"
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
type SkillsCategory = "frontend" | "backend" | "devops";

type SkillsData = {
  [key in SkillsCategory]:readonly string[];
}

export const skillsData: SkillsData = {
  frontend: ["HTML", "JavaScript", "React","Tailwind", "Next.js", "Typescript", "Haskell"],
  backend: ["Python", "Nodejs","Express","Flask", "Django", "PostgreSQL", "Cloud"],
  devops: ["Jenkins", "GitHub Actions", "Terraform","Docker", "Kubernetes", "Ansible"]
} as const;
