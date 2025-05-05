import { randomUUID } from "crypto"; // crypto module မှ import
import {
  boolean,
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  pgEnum,
  serial,
  real,
  varchar,
} from "drizzle-orm/pg-core";
import type { AdapterAccount } from "next-auth/adapters";
// import { createId } from "@paralleldrive/cuid2";
import { desc, or, relations } from "drizzle-orm";
import { title } from "process";
import { url } from "inspector";
import { Phone } from "lucide-react";

export const RoleEnum = pgEnum("role", ["user", "admin"]);

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").unique(),
  password: text("password"),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  isTwoFactorEnabled: boolean("isTwoFactorEnabled").default(false),
  role: RoleEnum("role").default("user"),
  customerId: text("customerId"),
});

export const about = pgTable("about", {
  id: serial("id").primaryKey(), 
  aboutMe: text("aboutMe").notNull(),
  image: text("image").notNull(), 
});

export const contact = pgTable("contact", {
  id: serial("id").primaryKey(),             
  email: varchar("email", { length: 255 }),  
  phone: varchar("phone", { length: 20 }),   
  linkIn: varchar("linkIn", { length: 255 }) 
});