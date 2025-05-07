import ProjectCards from "@/components/project/projectCards";
import { db } from "@/server";
import React from "react";

const ProjectPage = async () => {
  const projectData = await db.query.projects.findMany();

  return (
    <div className="overflow-auto h-full"> 
      <div className=" w-full h-18">
      </div>
      <h1 className="text-2xl font-bold mb-4">My Projects</h1>
      {projectData && <ProjectCards projectData={projectData} />}
    </div>
  );
};

export default ProjectPage;
