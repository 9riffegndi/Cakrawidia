import React from 'react';

function LeaderboardLoading({className=''}) {
  return (
    <div className={`col-span-12 md:col-span-3 h-max   border rounded-xl ${className}`}>
      <div className="flex gap-1 bg-yellow-200 justify-start rounded-t-xl p-2 items-center border-b ">
        <div className="w-[35px] h-[35px] bg-gray-300 rounded-full animate-pulse"></div>
        <div className="w-1/2 h-5 bg-gray-300 rounded animate-pulse"></div>
      </div>
      <div className="flex flex-col  mt-2">
        {Array.from({ length:5 }).map((_, index) => (
          <div
            key={index}
            className="flex p-1 font-medium items-center justify-start gap-2 animate-pulse"
          >
            <div className="btn-md btn btn-circle flex items-center justify-center rounded-full bg-gray-300"></div>
            <div className="btn btn-circle bg-gray-300 text-transparent">&nbsp;</div>
            <div className="flex flex-col items-start justify-center gap-1">
              <div className="w-20 h-4 bg-gray-300 rounded"></div>
              <div className="w-10 h-3 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center p-5">
        <div className="w-24 h-8 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
}

export default LeaderboardLoading;
