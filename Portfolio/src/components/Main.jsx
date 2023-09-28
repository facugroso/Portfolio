import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="public\bacround image.jpeg"
        alt="bacround image"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/12">
        <div className="max-w-[-700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-xl font -bold text-white-800">
            Es un placer para mí, contar con tu presencia. Yo soy Facundo Groso.
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-white-800">
            <TypeAnimation
              sequence={[
                "Desarrollador Web",
                1000,
                "Conocimientos de HTML5, CSS3 yJavaScript.",
                1000,
                "Graduado del Bootcamp intencivo (teórico-práctico) de hackAcademy.",
                1000,
                "Me especialicé en las tecnologias MERN y adquirí conocimientos de SQL.",
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaLinkedinIn className="cursor-pointer" size={20} />
            <FaGithub className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
