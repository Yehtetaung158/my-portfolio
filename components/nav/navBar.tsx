import React from "react";
import AppleStyleDrawer from "./AppleStyleDrawer";
import { auth } from "@/server/auth";

const NavBar = async () => {
  const session = await auth();

  return <>{session && <AppleStyleDrawer role={session?.user.role} />}</>;
};

export default NavBar;
