export default function FooterLoading() {
    return (
        <footer className="w-full flex flex-col justify-center items-center bg-secondary gap-2 p-10">
            <aside className="flex items-center p-2 rounded-full bg-primary">
                <div className="w-16 h-16 bg-gray-300 animate-pulse rounded-full"></div>
                <div className="w-[120px] h-6 bg-gray-300 animate-pulse rounded ml-3"></div>
            </aside>
            <div className="w-[200px] h-4 bg-gray-300 animate-pulse rounded mt-2"></div>
            <div className="w-[250px] h-4 bg-gray-300 animate-pulse rounded mt-2"></div>
        </footer>
    );
}
