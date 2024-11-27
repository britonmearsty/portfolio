"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center">
      <h1 className="text-6xl font-bold mb-4">About Me</h1>
      <p className="text-2xl text-gray-300 italic">
        "Driven by code, inspired by innovation."
      </p>
    </motion.section>
  );
}
