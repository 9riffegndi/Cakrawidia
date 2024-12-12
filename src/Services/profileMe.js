// src/Services/leaderboardServices.js
import axios from 'axios';

const BASE_URL = 'https://cakrawidia-4ae06d46343e.herokuapp.com/api/';

export const fecthMe  = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/me`);
    if (response.data) {
      return response.data;
    }
    throw new Error("No data received");
  } catch (error) {
    console.error("Error fetching Profle me:", error);
    throw new Error(error.response?.data?.message || error.message);
  }
};

