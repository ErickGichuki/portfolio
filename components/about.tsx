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
          I am a <span className="font-medium">Software Engineer</span> well-versed in <span className="font-medium">DevOps, cloud computing and software development</span>. My focus is on building scalable, efficient systems and delivering impactful solutions in the tech space.
        </p>
        <p>
          I am passionate about innovation, continuous learning, and contributing to projects that make a difference.
        </p>
      </div>
    </motion.section>
  );
}
