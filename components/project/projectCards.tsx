import React from "react";

type Project = {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  sourceCode: string;
  project_url: string;
};

type Props = {
  projectData: Project[];
};

const ProjectCards = ({ projectData }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  py-2 lg:grid-cols-3 gap-8">
      {projectData.map((project) => (
        <div
          key={project.id}
          className="border p-4 rounded shadow max-w-[400px] max-sm:w-full max-sm:mx-auto "
        >
          <img
            src={project.imageUrl}
            alt={project.name}
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="mt-4 text-xl max-sm:text-lg font-semibold mb-2">{project.name}</h2>
          <p className="text-slate-900 drop-shadow-lg max-sm:text-sm dark:text-sky-100 ">
            {project.description}
          </p>
          <div className="mt-2 space-x-2">
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 max-sm:text-sm underline"
            >
              Source Code
            </a>
            <a
              href={project.project_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 max-sm:text-sm underline"
            >
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
