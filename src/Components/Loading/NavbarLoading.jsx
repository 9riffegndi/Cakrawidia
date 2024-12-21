import React from 'react';

export default function NavbarLoading() {
    return (
        <div className="flex flex-col gap-1  p-2 rounded-b-lg shadow sticky top-0 z-10 bg-primary w-full">
            <div className="flex justify-between gap-2 items-center md:grid xs:grid-cols-12 w-full p-2">
                {/* Skeleton for Application Logo */}
                <div className="flex items-center gap-1 col-span-3">
                        <div className="btn btn-circle  rounded-full bg-gray-300 animate-pulse"></div>
                        <div className="w-1/2 h-6 rounded-xl bg-gray-300 animate-pulse"></div>
                </div>
                

                {/* Skeleton for Search Input */}
                <div className="col-span-8 md:col-span-6">
                    <div className="input md:block hidden input-bordered rounded-full w-full h-8 bg-gray-300 animate-pulse"></div>
                </div>

                {/* Skeleton for User Dropdown */}
                <div className="dropdown col-span-3 flex items-center justify-end dropdown-end">
                    <div className="rounded-xl flex gap-1 items-center justify-between">
                        <span className="w-[70px] h-10 rounded-full animate-pulse bg-gray-300" />
                        <span className="w-[70px] h-10 rounded-full animate-pulse bg-gray-300" />
                    </div>
                </div>
            </div>

            {/* Skeleton for Mobile Search Input */}
            <div className="md:hidden">
                <div className="input input-bordered block col-span-8 md:col-span-6 rounded-full w-full h-8 bg-gray-300 animate-pulse"></div>
            </div>
        </div>
    );
}
