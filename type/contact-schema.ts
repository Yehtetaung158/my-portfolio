import { z } from "zod";

export const contactSchema = z.object({
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  linkIn: z.string().url(),
});
