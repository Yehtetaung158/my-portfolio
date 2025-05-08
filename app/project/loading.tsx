import React from "react";

const ProjectCardsSkeleton = () => {
  const skeletonArray = new Array(6).fill(0); // 6 Skeleton cards

  return (
    <div className="overflow-auto h-full mt-14">
      <div className=" space-y-4">
        <h1 className="flex items-center gap-4">
          <span className="-z-30 text-3xl max-sm:text-xl font-extrabold text-slate-900 drop-shadow-lg dark:text-sky-100">
            <span className="block h-8 max-sm:h-6 w-40 max-sm:w-28 bg-gray-300 dark:bg-slate-700 rounded animate-pulse" />
          </span>
          <span className="h-4 w-4 bg-gray-300 dark:bg-slate-700 rounded animate-pulse" />
        </h1>
        <hr />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skeletonArray.map((_, index) => (
            <div
              key={index}
              className="border p-4 rounded shadow max-w-[400px] max-sm:w-full max-sm:mx-auto animate-pulse"
            >
              <div className="w-full h-48 bg-gray-300 dark:bg-slate-700 rounded" />
              <div className="mt-4 h-5 bg-gray-300 dark:bg-slate-700 rounded w-3/4" />
              <div className="mt-2 h-4 bg-gray-300 dark:bg-slate-700 rounded w-full" />
              <div className="mt-1 h-4 bg-gray-300 dark:bg-slate-700 rounded w-5/6" />
              <div className="mt-4 flex space-x-4">
                <div className="h-4 w-20 bg-gray-300 dark:bg-slate-700 rounded" />
                <div className="h-4 w-20 bg-gray-300 dark:bg-slate-700 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardsSkeleton;
