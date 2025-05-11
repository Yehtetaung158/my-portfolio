export const dynamic = "force-dynamic";
import IsAdmin from "@/components/nav/IsAdmin";
import ProjectCards from "@/components/project/projectCards";
import { db } from "@/server";
import { getProjects } from "@/server/action/projectAction";
import { projects } from "@/server/schema";
// import { auth } from "@/server/auth";
// import { getSession } from "next-auth/react";
import React from "react";

const ProjectPage = async () => {
  const projectData = await getProjects()
  // const session = await auth();
  // const role = session?.user.role ?? "user";

  return (
    <div className="overflow-auto h-full mt-14" >
      <div className=" space-y-4">
        <IsAdmin 
        // role={role!} 
        name="Projects" path="/dashboard/project" />
        <hr />
        {projectData && <ProjectCards projectData={projectData} />}
      </div>
    </div>
  );
};

export default ProjectPage;
