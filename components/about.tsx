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
        <span className="font-medium">Economics and Statistics</span>, I started working as a data analyst at Correlaction Africa limited. Later on I enrolled at Powerlearn Project and learned{" "}
        <span className="font-medium">full-stack web development using Django and Javascript and Flutter for mobile applications. I am currently studying at Moringa school.</span>{" "}
        <span className="">My favorite part of programming</span> is the
        back-end development. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Flask, and Database
        </span>
        I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing playing piano and reading blogs.{" "}
        <span className="font-medium">learning new things is my part</span>. I am currently
        learning about{" "}
        <span className="font-medium">data and machine learning</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
