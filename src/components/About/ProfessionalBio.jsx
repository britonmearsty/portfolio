"use client";

import { motion } from "framer-motion";

export default function ProfessionalBio() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="space-y-6">
      <h2 className="text-3xl font-semibold">Who I Am</h2>
      <p className="text-lg text-gray-300">
        I'm John Doe, a Full Stack Developer with a passion for crafting
        efficient and scalable web solutions. My journey in tech began with a
        curiosity for how things work on the web, and today, I specialize in
        building robust applications using modern JavaScript frameworks and
        cloud technologies.
      </p>
      <p className="text-lg font-medium">
        My mission is to solve problems through technology, creating impactful
        and user-centric applications.
      </p>
    </motion.section>
  );
}
