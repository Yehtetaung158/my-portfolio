"use client";

import clsx from "clsx";
import ThemeToggleButton from "./ThemeToggleButton";
import { useStore } from "@/store/store";
import DrawerPanel from "./DrawerPanel";

// type Props = {
//   role: string;
// };

export default function AppleTopNavWithButton(
  // { role }: Props
) {
  const open = useStore((state) => state.open);
  const setOpen = useStore((state) => state.setOpen);
  const isAdminView = useStore((state) => state.isAdminView);
  const setIsAdminView = useStore((state) => state.setIsAdminView);
  return (
    <>
      <div className="fixed  top-0 left-0 w-full h-16  text-slate-900 drop-shadow-lg dark:text-sky-100 flex items-center justify-between px-6 z-50">
        <span className="text-xl font-semibold"></span>

        <div className="flex gap-6 max-sm:gap-4 justify-center items-center z-50">
          {/* {role === "admin" && (
            <>
              <button
                className=" underline max-sm:text-sm"
                onClick={() => setIsAdminView()}
              >
                {isAdminView ? <>admin view</> : <>user view</>}
              </button>
            </>
          )} */}
          <ThemeToggleButton />
          <button
            onClick={() => setOpen()}
            aria-label="Toggle menu"
            className="relative size-6 sm:size-8 flex items-center justify-center rounded-sm group z-50 bg-[#70707c5b]"
          >
            <span
              className={clsx(
                "absolute w-4 sm:w-6 md:w-5 h-0.5  bg-slate-900 dark:bg-sky-100 transform transition-all duration-300",
                open
                  ? "rotate-45 translate-y-0"
                  : " translate-y-1  sm:translate-y-1.5"
              )}
            />
            <span
              className={clsx(
                "absolute w-4 sm:w-6 md:w-5 h-0.5  bg-slate-900 dark:bg-sky-100 transition-all duration-300",
                open ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={clsx(
                "absolute w-4 sm:w-6 md:w-5 h-0.5  bg-slate-900 dark:bg-sky-100 transform transition-all duration-300",
                open
                  ? "-rotate-45 translate-y-0"
                  : "-translate-y-1  sm:-translate-y-1.5"
              )}
            />
          </button>
        </div>
      </div>

      {/* Top-down Drawer Panel */}
      <DrawerPanel />
    </>
  );
}
