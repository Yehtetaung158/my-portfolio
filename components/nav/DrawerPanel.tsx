"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useStore } from "@/store/store";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

const DrawerPanel = () => {
  const open = useStore((state) => state.open);
  const setOpen = useStore((state) => state.setOpen);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="drawer"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="fixed top-0 left-0 w-full h-full  text-[#1D1D1F] dark:text-[#F9F9F9] z-40"
        >
          <div className="flex flex-col items-center justify-center h-full text-2xl font-light space-y-6">
            <Link href="/" onClick={() => setOpen()}>
              Home
            </Link>
            <Link href="/project" onClick={() => setOpen()}>
              Projects
            </Link>
            <Link href="/about" onClick={() => setOpen()}>
              About
            </Link>
            <Link href="/contact" onClick={() => setOpen()}>
              Contact
            </Link>
            <div
              className="cursor-pointer  group hover:bg-red-200"
              onClick={() => signOut()}
            >
              <LogOut className="w-5 h-5 mr-3 group-hover:translate-x-1 group-hover:scale-90  transition-all duration-300 ease-in-out group-hover:text-red-600 " />
              <span className="text-sm font-medium group-hover:text-red-600 transition-all duration-300">
                Logout
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DrawerPanel;
