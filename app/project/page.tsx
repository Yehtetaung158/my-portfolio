import IsAdmin from "@/components/nav/IsAdmin";
import ProjectCards from "@/components/project/projectCards";
import { db } from "@/server";
import { auth } from "@/server/auth";
import { getSession } from "next-auth/react";
import React from "react";

const ProjectPage = async () => {
  const projectData = await db.query.projects.findMany();
  // const session = await getSession();
  //   const role = session?.user.role;
  const session = await auth();
  const role = session?.user.role ?? "user";

  return (
    <div className="overflow-auto h-full">
      <div className=" space-y-4">
        <IsAdmin role={role!} name="Projects" path="/dashboard/project" />
        <hr />
        {projectData && <ProjectCards projectData={projectData} />}
      </div>
    </div>
  );
};

export default ProjectPage;
