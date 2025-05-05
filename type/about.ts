import { z } from "zod";

export const aboutSchema = z.object({
  aboutMe: z.string().min(10, {
    message: "About Me must be at least 10 characters",
  }),
  image: z.string().url({
    message: "Image must be a valid URL",
  }),
});
