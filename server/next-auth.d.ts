// next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    role: "user" | "admin";
    isTwoFactorEnabled?: boolean;
  }
  
  interface Session {
    user: {
      id: string;
      name?: string;
      email?: string;
      role: "user" | "admin";
      isTwoFactorEnabled?: boolean;
    };
  }
}