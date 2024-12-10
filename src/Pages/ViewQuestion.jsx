import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/id";

import MainLayout from "../Layouts/MainLayout";
import GridLayout from "../Layouts/GridLayout";
import Navbar from "../Partials/Navbar";
import Footer from "../Partials/Footer";
import LabelButton from "../Components/Buttons/LabelButton";

dayjs.extend(relativeTime);

export default function ViewQuestion() {
    const { id } = useParams(); // Ambil ID dari URL menggunakan React Router DOM
    const [question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dayjs.locale("id");
        axios
            .get(`https://cakrawidia-progress-adebf43bf30c.herokuapp.com/api/questions/${id}`)
            .then((response) => {
                setQuestion(response.data);
            })
            .catch((error) => {
                console.error("Error fetching question:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-200">
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        );
    }

    if (!question) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p>Question not found.</p>
            </div>
        );
    }


    

    return (
        
        <MainLayout>
            <Helmet>
                <title>{question.title} - Cakrawidia</title>
                <meta name="description" content={question.content} />
            </Helmet>
            <Navbar />
            <GridLayout>
                {/* Kolom utama */}
                <div className="col-span-12 md:col-span-8 flex flex-col gap-3 p-1 min-h-screen">
                    <div className="border rounded-md border-secondary flex flex-col gap-4 p-4">
                        <div className="flex gap-1 items-center text-sm">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        alt="Avatar"
                                    />
                                </div>
                            </div>
                            <p className="font-semibold">{question.user?.username || "Anonim"}</p>
                            <span>|</span>
                            <p className="font-semibold">{question.topic?.name || "Tidak diketahui"}</p>
                            <span>|</span>
                            <p className="font-semibold">{dayjs(question.created_at).fromNow()}</p>
                        </div>
                        <h1 className="font-bold text-2xl">{question.title}</h1>
                        <p className="text-lg">{question.content}</p>
                        <LabelButton label="Tambahkan jawaban" className="btn" />
                    </div>

                    {/* Jawaban */}
                    <div className="flex flex-col border border-secondary rounded-md">
                        <h2 className="text-3xl p-4 font-bold">Jawaban</h2>
                        {question.answers.length > 0 ? (
                            question.answers.map((answer) => (
                                <div
                                    key={answer.id}
                                    className="gap-2 flex flex-col p-4 border-t border-secondary"
                                >
                                    <div className="flex gap-1 font-semibold items-center">
                                        <div className="avatar">
                                            <div className="w-10 rounded-full">
                                                <img
                                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                                    alt="Avatar"
                                                />
                                            </div>
                                        </div>
                                        <p>{answer.user?.username || "Anonim"}</p>
                                    </div>
                                    <p>{answer.content}</p>
                                </div>
                            ))
                        ) : (
                            <p className="p-4 text-center">Belum ada jawaban.</p>
                        )}
                    </div>
                </div>

                {/* Kolom samping */}
                <div className="hidden md:flex col-span-4 border border-secondary rounded-md flex-col">
                    <div className="flex gap-2 p-4">
                        <div className="avatar">
                            <div className="w-28 rounded-full">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    alt="Avatar"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold text-sm">Nama pengguna</p>
                            <p className="badge badge-warning">2222 poin</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center btn btn-outline cursor-pointer p-4 border-t border-secondary">
                        Lihat pencapaian saya
                    </div>
                </div>
            </GridLayout>
            <Footer />
        </MainLayout>
    );
}
