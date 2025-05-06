import ProjectTable from "@/components/project/projectTable";
import { getProjects } from "@/server/action/projectAction";
import React from "react";

const ProjectPage = async () => {
  const projects = await getProjects();
  return <ProjectTable data={projects} />;
};

export default ProjectPage;
