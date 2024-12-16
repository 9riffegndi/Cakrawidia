import { useState, useEffect } from "react";
import axios from "axios";

export const useDeleteAcc = (authToken) => {
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!authToken) return;

        const fetchProfile = async () => {
            setIsLoading(true);
            try {
                const response = await axios({
                    url: "https://cakrawidia-4ae06d46343e.herokuapp.com/api/me",
                    method: "DELETE", // Assuming the "DEL" method was a typo
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                        "Content-Type": "application/json",
                    },
                });

                setPassword(response.data.user);
            } catch (err) {
                setError(err.response?.data?.message || err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProfile();
    }, [authToken]);

    return { password, isLoading, error };
};
