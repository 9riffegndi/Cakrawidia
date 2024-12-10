// src/Services/topicsService.js
import axios from 'axios';

const BASE_URL = 'https://cakrawidia-progress-adebf43bf30c.herokuapp.com/api';

export const fetchTopics = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/topics`);
    if (response.data) {
      return response.data;
    }
    throw new Error("No data received");
  } catch (error) {
    console.error("Error fetching Topics:", error);
    throw new Error(error.response?.data?.message || error.message);
  }
};

