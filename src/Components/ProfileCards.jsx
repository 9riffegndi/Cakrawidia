import React from "react";
import { useFetchMe } from "../Hooks/useFecthMe";
import { Link } from "react-router-dom";
import PrimaryButton from "./Buttons/PrimaryButton";


const ProfileCards = () => {
    const authToken = localStorage.getItem("authToken"); // Ambil token dari localStorage
    const { user, isLoading, error } = useFetchMe(authToken);

    if (isLoading) {
        return (
            <div className="p-4 min-h-[240px] col-span-4 flex items-center justify-center rounded-lg shadow-md bg-gray-100">
                <p className="loading loading-infinity loading-lg "></p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 colspan-4 rounded-lg  hidden shadow-md bg-red-100">
                <p>Error: {error}</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="p-4 hidden col-span-4 rounded-lg shadow-md bg-gray-100">
                <p>User not logged in</p>
            </div>
        );
    }
    
    
    const formatUserName = (name) => {
        if (!name) return "";
        return name.length > 4 ? `${name.charAt(0)}${name.charAt(name.length - 1)}` : name;
    };


    

    return (
        <div className=" flex  col-span-12 md:col-span-4 border min-h-[257px] justify-between p-4 border-secondary rounded-lg   flex-col">
            <div className="flex md:flex-row flex-col items-center gap-2 justify-start ">
                <p className="btn btn-lg  btn-circle w-[120px] h-[120px] btn-neutral text-primary text-5xl">{formatUserName(user.username)}</p>
                <div className="flex flex-col">
                    <p><strong>ID:</strong> {user.id}</p>
                    <p className="font-bold">{user.username}</p>
                    <p><strong>Points:</strong> {user.points}</p>
                </div>
            </div>
            {/* <p><strong>Created At:</strong> {new Date(user.created_at).toLocaleString()}</p>
            <p><strong>Updated At:</strong> {new Date(user.updated_at).toLocaleString()}</p> */}

            <Link
                to="/profile"
                >
                <PrimaryButton
                label="Lihat Profil"
                className="w-full btn btn-neutral text-primary"
                
                >
                </PrimaryButton>
            </Link>
        </div>
    );
};

export default ProfileCards;
