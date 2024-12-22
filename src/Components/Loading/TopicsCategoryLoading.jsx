import React from 'react';

function TopicsCategoryLoading() {
  const Topics = Array(25).fill(null); // Create an array with 25 items for the skeleton loader
  
  return (
    <div className="h-max md:min-h-screen border border-gray-300 justify-start items-center rounded-md md:col-span-3 p-4 md:p-0 col-span-12 md:flex-col flex overflow-auto md:gap-0 gap-2 animate-pulse">
      {/* Skeleton for "Semua Topik" */}
      <div className="cursor-pointer bg-gray-400 hidden md:block p-7 font-semibold md:font-bold text-primary md:rounded-none text-xs md:text-sm rounded-full w-full h-6"></div>
      
      {/* Skeletons for Topics */}
      <ul className="list flex items-center md:flex-col overflow overflow-y-auto gap-1 w-full">
        {Topics.map((_, index) => (
          <li className="bg-gray-300  md:w-full   btn-wide btn btn-xs md:btn  rounded-full md:rounded-none" key={index}></li>
        ))}
      </ul>
    </div>
  );
}

export default TopicsCategoryLoading;
