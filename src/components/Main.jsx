import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover mt-3"
        src="/img/2.jpg"
        alt="bacround image"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/12">
        <div className="max-w-2xl m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="text-4xl text-xl font-bold text-white-800">
            Welcome, I´m Facundo Groso.
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-white-800">
            <TypeAnimation
              sequence={[
                "Developer FullStack jr.",
                1000,
                "HTML5, CSS3, JavaScript and React.",
                1000,
                "Hack Academy Graduate.",
                1000,
                "I specialized in MERN.",
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "0.8em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between  items-end  pt-6 max-w-[200px] w-full">
            <a href="https://www.linkedin.com/in/facundogroso/">
              <FaLinkedinIn className=" cursor-pointer " size={20} />
            </a>
            <a href="http://github.com/facugroso/">
              <FaGithub className="cursor-pointer " size={20} />
            </a>
          </div>
          <a
            href="https://www.canva.com/design/DAFYyG0uXZE/wvlQM6hu5dQ7oGoP5vN5qA"
            download
          >
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-3">
              <svg
                class="fill-current w-4 h-4 mr-2"
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
