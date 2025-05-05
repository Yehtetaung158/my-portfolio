"use server"

import { aboutSchema } from "@/type/about";
import { about } from "../schema";
import { eq } from "drizzle-orm";
import { db } from "..";
import { z } from "zod";

export async function upsertAbout(input: z.infer<typeof aboutSchema>) {
  const parse = aboutSchema.safeParse(input);

  if (!parse.success) {
    return {
      success: false,
      error: parse.error.flatten().fieldErrors,
    };
  }

  const { aboutMe, image } = parse.data;

  try {
    const existing = await db.select().from(about).limit(1);

    if (existing.length === 0) {
      const result = await db.insert(about).values({ aboutMe, image }).returning();
      return { success: true, action: "created", data: result[0] };
    } else {
      const result = await db
        .update(about)
        .set({ aboutMe, image })
        .where(eq(about.id, existing[0].id))
        .returning();
      return { success: true, action: "updated", data: result[0] };
    }
  } catch (error) {
    console.error("Upsert Error:", error);
    return { success: false, error: "Database error occurred." };
  }
}
