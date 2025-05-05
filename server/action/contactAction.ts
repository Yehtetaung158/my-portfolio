"use server";

import { contact } from "../schema";
import { eq } from "drizzle-orm";
import { db } from "..";
import { z } from "zod";
import { contactSchema } from "@/type/contact-schema";

export async function upsertContact(input: z.infer<typeof contactSchema>) {
  const parse = contactSchema.safeParse(input);

  if (!parse.success) {
    return {
      success: false,
      error: parse.error.flatten().fieldErrors,
    };
  }

  const { email, phone, linkIn } = parse.data;

  try {
    const existing = await db.select().from(contact).limit(1);

    if (existing.length === 0) {
      const result = await db
        .insert(contact)
        .values({ email, phone, linkIn })
        .returning();
      return { success: true, action: "created", data: result[0] };
    } else {
      const result = await db
        .update(contact)
        .set({ email, phone, linkIn })
        .where(eq(contact.id, existing[0].id))
        .returning();
      return { success: true, action: "updated", data: result[0] };
    }
  } catch (error) {
    console.error("Upsert Error:", error);
    return { success: false, error: "Database error occurred." };
  }
}
