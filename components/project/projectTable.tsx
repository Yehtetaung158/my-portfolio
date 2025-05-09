"use client";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Copy, Delete, Edit, ExternalLink } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { deleteProject, getProjects } from "@/server/action/projectAction";
import { useEffect, useState } from "react";
import Link from "next/link";
import IsAdmin from "../nav/IsAdmin";
import { getSession } from "@/lib/getSession";

type Project = {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  sourceCode: string;
};

export default function ProjectTable({ data }: { data: Project[] }) {

  const [projects, setProjects] = useState<Project[]>([]);
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied source code URL!");
  };

  const fetchProjects = async () => {
    const result = await getProjects();
    setProjects(result);
  };

  const handleDelete = async (id: number) => {
    await deleteProject(id);
    toast.success("Project deleted!");
    fetchProjects();
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="p-6 space-y-4 mt-24">
      <div className="flex items-center justify-between">
        <h1 className=" text-2xl font-black">Project Table</h1>
        <Button asChild>
          <Link href={"/dashboard/project/projectCreate"}>+ New</Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Source Code</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((project) => (
            <TableRow key={project.id}>
              <TableCell>
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  width={50}
                  height={50}
                  className="rounded object-cover"
                />
              </TableCell>
              <TableCell>{project.name}</TableCell>
              <TableCell className="max-w-xs truncate">
                {project.description}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleCopy(project.sourceCode)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
              <TableCell className=" flex gap-2">
                <Delete
                  onClick={() => handleDelete(project.id)}
                  className=" text-red-500 size-6"
                />
                <Link href={`/dashboard/project/projectEdit/${project.id}`}>
                  <Edit className=" text-blue-500 size-6" />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
