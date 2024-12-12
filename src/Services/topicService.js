// src/Services/topicsService.js
import axios from 'axios';

const BASE_URL = 'https://cakrawidia-4ae06d46343e.herokuapp.com/api';

export const fetchTopics = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/topics`);
    if (response.data && Array.isArray(response.data)) {
      return response.data;
    }
    throw new Error("Invalid data format received");
  } catch (error) {
    console.error("Error fetching topics:", error);
    throw new Error(error.response?.data?.message || error.message || "Failed to fetch topics");
  }
};
