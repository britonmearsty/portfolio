import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className=" flex  justify-between md:flex-row flex-col p-10 scroll-smooth ">
      <form className=" bg-slate-200 p-10 flex flex-col gap-5 w-[500px]  ml-10 rounded-lg shadow-lg mb-20 border border-blue-500">
        <div className="bg-blue-400 h-3 w-3 rounded-full animate-ping"></div>
        <div className="flex gap-14 w-[100%]">
          <input
            type="text"
            placeholder="FirstName"
            className="p-2 rounded-lg w-[200px] focus:outline-blue-500 border border-blue-200 "
            required
          />
          <input
            type="text"
            placeholder="secondName"
            className="p-2 rounded-lg w-[200px] focus:outline-blue-500 border border-blue-200"
          />
        </div>
        <input
          type="email"
          placeholder="email"
          className="p-2 rounded-lg focus:outline-blue-500 border border-blue-200"
          required
        />
        <input
          type="email"
          placeholder="subject"
          className="p-2 rounded-lg focus:outline-blue-500 border border-blue-200"
        />
        <textarea
          placeholder="text-area"
          className="p-2 rounded-lg min-h-60 focus:outline-blue-500 border border-blue-200 "
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-white border hover:border-blue-600 hover:border p-3 rounded-xl text-2xl font-bold duration-300 active:bg-green-500">
          send
        </button>
      </form>
      <div className="flex flex-col m-10 mr-20">
        <h1 className="capitalize font-bold text-2xl mb-7 underline">
          contact info:
        </h1>
        <div className=" flex flex-col gap-10">
          <div className="flex gap-5 items-center border-b-2 text-center">
            <MdDriveFileRenameOutline size={15} />
            <p className="text-xl">Briton Cheruyot</p>
          </div>
          <div className="flex gap-5 items-center border-b-2 text-center">
            <FaLocationDot size={15} /> <p className="text-xl">Nairobi,kenya</p>
          </div>
          <div className="flex gap-5 items-center border-b-2 text-center">
            <FaPhoneAlt size={15} />
            <p className="text-xl ">(+254)758-939-807</p>
          </div>
          <div className="flex gap-5 items-center border-b-2 text-center">
            <FaEnvelope size={15} />
            <p className="text-xl ">mearstybriton@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-10 mt-10">
          <FaFacebookF className="cursor-pointer hover:scale-150 duration-300 ease-in-out border rounded-full border-blue-500 p-2 hover:bg-blue-400 text-4xl font-bold " />
          <FaInstagram className="cursor-pointer hover:scale-150 duration-300 ease-in-out border rounded-full border-blue-500 p-2 hover:bg-blue-400 text-4xl font-bold " />
          <FaGithub className="cursor-pointer hover:scale-150 duration-300 ease-in-out border rounded-full border-blue-500 p-2 hover:bg-blue-400 text-4xl font-bold " />
          <FaDiscord className="cursor-pointer hover:scale-150 duration-300 ease-in-out border rounded-full border-blue-500 p-2 hover:bg-blue-400 text-4xl font-bold " />
          <FaXTwitter className="cursor-pointer hover:scale-150 duration-300 ease-in-out border rounded-full border-blue-500 p-2 hover:bg-blue-400 text-4xl font-bold " />
        </div>
        <h1 className="mt-16 text-xl bg-gradient-to-r from-blue-500 to bg-purple-500 font-bold bg-clip-text text-transparent selection:bg-yellow-500 selection:text-white">
          “Feel free to reach out for collaboration, freelance opportunities, or
          just to say hi!”
        </h1>
      </div>
    </div>
  );
};
export default Contact;
