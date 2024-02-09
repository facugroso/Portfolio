import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Main = () => {
  return (<div>
    <div id="main">

      
        <img
          className="mt-5 w-auto mx-auto"
          src="/img/photoWelcome.jpg"
          alt="background image"
        />
      
       
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl text-xl font-bold text-white-800">
            Welcome to my Portfolio. 
          </h1>
          <p className=" my-2 text-base font-normal text-stone-1000">
            I´m Facundo Groso, an apassionate for the knowledge and the work. 
          </p>

          <div className="flex justify-between items-end pt-6 max-w-[200px] w-full mx-auto">
            <a href="https://www.linkedin.com/in/facundogroso/">
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
            <a href="http://github.com/facugroso/">
              <FaGithub className="cursor-pointer" size={20} />
            </a>
          </div>
          <a href="public/img/CV Eng - Facundo Groso - 2024.jpg" download>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-3">
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Resume</span>
            </button>
          </a>
        </div>

    </div>
    </div>
  );
};

export default Main;
