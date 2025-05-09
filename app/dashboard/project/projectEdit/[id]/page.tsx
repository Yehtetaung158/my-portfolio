import { GetServerSideProps } from "next";
import ProjectEditForm from "@/components/project/projectEditForm";
import { getProjectById } from "@/server/action/projectAction";

interface ProjectEditProps {
  params: { id: string };
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const projectId = parseInt(context.params?.id as string);
  const project = await getProjectById(projectId);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      params: { id: context.params?.id },
      project,
    },
  };
};

export default function ProjectEdit({
  params,
  project,
}: ProjectEditProps & { project: any }) {
  if (!project) {
    return <div className="text-red-500">Project not found</div>;
  }

  return (
    <div className="p-6">
      <ProjectEditForm initialData={project} />
    </div>
  );
}
