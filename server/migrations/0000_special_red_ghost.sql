CREATE TYPE "public"."role" AS ENUM('user', 'admin');--> statement-breakpoint
CREATE TABLE "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"password" text,
	"emailVerified" timestamp,
	"image" text,
	"isTwoFactorEnabled" boolean DEFAULT false,
	"role" "role" DEFAULT 'user',
	"customerId" text,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
