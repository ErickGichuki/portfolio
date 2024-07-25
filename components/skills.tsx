"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const renderSkills = (skills: readonly string[], category: string) => (
  <>
    <h3 className="text-xl font-semibold mt-8 mb-4">{category}</h3>
    <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
      {skills.map((skill, index) => (
        <motion.li
          className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          {skill}
        </motion.li>
      ))}
    </ul>
  </>
);

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      {renderSkills(skillsData.frontend, "Frontend Skills")}
      {renderSkills(skillsData.backend, "Backend Skills")}
    </section>
  );
}
