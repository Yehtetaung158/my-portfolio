import LogOutBtn from "./component/logOutBtn";
import ShowSession from "./component/ShowSession";

export default async function DashboardHome() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
      <h1 className="text-5xl max-sm:text-3xl font-extrabold text-slate-900 dark:text-sky-100">
        Nothing Venture Nothing Gain
      </h1>
      <ShowSession />
      <LogOutBtn />
    </div>
  );
}
