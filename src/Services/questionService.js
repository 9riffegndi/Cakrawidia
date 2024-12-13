// src/Services/questionsService.js
import axios from 'axios';

const BASE_URL = 'https://cakrawidia-4ae06d46343e.herokuapp.com/api';

export const fetchQuestions = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/questions?limit=5`);
    if (response.data) {
      return response.data;
    }
    throw new Error("No data received");
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw new Error(error.response?.data?.message || error.message);
  }
};

