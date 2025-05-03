"use server";

import { actionClient } from "./safe-action";
import { registerSchema } from "@/type/register-schem";
import bcrypt from "bcrypt";
import { db } from "..";
import { eq } from "drizzle-orm";
import { users } from "../schema";

export const RegisterAction = actionClient
  .schema(registerSchema)
  .action(async ({ parsedInput: { email, password, name } }) => {
    try {
      const hashPassword = await bcrypt.hash(password, 10);
      const isExistingUser = await db.query.users.findFirst({
        where: eq(users.email, email),
      });
      if (isExistingUser) {
        return {
          error: "User already exists.",
        };
      }
      await db.insert(users).values({
        name,
        email,
        password: hashPassword,
      });
      return {
        success: "User registered successfully.",
      };
    } catch (error) {
      return {
        error: "Something went wrong. Please try again.",
      };
    }
  });
