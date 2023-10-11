import React from "react";
import ProjectItem from "./ProjectItem";
import hyperx from "../assets/hyperx.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        En estos trabajé con HTML, CSS, React.js, bootstrap, entre otros.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={hyperx} title="HYPERX" />
      </div>
    </div>
  );
};

export default Projects;
