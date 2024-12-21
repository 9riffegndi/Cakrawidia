import React from 'react';

function TopicsCategoryLoading() {
  return (
    <div className="h-max md:min-h-screen border border-gray-300 justify-start items-center rounded-md md:col-span-3 p-4 md:p-0 col-span-12 md:flex-col flex overflow-auto md:gap-0 gap-2 animate-pulse">
      {/* Skeleton for "Semua Topik" */}
      <div className="cursor-pointer bg-gray-300 md:p-4 p-1 font-semibold md:font-bold text-primary md:rounded-none text-xs md:text-sm rounded-full w-full h-6"></div>

      {/* Skeletons for Topics */}
      <ul className="list flex items-center md:flex-col  overflow overflow-y-auto  gap-1 w-full">
        {Array.from({ length: 25 }).map((_, index) => (
          <li className="bg-gray-300 w-[50%] md:w-full p-5 rounded-md md:rounded-none " key={index}>
            {/* <div className=" bg-gray-50 text-start md:text-secondary border-none shadow-none list-none md:rounded-none rounded-full flex justify-start w-max md:w-full h-6"></div> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopicsCategoryLoading;
