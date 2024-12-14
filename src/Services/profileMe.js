import axios from 'axios';



Base_url =  "https://cakrawidia-4ae06d46343e.herokuapp.com/api"

export const fetchProfile = async () => {
    try {
        const response = await axios.get(`${Base_url}/me`);
        if (response.data) {
            return response.data;
        }
        throw new Error("No data received");
    } catch (error) {
        console.error("Error fetching profile:", error);
        throw new Error(error.response?.data?.message || error.message);
    }
};
