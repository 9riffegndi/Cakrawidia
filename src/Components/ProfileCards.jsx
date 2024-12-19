import React from "react";
import { Link } from "react-router-dom";

// Components
import PrimaryButton from "./Buttons/PrimaryButton";

// Utils
import { formatInitialsUsername } from "../Utils/formatInitialUsername";

const ProfileCards = ({ user }) => {
    // Access the nested user object
    const userData = user?.user;

    // Add a check to handle cases where user might be null or undefined
    if (!userData) {
        return (
            <div className="hidden col-span-12 md:col-span-4 border min-h-[257px] justify-between p-4 border-secondary rounded-lg flex-col">
                <p>No user data available</p>
            </div>
        );
    }

    return (
        <div className="flex col-span-12 md:col-span-4 border min-h-[257px] justify-between p-4 border-secondary rounded-lg flex-col">
            <div className="flex md:flex-row flex-col items-center gap-2 justify-start">
                <p className="btn btn-lg btn-circle w-[120px] h-[120px] btn-neutral text-primary text-5xl">
                    {formatInitialsUsername(userData.username)}
                </p>
                <div className="flex flex-col">
                    <p><strong>ID:</strong> {userData.id}</p>
                    <p className="font-bold">{userData.username}</p>
                    <p><strong>Points:</strong> {userData.points}</p>
                </div>
            </div>

            <Link to="/profileMe">
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