import axios from 'axios';

import api from './api';

const API_URL = '/api/auth'; // Modify the base URL if necessary

// Register user
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Login user
export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};


export const login = async (credentials) => {
    const response = await api.post('/login', credentials);
    const { token } = response.data; // Assuming your API returns a token
    localStorage.setItem('token', token); // Store token in localStorage
    return response.data; // Return the response data for further use
};

export const register = async (credentials) => {
    const response = await api.post('/register', credentials);
    return response.data; // Return response data
};

export const logout = () => {
    localStorage.removeItem('token'); // Remove token on logout
};

export const isAuthenticated = () => {
    return localStorage.getItem('token') !== null; // Check if token exists
};
