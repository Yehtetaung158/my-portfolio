import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import StarSun from "../StarSun";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-2">
      <div className="relative z-10 p-8">
        {/* H1 */}
        <h1 className="text-5xl max-sm:text-3xl font-extrabold text-slate-900 drop-shadow-lg dark:text-sky-100">
          Welcome to My Portfolio
        </h1>
        {/* H2 */}
        {/* <h2 className=" "> */}
        <h1 className=" mt-6  font-stretch-condensed text-4xl max-sm:text-2xl text-slate-800 dark:text-sky-200">
          <span className="text-3xl max-sm:text-xl font-semibold">HEY, I AM</span> YE HTET AUNG
        </h1>
        {/* </h2> */}
        {/* Paragraph */}
        <p className="mt-6 text-lg max-sm:text-sm text-slate-700 leading-relaxed dark:text-slate-300">
          Here are a few things I’ve built recently. Click through to see more
          details.
        </p>
        {/* Link */}
        <div className=" flex max-sm:text-sm justify-center mt-4 items-center gap-2">
          <Link href="/project">
            <button className=" flex gap-2">
              <span>
                <ArrowUpRight className=" max-sm:size-5 " />
              </span>
              <span>See my projects</span>
            </button>
          </Link>
          <Link href="/about">
            <button className=" flex gap-2">
              <span>
                <ArrowUpRight className=" max-sm:size-5 "  />
              </span>
              <span>More about me</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
