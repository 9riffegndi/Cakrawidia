import { useState, useEffect } from "react";

export const useFetchMe = (authToken) => {
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!authToken) return;

        const fetchProfile = async () => {
            setIsLoading(true);
            try {
                const response = await fetch("https://cakrawidia-4ae06d46343e.herokuapp.com/api/me", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${authToken}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch profile");
                }

                const data = await response.json();
                setUser(data.user);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProfile();
    }, [authToken]);

    return { user, isLoading, error };
};
