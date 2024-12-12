import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import ApplicationLogo from "./ApplicationLogo";  
import LabelButton from "../Components/Buttons/LabelButton"; 
import Sidebar from "./Sidebar";
import SearchInput from "../Components/SearchInput";
import PrimaryButton from "../Components/Buttons/PrimaryButton";

export default function Navbar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [userName, setUserName] = useState(null); // Untuk menyimpan nama pengguna
    const navigate = useNavigate();

    const isAuthenticated = localStorage.getItem("authToken");

    // Ambil profil pengguna jika token ada
    useEffect(() => {
        if (isAuthenticated) {
            fetchProfile();
        }
    }, [isAuthenticated]);

    const fetchProfile = async () => {
        try {
            const response = await fetch("https://cakrawidia-4ae06d46343e.herokuapp.com/api/me", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${isAuthenticated}`,
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            if (data.user) {
                setUserName(data.user.username); // Set nama pengguna jika berhasil
            }
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    };

    const formatUserName = (name) => {
        if (!name) return "";
        return name.length > 5 ? `${name.charAt(0)}${name.charAt(name.length - 1)}` : name;
    };

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
                    {isAuthenticated ? (
                        <div>
                            <div tabIndex="0" role="button" className="flex gap-1 font-bold  justify-center items-center">
                                <h1 className="text-5xl">Hi</h1> 
                                <span className="btn btn-circle btn-md btn-neutral "> {formatUserName(userName)}</span>
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
                            <Link to={'/login'}>
                                <PrimaryButton
                                    label={'Login'}
                                    className="btn"
                                />
                            </Link>
                            <Link to={'/register'}>
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
