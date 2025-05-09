import ProjectEditForm from "@/components/project/projectEditForm";
import { getProjectById } from "@/server/action/projectAction";

export default async function ProjectEdit({
  params,
}: {
  params: { id: number };
}) {
  const projectId = params.id;
  const project = await getProjectById(projectId);

  if (!project) {
    return <div className="text-red-500">Project not found</div>;
  }

  return (
    <div className="p-6">
      <ProjectEditForm initialData={project} />
    </div>
  );
}
