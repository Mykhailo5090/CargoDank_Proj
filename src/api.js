import axios from 'axios';

// Make sure the API URL matches your backend server URL (e.g., http://localhost:5000/api)
const API_URL = 'http://localhost:3000/api';

export const getAds = async () => {
  try {
    const response = await axios.get(`${API_URL}/ads`);
    return response.data;
  } catch (error) {
    console.error('Error fetching ads:', error);
    throw error;
  }
};
