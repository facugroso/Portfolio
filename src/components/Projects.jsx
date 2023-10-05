import React from "react";
import ProjectItem from "./ProjectItem";
import hyperx from "../assets/hyperx.png";
import project2Img from "../assets/project2Img.jpg";
import project3Img from "../assets/project3Img.jpg";

const Projects = () => {
  return (
    <div id="projects " className="max-w-[1040] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum et id
        sed repellendus eius ipsum dolores, maiores ducimus magnam veritatis
        adipisci? Distinctio asperiores illo quidem.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={hyperx} title="1" />
        <ProjectItem img={project2Img} title="Tute" />
        <ProjectItem img={project3Img} title="3" />
      </div>
    </div>
  );
};

export default Projects;
