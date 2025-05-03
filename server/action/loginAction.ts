"use server";

import { loginSchema } from "@/type/login-schem";
import { actionClient } from "./safe-action";
import { db } from "..";
import { eq } from "drizzle-orm";
import { users } from "../schema";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const LoginAction = actionClient
  .schema(loginSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (!existingUser) {
      return { error: "Invalid credential" };
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password!
    );

    console.log("Password comparison result:", isPasswordValid);

    if (!isPasswordValid) {
      return { error: "Invalid credential" };
    }

    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });

    return { success: "Successfully Sing" };
  });
