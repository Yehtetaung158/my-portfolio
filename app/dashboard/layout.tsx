import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";

// app/dashboard/layout.tsx
export const dynamic = 'force-dynamic';   // ← tell Next.js “this entire segment is dynamic”

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  // now you can call getSession() without polluting the build logs
  const session = await getSession();  
  if (!session) redirect('/auth/login');
  return <>{children}</>;
}
