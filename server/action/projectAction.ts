"use server";

import { db } from "@/server";
import { projects } from "../schema";
import { projectSchema } from "@/type/projectSchema";
import { z } from "zod";
import { eq } from "drizzle-orm";

// Create
export async function createProject(input: z.infer<typeof projectSchema>) {
  const parse = projectSchema.safeParse(input);
  if (!parse.success) {
    return { success: false, error: parse.error.flatten().fieldErrors };
  }

  const result = await db.insert(projects).values(parse.data).returning();
  return { success: true, data: result[0] };
}

// Read
export async function getProjects() {
  const result = await db.select().from(projects);
  return result;
}

// Update
// export async function updateProject(
//   id: number,
//   input: z.infer<typeof projectSchema>
// ) {
//   const parse = projectSchema.safeParse(input);
//   if (!parse.success) {
//     return { success: false, error: parse.error.flatten().fieldErrors };
//   }

//   const result = await db
//     .update(projects)
//     .set(parse.data)
//     .where(eq(projects.id, id))
//     .returning();

//   return { success: true, data: result[0] };
// }
// /server/action/projectAction.ts
export async function updateProject({
  id,
  name,
  imageUrl,
  description,
  sourceCode,
  project_url
}: {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  sourceCode: string;
  project_url:string;
}) {
  const parse = projectSchema.safeParse({
    name,
    imageUrl,
    description,
    sourceCode,
    project_url
  });

  if (!parse.success) {
    return { success: false, error: parse.error.flatten().fieldErrors };
  }

  const result = await db
    .update(projects)
    .set(parse.data)
    .where(eq(projects.id, id))
    .returning();

  return { success: true, data: result[0] };
}

// Delete
export async function deleteProject(id: number) {
  await db.delete(projects).where(eq(projects.id, id));
  return { success: true };
}

export async function getProjectById(id: number) {
  const result = await db
    .select()
    .from(projects)
    .where(eq(projects.id, id));

  return result[0]; // return the matching project or undefined
}
