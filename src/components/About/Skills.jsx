"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiDjango,
  SiExpress,
  SiGit,
  SiDocker,
  SiFigma,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, category: "Frontend" },
  { name: "Vue.js", icon: SiVuedotjs, category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
  { name: "Node.js", icon: SiNodedotjs, category: "Backend" },
  { name: "Django", icon: SiDjango, category: "Backend" },
  { name: "Express", icon: SiExpress, category: "Backend" },
  { name: "Git", icon: SiGit, category: "Tools" },
  { name: "Docker", icon: SiDocker, category: "Tools" },
  { name: "Figma", icon: SiFigma, category: "Tools" },
];

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="space-y-6">
      <h2 className="text-3xl font-semibold">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
            className="flex items-center space-x-2 bg-gray-800 p-3 rounded-lg">
            <skill.icon className="text-2xl" />
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
