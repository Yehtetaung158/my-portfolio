import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema, logger: true });

console.log("Loaded DATABASE_URL:", process.env.DATABASE_URL);