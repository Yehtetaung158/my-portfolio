"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "@/store/store";

type Props = {
  session: any;
};

const Nav = ({ session }: Props) => {
  const setSession = useStore((s) => s.setSessionData);
  useEffect(() => {
    if (session) setSession(session);
  }, [session, setSession]);

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
      <h1>{session?.user.name}</h1>
    </nav>
  );
};

export default Nav;
