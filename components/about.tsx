"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Economics and Statistics</span>, I commenced my career as a Data analyst at Correlaction Africa limited. I Later enhanced my technical skills by enrolling in the Powerlearn Project, where I gained comprehensive knowledge in full-stack web applications{" "}
        <span className="font-medium">using Django and Javascript, as well as mobile applications development with Flutter. I am currently pursuing further studies at Moringa school.</span>{" "}
        My passion lies in back-end development, where I thrive on solving complexproblems and devising efficient solutions. My core technology stack includes
        {" "}
        <span className="font-medium">
          React, Flask, and Database systems.
        </span>
        I am committed to continuous learning and am always keen to explore new technologies.
        <span className="font-medium">I am actively seeking a full-time position as a Software Developer where I can contribute my skills and grow professionally.</span>
      </p>

      <p>
        <span className="italic">In addition to my professional pursuits</span>, I enjoy playing the piano and reading blogs.{" "}
        <span className="font-medium">I am passionate about continuous learning and</span> am currently
        delving into{" "}
        <span className="font-medium">data science and machine learning.</span>
      </p>
    </motion.section>
  );
}
