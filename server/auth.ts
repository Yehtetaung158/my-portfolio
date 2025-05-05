// auth.ts
import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/server/index";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { users } from "@/server/schema";
import { eq } from "drizzle-orm";
import { randomUUID } from "crypto"; // ID ထုတ်ရန်

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Database မှ user ရှာခြင်း
          const user = await db.query.users.findFirst({
            where: eq(users.email, credentials.email as string),
          });

          if (!user) return null;

          // Password စစ်ဆေးခြင်း
          const isValid = await bcrypt.compare(
            credentials.password as string,
            user.password as string
          );

          // User data ပြန်ပိုးခြင်း (role ထည့်သွင်း)
          return isValid ? {
            id: user.id,
            name: user.name || null, // null ကို သတ်မှတ်
            email: user.email || null, // null ကို သတ်မှတ်
            role: user.role as "user" | "admin", // Type Assertion သုံး
            isTwoFactorEnabled: user.isTwoFactorEnabled || false, // default value
          } : null;
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],

  // Session နှင့် JWT Callbacks
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name=user.name;
        token.email=user.email;
        token.role = user.role;
        token.isTwoFactorEnabled = user.isTwoFactorEnabled;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.email=token.email as string;
      session.user.name=token.name as string;
      session.user.role = token.role as "user" | "admin";
      session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      return session;
    },
  },

  // Custom Login Page
  pages: {
    signIn: "/auth/login",
  },
});