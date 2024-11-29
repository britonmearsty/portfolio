"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          I'm always open to new projects and collaborations. Let's work
          together to bring your ideas to life!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:shadow-lg">
          Let's Connect
        </motion.button>
      </div>
    </section>
  );
}
