// import React from "react";
// import AppleStyleDrawer from "./AppleStyleDrawer";
// import { auth } from "@/server/auth";

// const NavBar = async () => {
//   let role: "admin" | "user" | "guest" = "guest";

//   try {
//     const session = await auth();
//     role = session?.user?.role ?? "guest";
//   } catch (error) {
//     console.error("Auth error: ", error);
//   }

//   return <AppleStyleDrawer role={role} />;
// };

// export default NavBar;
// app/components/nav/NavBar.tsx
"use client";

// import { useEffect, useState } from "react";
import AppleStyleDrawer from "./AppleStyleDrawer";
// import { getSession } from "@/lib/getSession";

export default function NavBar() {
  // const [role, setRole] = useState<"admin"|"user"|"guest">("guest");

  // useEffect(() => {
  //   getSession().then(sess => {
  //     setRole(sess?.user?.role ?? "guest");
  //   });
  // }, []);

  return <AppleStyleDrawer/>;
}
