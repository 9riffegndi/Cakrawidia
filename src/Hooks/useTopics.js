// src/Hooks/useTopics.js
import { useState, useEffect } from 'react';
import { fetchTopics } from '../Services/topicService';

// Custom hook untuk mengambil data topik
export const useTopics = () => {
  const [topics, setTopics] = useState([]);  // Default state sebagai array kosong
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Pastikan status loading benar-benar di-reset
      setError("");  // Reset error sebelum fetching data
      try {
        const data = await fetchTopics();
        if (data && Array.isArray(data)) {
          setTopics(data); // Pastikan hanya set jika format valid
        } else {
          throw new Error("Unexpected data format");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Pastikan loading false meskipun ada error
      }
    };

    fetchData();
  }, []); 

  return { topics, loading, error };
};
