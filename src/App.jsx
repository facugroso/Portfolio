import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import WorkItem from "./components/WorkItem";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <WorkItem />
      <Projects />
    </div>
  );
}

export default App;
