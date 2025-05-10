import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import Nav from "./component/nav";
export const dynamic = "force-dynamic";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) redirect("/auth/login");
  return (
    <div className=" flex flex-col h-screen">
      <div className=" h-24 w-full"></div>
       <Nav session={session} />
      <div className=" grow w-full h-full">{children}</div>
    </div>
  );
}
