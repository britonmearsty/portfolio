import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Insights & Stories From My Journey in Tech
        </h1>
        <p className="text-xl mb-8">
          Here, I share coding tips, project stories, and the latest tech trends
          to inspire and educate.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/posts"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
            Explore Posts
          </Link>
          <Link
            to="#subscribe"
            className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
            Subscribe for Updates
          </Link>
        </div>
      </div>
    </section>
  );
}
