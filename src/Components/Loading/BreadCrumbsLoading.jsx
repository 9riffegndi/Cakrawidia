export default function BreadCrumbsLoading() {
    return (
        <div className="breadcrumbs top-0 z-10 sticky bg-primary text-sm flex w-full items-center justify-start">
            <ul className="ml-3 flex gap-4">
                {/* Home breadcrumb skeleton loader */}
                <li className="flex items-center gap-1">
                    <div className="h-6 w-24 bg-gray-300 animate-pulse rounded-md"></div>
                </li>

                {/* Refresh breadcrumb skeleton loader */}
                <li className="flex items-center gap-1">
                    <div className="h-6 w-24 bg-gray-300 animate-pulse rounded-md"></div>
                </li>
            </ul>
        </div>
    );
}
