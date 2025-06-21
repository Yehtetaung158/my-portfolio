"use client";

import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useStore } from "@/store/store";

export default function ThemeToggleButton() {
  const isDark = useStore((state) => state.isDark);
  const setIsDark = useStore((state) => state.setIsDark);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={setIsDark}
      className="p-2 rounded-full bg-white text-sm dark:bg-slate-800 shadow-sm z-20"
      aria-label="Toggle dark mode"
      // className="p-2 max-sm:p-1 z-50 rounded-full transition-all bg-[#70707c5b]    duration-300 hover:scale-105 hover:shadow-md"
      // aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="text-white" />
      ) : (
        <Moon className="text-slate-700" />
      )}
    </button>
  );
}
