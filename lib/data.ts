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
    title: "DevOps",
    location: "Remote, Kenya",
    description:
      "Design and build scalable, cost-optimized cloud infrastructure for clients, ensuring high performance, availability, and security across environments",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
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
    title: "CI/CD Pipeline",
    description:
      "Automated a robust CI/CD pipeline for a Java application deployed on K8s, leveraging Jenkins, Docker and ArgoCD, enhanced code quality, efficient delivery through GitOps.",
    tags: ["Jenkins", "ArgoCD", "SonarQube"],
    imageUrl: cliImg,
    githubUrl:"https://github.com/ErickGichuki/Java-maven-cicid.git"
  },
  {
    title: "Daniel Interior Designs",
    description:
      "An interior design-based company that offers services for transforming spaces with creativity and precision tailored to each client's needs.",
    tags: ["Nextjs", "Python", "Tailwind"],
    imageUrl: danielsImg,
    githubUrl:"https://danielinteriordesigns.vercel.app/"
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
