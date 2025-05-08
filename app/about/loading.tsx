// app/about/loading.tsx
import React from "react";

const AboutPageSkeleton = () => {
  return (
    <div className="h-screen flex items-center px-4">
      <div className="flex max-lg:flex-col-reverse justify-between w-full items-start gap-4">
        {/* Left Section (Text) */}
        <div className="max-w-[800px] space-y-4 flex-1">
          {/* IsAdmin Button Placeholder */}
          <div className="h-6 w-32 bg-gray-300 dark:bg-slate-700 rounded animate-pulse" />

          <hr />

          {/* AboutMe Text Placeholder */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-300 dark:bg-slate-700 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-gray-300 dark:bg-slate-700 rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-gray-300 dark:bg-slate-700 rounded animate-pulse" />
          </div>

          {/* Download Button Placeholder */}
          <div className="h-10 w-40 bg-gray-300 dark:bg-slate-700 rounded animate-pulse" />
        </div>

        {/* Right Section (Image) */}
        <div className="w-[400px] max-h-[600px] max-lg:max-h-[400px] max-lg:max-w-[300px] max-sm:max-h-[300px] max-sm:max-w-[150px] rounded-bl-4xl rounded-tr-4xl overflow-hidden">
          <div className="w-full h-full aspect-[3/2] bg-gray-300 dark:bg-slate-700 animate-pulse rounded object-cover" />
        </div>
      </div>
    </div>
  );
};

export default AboutPageSkeleton;
