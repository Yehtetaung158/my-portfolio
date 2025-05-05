import React from "react";
import Logo from "../logo";
import FancyNavToggle from "./FancyNavToggle";
import AppleStyleDrawer from "./AppleStyleDrawer";
import { auth } from "@/server/auth";

const NavBar = async () => {
  const session = await auth();

  return (
    <div className=" flex justify-between items-center w-full h-16  px-4">
      <div>{/* <Logo /> */}</div>
      <div></div>
      <div className=" flex gap-4">
        <div>{session && <AppleStyleDrawer role={session?.user.role} />}</div>
      </div>
    </div>
  );
};

export default NavBar;
