import { useFetchMe } from "../Hooks/useFecthMe";


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";


// Utils
import { localeTime } from "../Utils/localeTime"; 

// Layouts
import MainLayout from "../Layouts/MainLayout";
import GridLayout from "../Layouts/GridLayout";

// Partials
import Footer from "../Partials/Footer";

// Components
import ProfileCards from "../Components/ProfileCards";
import Leaderboard from "../Components/Leaderboard/Leaderboard";
import ModalAnswers from "../Components/Questions/ModalAnswers";




export default function ViewQuestion() {
    const { id } = useParams();
    const [data, setData] = useState({
        question: null,
        profil: null,
        users: [],
        loading: true,
        error: null
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch question details
                const questionResponse = await axios.get(`https://cakrawidia-4ae06d46343e.herokuapp.com/api/questions/${id}`);
                
                // Fetch logged-in user details
                const authToken = localStorage.getItem("authToken");
                const userResponse = authToken 
                    ? await axios.get('https://cakrawidia-4ae06d46343e.herokuapp.com/api/me', {
                        headers: { Authorization: `Bearer ${authToken}` }
                    })
                    : null;
                
                // Fetch leaderboard users
                const usersResponse = await axios.get('https://cakrawidia-4ae06d46343e.herokuapp.com/api/users');

                setData({
                    question: questionResponse.data,
                    profil: userResponse ? userResponse.data : null,
                    users: usersResponse.data.sort((a, b) => b.points - a.points),
                    loading: false,
                    error: null
                });
            } catch (error) {
                console.error("Error fetching data:", error);
                setData(prevData => ({
                    ...prevData,
                    loading: false,
                    error: error.message
                }));
            }
        };

        fetchData();
    }, [id]);

    const formatUserName = (name) => {
        if (!name) return "";
        return name.length > 4 ? `${name.charAt(0)}${name.charAt(name.length - 1)}` : name;
    };

    if (data.loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-200">
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        );
    }

    if (data.error) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Error: {data.error}</p>
            </div>
        );
    }

    if (!data.question) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Question not found.</p>
            </div>
        );
    }

    

    return (
        <MainLayout>
            <Helmet>
                <title>{data.question.title} - Cakrawidia</title>
                <meta name="description" content={data.question.content} />
            </Helmet>
            <GridLayout>
                {/* Kolom utama */}
                <div className="col-span-12 md:col-span-8 flex flex-col gap-3 min-h-screen">
                    <div className="border rounded-xl border-secondary flex flex-col gap-4 p-4">
                        <div className="flex gap-1 font-bold items-center">
                            <p className="btn btn-neutral text-primary btn-circle">
                                {formatUserName(data.question.user?.username)}
                            </p>
                            <p>{data.question.user?.username || "Anonim"}</p>
                            <span className="hidden md:block">|</span>
                            <p className="hidden md:block">{data.question.topic?.name || "Tidak diketahui"}</p>
                            <span className="hidden md:block">|</span>
                            <p className="hidden md:block">{localeTime(data.question.created_at)}</p>
                        </div>
                        <h1 className="font-bold text-2xl">{data.question.title}</h1>
                        <p className="text-lg">{data.question.content}</p>
                        
                        <ModalAnswers />
                    </div>

                    {/* Jawaban */}
                    <div className="flex flex-col border grow border-secondary rounded-xl">
                        <h2 className="text-3xl p-4 font-bold">Jawaban</h2>
                        {data.question.answers.length > 0 ? (
                            data.question.answers.map((answer) => (
                                <div
                                    key={answer.id}
                                    className="gap-2 flex flex-col p-4 border-t border-secondary"
                                >
                                    <div className="flex gap-1 font-semibold items-center">
                                        <p className="btn btn-neutral text-primary btn-circle">
                                            {formatUserName(answer.user?.username)}
                                        </p>
                                        <p>{answer.user?.username || "Anonim"}</p>
                                        <span>|</span>
                                        <p>{localeTime(answer.created_at)}</p>
                                    </div>
                                    
                                    <p>{answer.title}</p>
                                    <p>{answer.content}</p>
                                </div>
                            ))
                        ) : (
                            <div className="w-full flex items-center grow justify-center">
                                <p className="p-4 text-center font-bold">Belum ada jawaban.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Kolom samping */}
                <div className="flex min-h-screen flex-col gap-3 col-span-12 md:col-span-4">
                    <ProfileCards user={data.profil} />
                    <Leaderboard users={data.users} />
                </div>
            </GridLayout>
            
            <Footer />
        </MainLayout>
    );
}