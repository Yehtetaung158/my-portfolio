import React from 'react'

const ContactPageSkeleton = () => {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="w-full space-y-4 px-4">
          {/* IsAdmin Placeholder */}
          <div className="flex gap-2 items-center">
            <div className="h-6 w-32 bg-gray-300 dark:bg-slate-700 rounded animate-pulse" />
          </div>
  
          <hr />
  
          <div className="pt-4">
            <div className="flex flex-col lg:flex-row justify-start lg:justify-around items-start lg:items-center gap-4">
              {/* Email Skeleton */}
              <div className="h-12 w-64 bg-gray-300 dark:bg-slate-700 rounded animate-pulse" />
  
              {/* Phone Skeleton */}
              <div className="h-12 w-64 bg-gray-300 dark:bg-slate-700 rounded animate-pulse" />
  
              {/* LinkedIn Skeleton */}
              <div className="h-12 w-64 bg-gray-300 dark:bg-slate-700 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactPageSkeleton;
  