// app/dashboard/component/ShowSession.tsx
"use client";
import React from "react";
import { useStore } from "@/store/store";

export default function ShowSession() {
  const session = useStore((s) => s.sessionData);

  if (!session?.user?.name) return <span>…</span>;

  return (
    <span>
      {session?.user?.name} ({session?.user?.role})
    </span>
  );
}
