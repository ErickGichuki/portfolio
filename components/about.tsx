"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <div className="text-justify">
        <p className="mb-3">
          I hold a degree in <span className="font-medium">Economics and Statistics</span>, which laid the foundation for my analytical skills. My professional journey began as a Data Analyst at Correlaction Africa, where I honed my ability to derive insights from data. Eager to learn programming and solve real world problems facing us everyday, I joined Powerlearn Project bootcamp, diving into <span className="font-medium">full-stack web development using Django and JavaScript, as well as mobile development with Flutter</span>. I am currently enhancing my knowledge further at Moringa School.
        </p>
        <p className="mb-3">
          My passion lies in <span className="font-medium">back-end development</span>, where I enjoy tackling complex challenges and implementing effective solutions. My core technology stack includes <span className="font-medium">React, Nextjs, Flask and Django</span>. I am committed to continuous learning and am actively seeking a <span className="font-medium">full-time Software Developer position</span> to leverage my skills and contribute to impactful projects.
        </p>
        <p>
          Outside of my professional life, I find joy in <span className="text-yellow-500">playing the piano</span>.
        </p>
      </div>
    </motion.section>
  );
}
