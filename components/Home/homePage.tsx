import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className=" font-stretch-condensed"><span className="font-alumni-sans-inline-one text-xl">HEY, I AM</span> YE HTET AUNG</h1>
      <p>
        I am
        <span className="font-alumni-sans-inline-one text-xl"> front-end web developer</span>
      </p>
      <div>
        <Link href="/projects">
          <button className="">See my projects</button>
        </Link>
        <Link href="/blog">
          <button className="">more about me</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
