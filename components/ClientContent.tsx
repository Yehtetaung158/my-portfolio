// components/ClientContent.tsx
"use client";

import { useStore } from "@/store/store";
import { ReactNode } from "react";

export function ClientContent({ children }: { children: ReactNode }) {
  const open = useStore((s) => s.open);

  // only render children when `open` is false
  return <>{!open ? children : null}</>;
}
