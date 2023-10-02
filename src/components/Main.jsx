import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left- scale-x-[-1.4]"
        src="public/backroundImage.avif"
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
            <FaLinkedinIn className=" cursor-pointer " size={20} />
            <FaGithub className="cursor-pointer " size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
