// src/hooks/useUsers.js
import { useState, useEffect } from 'react';
import { fetchUsers } from '../Services/leaderboardService';

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchUsers();
        const sortedUsers = data.sort((a, b) => b.points - a.points);
        setUsers(sortedUsers);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { users, loading, error };
};

export default useUsers;
