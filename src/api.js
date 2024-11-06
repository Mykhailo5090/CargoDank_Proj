import axios from 'axios';

// Make sure the API URL matches your backend server URL (e.g., http://localhost:5000/api)
const API_URL = 'http://localhost:3000/api';

// Fetch ads from the server
export const getAds = async () => {
  try {
    const response = await axios.get(`${API_URL}/ads`);
    return response.data;
  } catch (error) {
    console.error('Error fetching ads:', error);
    throw error;
  }
};

// Add cargo to the server
export const addCargo = async (cargoDetails) => {
  try {
    const formData = new FormData();
    for (const key in cargoDetails) {
      formData.append(key, cargoDetails[key]);
    }

    const response = await axios.post(`${API_URL}/cargo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error adding cargo:', error);
    throw error;
  }
};
