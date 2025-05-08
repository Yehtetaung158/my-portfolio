"use client";

import { Copy, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

type LinkInDisplayProps = {
  link: string;
};

export const LinkInDisplay = ({ link }: LinkInDisplayProps) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="flex max-sm:text-sm  items-center gap-2">
      <h1>Social medias</h1>
      <h1>:</h1>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 underline text-blue-500"
      >
        <ArrowUpRight className="w-4 h-4" />
        <span>{link.length > 15 ? `${link.slice(0, 15)}...` : link}</span>
      </a>
      <button onClick={() => copyToClipboard(link)}>
        <Copy className="w-4 h-4 text-gray-500 hover:text-black" />
      </button>
    </div>
  );
};
