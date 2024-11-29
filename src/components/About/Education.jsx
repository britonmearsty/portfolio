"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="space-y-6">
      <h2 className="text-3xl font-semibold">Education</h2>
      <div>
        <h3 className="text-xl font-semibold">
          Bachelor of Science in Computer Science
        </h3>
        <p className="text-gray-300">University of Technology, 2016-2020</p>
        <p className="mt-2">
          Graduated with honors. Capstone project: Developed a machine learning
          model for predicting software development project timelines.
        </p>
      </div>
    </motion.section>
  );
}
