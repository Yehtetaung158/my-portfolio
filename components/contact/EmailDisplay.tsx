"use client"

import { Copy, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

type EmailDisplayProps = {
  email: string;
};

export const EmailDisplay = ({ email }: EmailDisplayProps) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Email copied to clipboard!");
  };

  return (
    <div className="flex max-sm:text-sm items-center gap-2">
      <h1>EMAIL</h1>
      <h1>:</h1>
      <a
        href={`mailto:${email}`}
        className="flex items-center gap-1 underline text-blue-500"
      >
        <ArrowUpRight className="w-4 h-4" />
        <span>{email}</span>
      </a>
      <button onClick={() => copyToClipboard(email)}>
        <Copy className="w-4 h-4 text-gray-500 hover:text-black" />
      </button>
    </div>
  );
};
