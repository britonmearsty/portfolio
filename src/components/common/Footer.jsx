import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-500 to-slate-700 text-white py-12">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        {/* Logo and Description */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h1 className="text-2xl font-bold">Briton..</h1>
          <p className="mt-4 text-center md:text-left">
            Connecting the world through innovative solutions.
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center mb-8 md:mb-0 md:w-1/3">
          <li className="mx-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/skills" className="hover:underline">
              Skills
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/projects" className="hover:underline">
              Projects
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Media Links */}
        <div className="flex space-x-4 md:w-1/3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer">
            FB
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer">
            TW
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer">
            LI
          </a>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-8 text-center">
        <form className="flex justify-center items-center bg-white rounded-lg p-2 max-w-md mx-auto">
          <input
            type="email"
            className="p-2 bg-transparent focus:outline-none w-full"
            placeholder="Enter your email"
            required
          />
          <button className="bg-black text-white p-2 rounded-r-lg hover:bg-gray-800">
            Subscribe
          </button>
        </form>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Briton cheruyot. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
