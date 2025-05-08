// components/ClientContent.tsx
"use client";

import { useStore } from "@/store/store";
import { ReactNode } from "react";

export function ClientContent({ children }: { children: ReactNode }) {
  const open = useStore((s) => s.open);

  // only render children when `open` is false
  return <div className=" max-sm:px-2 max-lg:px-4 max-xl:px-4">{!open ? children : null}</div>;
}
