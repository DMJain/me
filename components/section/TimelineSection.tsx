import React from "react";
import { Timeline } from "@/components/ui/timeline";

const TimelineSection = () => {
  const data = [
    {
      title: "2023 - Presnet",
      content: (
        <div>
          <h2 className="text-lg mb-2 text-secondary font-semibold">MS - Woolf University (Scaler), Remote </h2>
          <p className="text-muted-foreground">
            - Pursuing Master in Computer Science from Woolf University (Scaler)
            Specialing in Full Stack Development.
          </p>
          <p>
            - Built Fundamentals on : Data Structure, Algorithm, System Design, MERN, Spring, Data Structure, Project Management
          </p>
        </div>
      ),
    },
    {
      title: "2022 - 2024",
      content: (
        <div>
          <h2 className="text-lg mb-2 text-secondary font-semibold">QA Specialist @Dassault Systemes, Pune</h2>
          <p className="text-muted-foreground">
           - Automated 50+ high-priority test cases using CAFET (JavaScript), achieving a 30% reduction in testing time.<br/>
           - Played a key role in 9 major and 2 minor deployment releases across 2 product suites, ensuring timely delivery.<br/>
           - Developed 500+ test cases, resulting in near-zero bug slippage and ensuring software reliability and quality.<br/>
          </p>
        </div>
      ),
    },
    {
      title: "2018-2022",
      content: (
        <div>
          <h2 className="text-lg mb-2 text-secondary font-semibold">B.Tech. - MIT ADT, School of Engineering, Pune</h2>
          <p className="text-muted-foreground">
           - Specialized in Mechatronics & Automation Engineering<br/>
           - Created Lidar Based Crash Avoidance Systen for Automobiles at affordable rate.<br/>
           - Skill Built : 3D Modeling, CDF, Stress Testing, 2D & 3D Meshing, Product Design, 3d Printing, Embedded System, Programming<br/>
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

export default TimelineSection;
