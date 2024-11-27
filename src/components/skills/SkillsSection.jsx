"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaCss3, FaNode } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, description: "Building user interfaces" },
  { name: "JavaScript", icon: FaJs, description: "Web programming" },
  { name: "HTML5", icon: FaHtml5, description: "Markup language" },
  { name: "CSS3", icon: FaCss3, description: "Styling web pages" },
  { name: "Node.js", icon: FaNode, description: "Server-side JavaScript" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    description: "Utility-first CSS framework",
  },
  { name: "TypeScript", icon: SiTypescript, description: "Typed JavaScript" },
  { name: "Next.js", icon: SiNextdotjs, description: "React framework" },
];

const SkillCard = ({ name, icon: Icon, description }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}>
      <Icon className="text-4xl mb-4 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300" />
      <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
        {name}
      </h3>
      <p className="text-sm text-center text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Technologies I use to bring ideas to life.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
