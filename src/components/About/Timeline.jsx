"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "2020–2021",
    company: "TechStart Inc.",
    role: "Junior Developer",
    accomplishments:
      "Developed and maintained client websites, increasing overall performance by 25%.",
  },
  {
    period: "2021–2023",
    company: "InnovateTech",
    role: "Full Stack Developer",
    accomplishments:
      "Led a team of 3 in creating a new SaaS product, resulting in $1M ARR within the first year.",
  },
  {
    period: "2023–Present",
    company: "FutureSoft",
    role: "Senior Developer",
    accomplishments:
      "Architecting scalable solutions for enterprise clients and mentoring junior developers.",
  },
];

export default function Timeline() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="space-y-6">
      <h2 className="text-3xl font-semibold">How I Got Here</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.period}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
            className="flex flex-col md:flex-row md:space-x-4">
            <div className="w-32 font-bold">{exp.period}</div>
            <div>
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p className="text-gray-300">{exp.role}</p>
              <p className="mt-2">{exp.accomplishments}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
