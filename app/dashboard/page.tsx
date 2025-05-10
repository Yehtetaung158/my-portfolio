import LogOutBtn from "./component/logOutBtn";
// import { getSession } from "@/lib/getSession";

export default async function DashboardHome() {
  // const session = await getSession()

  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
      <h1 className="text-5xl max-sm:text-3xl font-extrabold text-slate-900 dark:text-sky-100">
        Nothing Venture Nothing Gain
      </h1>
      <h2 className="text-4xl max-sm:text-2xl text-slate-800 dark:text-sky-200">
        {/* {session?.user.name} <span>({session?.user.role})</span> */}
      </h2>

      <LogOutBtn/>
    </div>
  );
}
