"use client";

import { motion } from "framer-motion";
import { FaHiking, FaGuitar, FaGamepad } from "react-icons/fa";

export default function PersonalTouch() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="space-y-6">
      <h2 className="text-3xl font-semibold">When I'm Not Coding</h2>
      <p className="text-lg text-gray-300">
        When I'm not immersed in lines of code, you can find me exploring new
        trails, strumming my guitar, or diving into the latest indie games.
      </p>
      <div className="flex justify-center space-x-8">
        <FaHiking className="text-4xl" />
        <FaGuitar className="text-4xl" />
        <FaGamepad className="text-4xl" />
      </div>
    </motion.section>
  );
}
