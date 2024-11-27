import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="p-20 bg-white flex items-center relative">
      <img
        src="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
        className=" rounded-r-full hidden md:block"
      />
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <p className="text-lg text-gray-700  mx-auto text-justify">
          I'm a passionate full-stack developer with a keen eye for design and a
          love for creating seamless user experiences. With over 5 years of
          experience in web development, I specialize in building scalable and
          efficient applications using cutting-edge technologies. My mission is
          to bridge the gap between complex functionalities and intuitive
          interfaces, making technology accessible and enjoyable for everyone.
        </p>
        <Link to="/about">
          <button className="absolute bottom-10 right-[420px] bg-blue-500 p-2 rounded-lg hover:bg-transparent border border-blue-500 duration-300 ease-in-out text-xl font-bold">
            More about me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
