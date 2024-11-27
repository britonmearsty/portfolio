import React from "react";
import Image from "../../assets/images/photo1.png";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <div className=" bg-no-repeat bg-cover min-h-screen flex justify-between items-center bg-gradient-to-r from-blue-500 to-purple-500 selection:bg-purple-400 flex-wrap">
      {" "}
      <div className="border p-10 rounded-xl md:ml-20 flex flex-col">
        <h1 className="text-4xl text-white font-bold">
          Hi i 'am{" "}
          <span className="bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent">
            Briton..
          </span>
        </h1>
        <h2 className="md:text-3xl font-bold text-green-700 mt-5 mb-5 text-2xl">
          A proffessional{"    "}
          <span className="text-yellow-500 overflow-scroll">
            <TypeAnimation
              sequence={[
                "Web developer",
                1000,
                "Web designer",
                1000,
                "App developer",
                1000,
                "Tutor",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h2>
        <div className=" justify-center flex flex-col text-justify">
          <p className="text-white text-2xl md:mt-5">
            Crafting Responsive Websites with Creativity & Precision.
          </p>
          <p className="text-white text-2xl m:dmt-5">
            Specializing in React, Tailwind CSS, and modern web technologies.
          </p>
          <p className="text-white text-2xl md:mt-5">
            Helping businesses turn ideas into stunning websites.
          </p>
        </div>
        <div className="flex  justify-center items-centers p-5 mt-5 gap-20">
          <button className="w-[100px]  p-2 border border-blue-500 rounded-lg text-white bg-purple-500 hover:bg-transparent duration-300 ease-in-out">
            Download C.V
          </button>
          <button className=" w-[100px] p-2 border  border-purple-500 rounded-lg text-white bg-blue-600 hover:bg-transparent duration-300 ease-in-out">
            My Work
          </button>
        </div>
      </div>
      <img src={Image} alt="" className="w-[500px]  mr-20" />
    </div>
  );
};

export default Hero;
