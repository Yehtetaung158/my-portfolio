import ProjectEditForm from "@/components/project/projectEditForm";
import { getProjectById } from "@/server/action/projectAction";

export default async function ProjectEdit({
  params,
}: { params: Promise<{ id: string }> }) {
  const { id: idString } = await params;
  const projectId = parseInt(idString);

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
