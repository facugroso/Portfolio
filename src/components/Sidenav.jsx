import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { GoProjectSymlink } from "react-icons/go";
import { BsPerson } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/600 flex flex-col justify-center items-center z-40">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[40%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <PiProjectorScreenChartLight size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            onClick={handleNav}
            href="#project"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GoProjectSymlink size={20} />
            <span className="pl-4">Proyect</span>
          </a>
          <a
            onClick={handleNav}
            href="#resume"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <CiMail size={20} />
            <span className="pl-4">para revisar este codigo</span>
          </a>
        </div>
      ) : (
        <div className="md:block hidden fixed top-[25%] z-10">
          <div className="flex flex-col">
            <a
              href="#main"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <AiOutlineHome size={20} />
            </a>
            <a
              href="#work"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <PiProjectorScreenChartLight size={20} />
            </a>
            <a
              href="#main"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <GoProjectSymlink size={20} />
            </a>
            <a
              href="#main"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <BsPerson size={20} />
            </a>
            <a
              href="#main"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <CiMail size={20} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidenav;
