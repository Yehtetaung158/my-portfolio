"use client";

import { ArrowUpRight, Copy } from "lucide-react";
import { toast } from "sonner";

type PhoneDisplayProps = {
  phone: string;
};

export const PhoneDisplay = ({ phone }: PhoneDisplayProps) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Phone number copied to clipboard!");
  };

  return (
    <div className="flex max-sm:text-sm  items-center gap-2">
      <h1>Phone</h1>
      <h1>:</h1>
      <a href={`tel:${phone}`} className="text-blue-500 underline">
        <h1 className=" flex gap-2 items-center">
          <ArrowUpRight className="w-4 h-4" />
          <span>{phone}</span>
        </h1>
      </a>
      <button onClick={() => copyToClipboard(phone)}>
        <Copy className="w-4 h-4 text-gray-500 hover:text-black" />
      </button>
    </div>
  );
};
