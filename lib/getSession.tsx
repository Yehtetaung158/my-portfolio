// app/utils/getSession.ts
"use server";

import { auth } from "@/server/auth";
import type { Session } from "next-auth";

// a plain async function, not a React hook
export async function getSession(): Promise<Session | null> {
  const session = await auth();
  return session;
}
