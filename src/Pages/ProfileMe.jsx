import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import { useFetchMe } from "../Hooks/useFecthMe";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Footer from '../Partials/Footer';
import dayjs from 'dayjs';
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);


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
                <div className="min-h-screen flex w-full items-center justify-center">
                    <span className="bg-gray-300 loading loading-infinity loading-lg"></span>
                </div>
            </MainLayout>
        );
    }

    return (
    <>
    <Helmet>
        <title>{(user.username)} Profile</title>
    </Helmet>

    <MainLayout
        className='jutify-center items-center'
        >
            <div
                style={{
                backgroundImage: `url("/Assets/Img/ooorganize.svg")`,
                }}
                className="flex flex-col md:flex-row justify-center items-center p-2 gap-3 w-full min-h-[170px]"
                >
                <p className="btn btn-circle text-4xl btn-neutral text-primary w-[150px] h-[150px]">
                    {formatUsername(user.username)}
                </p>
                <div className="flex font-bold flex-col items-start">
                    <p>ID: {user.id}</p>
                    <p className="text-2xl">{user.username}</p>
                </div>
            </div>
            
            <div className="w-full p-1 mt-4 flex justify-center grow min-h-[400px]">
                
                <div className=" flex flex-col gap-4 justify-center items-center w-[95%] md:w-[50%] h-full">
                    <p className='font-bold text-2xl'>Keterangan</p>
                    <div className="flex w-full  justify-between items-center">
                            <li className='min-h-[80px] justify-center grow flex items-center flex-col'>
                                <p>Poin</p>
                                <p className='font-bold'>{user.points}</p>
                            </li>
                            <span>|</span>
                            <li className=' min-h-[80px] justify-center grow flex items-center flex-col'>
                                <p>Role</p>
                                <p className='font-bold'>{user.role}</p>
                            </li>
                            <span>|</span>
                            <li className=' min-h-[80px] justify-center grow flex items-center flex-col'>
                                <p>ID USERS</p>
                                <p className='font-bold'>{user.id}</p>
                            </li>
                    </div>

                    <div className="flex flex-col border-t border-secondary justify-center gap-2 items-start w-full">
                        <p>Email: <span className='font-bold'>{user.email}</span></p>
                        <p>Bergabung pada: <span className='font-bold'>{dayjs(user.created_at).format('YYYY-MMMM-DD')}</span></p>
                    </div>
                </div>
                


            </div>
            <Footer/>
        </MainLayout>
    </>
    );
}
    