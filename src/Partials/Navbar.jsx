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
    const [isLoading, setIsLoading] = useState(false); // Status loading
    const navigate = useNavigate();

    const isAuthenticated = localStorage.getItem("authToken");

    const fetchProfile = async () => {
        setIsLoading(true); // Mulai loading
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
        } finally {
            setIsLoading(false); // Selesai loading
        }
    };

    // Ambil profil pengguna jika token ada
    useEffect(() => {
        if (isAuthenticated) {
            fetchProfile();
        }
    }, [isAuthenticated]);  


    const formatUserName = (name) => {
        if (!name) return "";
        return name.length > 4 ? `${name.charAt(0)}${name.charAt(name.length - 1)}` : name;
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
        <div className="flex flex-col  gap-1 z-10 p-2 rounded-b-lg shadow  sticky top-0  bg-white w-full">
        <div className="flex justify-between md:grid xs:grid-cols-12  w-full p-2">
                <ApplicationLogo className="col-span-3" />
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
                    className="input md:block hidden input-bordered col-span-8 md:col-span-6 rounded-full w-full"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />


                <div className="dropdown  col-span-3  flex items-center justify-end dropdown-end">
                    {isAuthenticated ? (
                        <div>
                            <div 
                                tabIndex="0" 
                                role="button" 
                                className="flex gap-1 justify-center items-center"
                            >
                                {isLoading ? (
                                    <div className=" rounded-xl flex gap-1 items-center justify-between">
                                        <span className="w-[140px] h-[20px] rounded-full  animate-pulse bg-gray-200" />
                                        <span className="btn btn-circle animate-pulse bg-gray-200" />
                                    </div>
                                ) : (
                                    <div className="justify-center  gap-1 flex items-center">
                                        <h1 className="hidden xs:block">Hi</h1>
                                        <span className="block md:hidden font-bold  lg:block ">{userName}</span>
                                        <span className="btn btn-circle btn-neutral text-primary">
                                            {formatUserName(userName)}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <ul
                                tabIndex="0"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <Link to="/profileMe">Profile</Link>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className="flex gap-1 items-center">
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

            <SearchInput
                    type="text"
                    placeholder="Search"
                    className="input input-bordered block md:hidden col-span-8 md:col-span-6 rounded-full w-full"
                    value={searchQuery}
                    onChange={handleSearchChange}
            />

        </div>
    );
}
