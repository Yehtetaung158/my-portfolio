import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import StarSun from "../StarSun";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-2">
      <h1 className=" font-stretch-condensed text-4xl">
        <span className="font-alumni-sans-inline-one text-2l">HEY, I AM</span>{" "}
        YE HTET AUNG
      </h1>
      <p className=" text-2xl">
        I am
        <span className="font-alumni-sans-inline-one text-4xl">
          front-end web developer
        </span>
      </p>
      <div className=" flex gap-2 mt-2">
        <Link href="/projects">
          <button className=" flex gap-2">
            <span>
              <ArrowUpRight />
            </span>
            <span>See my projects</span>
          </button>
        </Link>
        <Link href="/blog">
        <button className=" flex gap-2">
            <span>
              <ArrowUpRight />
            </span>
            <span>More about me</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
