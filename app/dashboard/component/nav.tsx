"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "@/store/store";
import ShowSession from "./ShowSession";

type Props = {
  session: any;
};

const Nav = ({ session }: Props) => {
  const setSessionData = useStore((s) => s.setSessionData);
  useEffect(() => {
    setSessionData(session);
  }, [session, setSessionData]);
  const pathname = usePathname();

  const links = [
    { href: "/dashboard/", label: "Home" },
    { href: "/dashboard/project", label: "Product Table" },
    { href: "/dashboard/about-edit", label: "About Table" },
    { href: "/dashboard/contact", label: "Contact Table" },
  ];
  return (
    <nav className="flex gap-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${
            pathname === link.href ? "underline underline-offset-4" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
      {/* <ShowSession/> */}
    </nav>
  );
};

export default Nav;
