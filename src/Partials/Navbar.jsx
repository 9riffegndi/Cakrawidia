
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import ApplicationLogo from "./ApplicationLogo";  

import LabelButton from "../Components/Buttons/LabelButton"; 
import Sidebar from "./Sidebar";
import SearchInput from "../Components/SearchInput";
import PrimaryButton from "../Components/Buttons/PrimaryButton";

export default function Navbar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/"); // Redirect ke halaman Home setelah logout
    };

    
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearch(query); // Update query ke parent component jika diperlukan
    };

    return (
        <div className="sticky shadow-md top-0 z-20 navbar bg-base-100">
            <div className="flex justify-between w-full gap-1">
                <ApplicationLogo />
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <LabelButton
                    htmlFor="my-drawer-4"
                    src="https://img.icons8.com/?size=100&id=83195&format=png&color=FFFFFF"
                    className="flex md:hidden btn btn-md btn-circle p-1"
                />
                <div className="drawer-side">
                    <LabelButton
                        htmlFor="my-drawer-4"
                        ariaLabel="close sidebar"
                        className="drawer-overlay rounded-none"
                    />
                    <Sidebar />
                </div>
                <SearchInput
                    type="text"
                    placeholder="Search"
                    className="input input-bordered rounded-full w-full"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <div className="dropdown dropdown-end">
                    {localStorage.getItem("authToken") ? (
                        <div>
                            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Avatar"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex="0"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <Link to="/profile">Profile</Link>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className="flex items-center">
                            <Link
                                to={'/login'}
                            >
                                <PrimaryButton
                                    label={'Login'}
                                    className="btn"
                                />
                            </Link>
                            <Link
                                to={'/register'}
                            >
                                <PrimaryButton
                                    label={'Register'}
                                    className="btn"
                                />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
