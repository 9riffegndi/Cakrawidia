import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import { useFetchMe } from "../Hooks/useFecthMe";
import { useNavigate } from "react-router-dom";

export default function ProfileMe() {
    const authToken = localStorage.getItem("authToken"); // Ambil token dari localStorage
    const { user } = useFetchMe(authToken); // Mengambil data pengguna dari hook
    const navigate = useNavigate(); // Initialize useNavigate outside of the handler

    // Format username menjadi singkatan
    const formatUsername = (username) => {
        if (!username) return ""; // Jika username undefined, kembalikan string kosong
        return username
            .split(' ') // Pisahkan berdasarkan spasi
            .map(word => word.charAt(0).toUpperCase()) // Ambil huruf pertama tiap kata
            .join('.'); // Gabungkan dengan tanda titik
    };

    // Logout handler
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/"); // Redirect ke halaman Home setelah logout
    };

    // Tampilkan loading state jika data user belum tersedia
    if (!user) {
        return (
            <MainLayout>
                <div className="bg-gray-100 min-h-screen flex w-full items-center justify-center">
                    <p className="text-gray-500">Loading...</p>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="w-full min-h-screen flex flex-col items-center justify-center p-4">
                <div className="card shadow-lg w-full max-w-md bg-base-100 p-6">
                    <div className="flex items-center gap-4 mb-4">
                        {/* Avatar */}
                        <div className="w-16 h-16 btn btn-circle btn-neutral text-primary text-xl font-bold">
                            {formatUsername(user.username)}
                        </div>

                        {/* Username */}
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800">{user.username}</h2>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <h3 className="text-sm font-medium text-gray-600">Email:</h3>
                        <p className="text-gray-800">{user.email}</p>
                    </div>

                    {/* Points */}
                    <div className="mb-4">
                        <h3 className="text-sm font-medium text-gray-600">Points:</h3>
                        <p className="text-gray-800">{user.points}</p>
                    </div>

                    {/* Created At */}
                    <div className="mb-4">
                        <h3 className="text-sm font-medium text-gray-600">Created At:</h3>
                        <p className="text-gray-800">{new Date(user.created_at).toLocaleDateString()}</p>
                    </div>

                    {/* Logout Button */}
                    <button
                        className="btn btn-danger w-full"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </MainLayout>
    );
}
    