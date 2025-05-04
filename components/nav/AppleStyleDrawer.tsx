"use client";

import clsx from "clsx";
import ThemeToggleButton from "./ThemeToggleButton";
import { useStore } from "@/store/store";
import DrawerPanel from "./DrawerPanel";

export default function AppleTopNavWithButton() {
 const open = useStore((state) => state.open)
   const setOpen = useStore((state) => state.setOpen)

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-16 bg-[#F9F9F9] dark:bg-[#1D1D1F] text-[#1D1D1F] dark:text-[#F9F9F9] flex items-center justify-between px-6 z-50 shadow-md">
        <span className="text-xl font-semibold"></span>

        <div className="flex gap-4 justify-center items-center">
          <ThemeToggleButton />
          <button
            onClick={() => setOpen()}
            aria-label="Toggle menu"
            className="relative w-8 h-8 flex items-center justify-center group z-50"
          >
            <span
              className={clsx(
                "absolute w-6 h-0.5 bg-[#1D1D1F] dark:bg-[#F9F9F9] transform transition-all duration-300",
                open ? "rotate-45 translate-y-0" : "-translate-y-2"
              )}
            />
            <span
              className={clsx(
                "absolute w-6 h-0.5 bg-[#1D1D1F] dark:bg-[#F9F9F9] transition-all duration-300",
                open ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={clsx(
                "absolute w-6 h-0.5 bg-[#1D1D1F] dark:bg-[#F9F9F9] transform transition-all duration-300",
                open ? "-rotate-45 translate-y-0" : "translate-y-2"
              )}
            />
          </button>
        </div>
      </div>

      {/* Top-down Drawer Panel */}
      <DrawerPanel/>
      
    </>
  );
}
