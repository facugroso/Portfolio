import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import WorkItem from "./components/WorkItem";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <WorkItem />
    </div>
  );
}

export default App;
