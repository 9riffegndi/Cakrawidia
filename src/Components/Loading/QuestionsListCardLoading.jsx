import React from "react";

const QuestionsListCardLoading = () => {
  return (
    <div className="rounded-xl col-span-12 md:col-span-6 flex flex-col justify-center border border-gray-300 items-center animate-pulse min-h-screen">
      {/* Hero Banner */}
      <div className="w-full h-32 bg-gray-300 rounded-t-xl mb-4"></div>

      {/* Dropdown Pengurutan */}
      <div className="border-t-2 flex p-4 w-full justify-start">
        <div className="w-48 h-10 bg-gray-300 rounded-full"></div>
      </div>

      {/* Daftar Pertanyaan */}
      <div className="w-full flex flex-col justify-between border-b-2 min-h-[200px] gap-4 p-5">
        {/* Daftar Pertanyaan Skeleton */}
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex flex-col gap-5 mb-5">
            {/* Header Pertanyaan */}
            <div className="flex gap-1 justify-start items-center">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div className="w-20 h-4 bg-gray-300 rounded hidden xs:block"></div>
              <span className="text-gray-300">|</span>
              <div className="w-24 h-4 bg-gray-300 rounded hidden sm:block"></div>
            </div>
            {/* Isi Pertanyaan */}
            <div className="flex flex-col gap-3">
              <div className="w-full h-6 bg-gray-300 rounded"></div>
              <div className="w-full h-20 bg-gray-300 rounded"></div>
            </div>
            {/* Footer Pertanyaan */}
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              </div>
              <div className="w-16 h-8 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol "Lihat Semua" */}
      <div className="flex justify-center items-center p-5">
        <div className="w-32 h-10 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default QuestionsListCardLoading;
