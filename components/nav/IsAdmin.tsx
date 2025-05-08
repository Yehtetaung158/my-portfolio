"use client";

import React from "react";
import { useStore } from "@/store/store";
import { Pencil } from "lucide-react";
import Link from "next/link";

type Props = {
  name: string;
  path: string;
  role:string;
};

const IsAdmin = ({ name,role, path }: Props) => {
  const isAdminView = useStore((state) => state.isAdminView);
  return (
    <h1 className=" flex items-center gap-4">
      <span className=" -z-30 text-3xl max-sm:text-xl font-extrabold text-slate-900 drop-shadow-lg dark:text-sky-100 ">
        {name}
      </span>
      {role === "admin" && isAdminView && (
        <>
          <Link href={path}>
            <Pencil className=" size-4 text-purple-600" />
          </Link>
        </>
      )}
    </h1>
  );
};

export default IsAdmin;
