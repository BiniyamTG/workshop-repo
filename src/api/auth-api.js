import axios from 'axios';

// Backend API base URL
const API_URL = 'http://localhost:7001/api/auth';

// Function to register a user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;  // Success response
  } catch (error) {
    throw error.response ? error.response.data : new Error('Error registering user');
  }
};

// Function to log in a user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;  // Success response, should return a JWT token
  } catch (error) {
    throw error.response ? error.response.data : new Error('Error logging in user');
  }
};
