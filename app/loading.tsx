const HomePageSkeleton = () => {
  return (
    <div className="h-screen flex justify-center items-center px-4">
      <div className="flex flex-col items-center justify-center text-center space-y-4 w-full max-w-3xl">
        {/* H1 */}
        <div className="h-10 w-3/4 bg-gray-300 dark:bg-slate-700 rounded animate-pulse" />
        
        {/* H2 */}
        <div className="h-8 w-2/3 bg-gray-300 dark:bg-slate-700 rounded animate-pulse" />

        {/* Paragraph */}
        <div className="space-y-2 mt-4">
          <div className="h-4 w-full bg-gray-300 dark:bg-slate-700 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-gray-300 dark:bg-slate-700 rounded animate-pulse" />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <div className="h-10 w-36 bg-gray-300 dark:bg-slate-700 rounded animate-pulse" />
          <div className="h-10 w-36 bg-gray-300 dark:bg-slate-700 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default HomePageSkeleton;
