"use client";

import { motion } from "framer-motion";

const highlights = [
  { label: "Years of Experience", value: "5+" },
  { label: "Completed Projects", value: "50+" },
  { label: "Happy Clients", value: "30+" },
];

export default function Highlights() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="space-y-6">
      <h2 className="text-3xl font-semibold">Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((highlight, index) => (
          <motion.div
            key={highlight.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
            className="text-center">
            <div className="text-4xl font-bold text-blue-400">
              {highlight.value}
            </div>
            <div className="text-gray-300">{highlight.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
