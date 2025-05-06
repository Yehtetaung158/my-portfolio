import { z } from "zod";

export const projectSchema = z.object({
  name: z.string().min(1, "Name is required"),
  imageUrl: z.string().url("Image URL must be valid"),
  description: z.string().min(1, "Description is required"),
  sourceCode: z.string().url("Source code must be a valid URL"),
});
