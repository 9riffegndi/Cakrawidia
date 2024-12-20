import { Link } from "react-router-dom"


const handleRefresh = () => {
        window.location.reload();
    };


export default function BreadCrumbs() {
    return (
            <div className=" breadcrumbs top-0 z-0 sticky bg-primary text-sm flex w-full items-center justify-start">
            <ul className="ml-3">
                <li >
                <Link
                    className="flex items-center gap-1"
                    to="/">
                    <img className="w-[15px]" src="https://img.icons8.com/?size=100&id=2797&format=png&color=000000"  />
                    <p>Home</p>
                </Link>
                </li>

                <li >
                <Link
                    onClick={handleRefresh}
                    className="flex items-center gap-1"
                    to="/">
                    <img className="w-[15px]" src="https://img.icons8.com/?size=100&id=22104&format=png&color=000000"  />
                    <p>Refresh</p>
                </Link>
                </li>

            </ul>
            </div>
    )
    
}