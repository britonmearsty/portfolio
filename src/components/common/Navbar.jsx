import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const close = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="flex bg-white justify-between items-center sticky top-0 z-[1000]">
      <Link to="/">
        <div className="text-4xl font-bold m-5 font-['poppins']">Briton..</div>
      </Link>
      <ul className="m-5 flex gap-6 justify-between items-center">
        <Link to="/">
          <li className="text-xl font-bold md:flex gap-2 hover:text-green-500 duration-300 ease-in-out font-['poppins'] hidden">
            Home
          </li>
        </Link>
        <Link to="/about">
          <li className="text-xl font-bold md:flex gap-2 hover:text-green-500 duration-300 ease-in-out font-['poppins'] hidden">
            About
          </li>
        </Link>
        <Link to="/skills">
          <li className="text-xl font-bold md:flex gap-2 hover:text-green-500 duration-300 ease-in-out font-['poppins'] hidden">
            Skills
          </li>
        </Link>
        <Link to="/projects">
          <li className="text-xl font-bold md:flex gap-2 hover:text-green-500 duration-300 ease-in-out font-['poppins'] hidden">
            Projects
          </li>
        </Link>
        <Link to="/blog">
          <li className="text-xl font-bold md:flex gap-2 hover:text-green-500 duration-300 ease-in-out font-['poppins'] hidden">
            Blog
          </li>
        </Link>
        <Link to="/contact">
          <li className="text-xl font-bold md:flex gap-2 hover:text-green-500 duration-300 ease-in-out font-['poppins'] hidden">
            Contact
          </li>
        </Link>
        <div
          className="cursor-pointer hover:scale-110 duration-300 ease-in-out p-2 md:hidden"
          onClick={handleMenu}>
          {isMenuOpen ? <IoClose size={20} /> : <MdMenu size={20} />}
        </div>
      </ul>
      {/* mobile menu */}
      {isMenuOpen && (
        <ul className=" flex gap-6 justify-between  items-center bg-white flex-col absolute w-full md:w-[250px] rounded-lg shadow-md p-10 top-14 ">
          <Link to="/">
            <li
              className="text-xl font-bold md:flex gap-2 hover:text-green-500 duration-300 ease-in-out font-['poppins'] "
              onClick={close}>
              Home
            </li>
          </Link>
          <Link to="/about">
            <li
              className="text-xl font-bold md:flex gap-2 hover:text-green-500 duration-300 ease-in-out font-['poppins'] "
              onClick={close}>
              About
            </li>
          </Link>
          <Link to="/skills">
            <li
              className="text-xl font-bold md:flex gap-2 hover:text-green-500 duration-300 ease-in-out font-['poppins'] "
              onClick={close}>
              Skills
            </li>
          </Link>
          <Link to="/projects">
            <li
              className="text-xl font-bold md:flex gap-2 hover:text-green-500 duration-300 ease-in-out font-['poppins'] "
              onClick={close}>
              Projects
            </li>
          </Link>
          <Link to="/blog">
            <li
              className="text-xl font-bold md:flex gap-2 hover:text-green-500 duration-300 ease-in-out font-['poppins'] "
              onClick={close}>
              Blog
            </li>
          </Link>
          <Link to="/contact">
            <li
              className="text-xl font-bold md:flex gap-2 hover:text-green-500 duration-300 ease-in-out font-['poppins'] "
              onClick={close}>
              Contact
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
