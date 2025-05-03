import * as z from "zod";

export const registerSchema = z.object({
  name: z.string(),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(4, {
    message: "Please enter a valid password",
  }),
});
