import { useState, useEffect } from "react";
import {  fetchTopics } from "../Services/topicService"; // Asumsikan ada fungsi API fetch
import { fetchQuestions } from "../Services/questionService"; // Asumsikan ada fungsi API fetch
import { fetchUsers } from "../Services/leaderboardService"; // Asumsikan ada fungsi API fetch

export const useFetchAllData = () => {
    const [data, setData] = useState({ questions: [], users: [], topics: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [questions, users, topics] = await Promise.all([
                    fetchQuestions(), // Ganti dengan fungsi API fetch sesuai
                    fetchUsers(), // Ganti dengan fungsi API fetch sesuai
                    fetchTopics(), // Ganti dengan fungsi API fetch sesuai
                ]);
                setData({ questions, users, topics });
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};
