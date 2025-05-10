"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
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
    </nav>
  );
};

export default Nav;
