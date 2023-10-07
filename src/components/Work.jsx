import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "Social Politics",
    duration: "4 months",
    details:
      "Recreational events with people of all ages. But also tasks such as maintenance.",
  },
  {
    year: 2021,
    title: "Supermarket",
    duration: "19 months",
    details:
      "Storage of merchandise, stock control and product replacement. Also attention to the counter.",
  },
  {
    year: 2019,
    title: "Cooperative P.S.",
    duration: "15 months",
    details: "Troubleshooting, entering receipts into the system, etc.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
