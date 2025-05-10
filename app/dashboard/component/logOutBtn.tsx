"use client";

import React from "react";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const LogOutBtn = () => {
  return (
    <>
      <p>Just one click to log out</p>
      <Button
        className=" cursor-pointer bg-red-500 text-red-50"
        onClick={() => signOut()}
      >
        <LogOut className="w-5 h-5 mr-3" />
        <span className=" text-sm font-medium">Log out</span>
      </Button>
    </>
  );
};

export default LogOutBtn;
