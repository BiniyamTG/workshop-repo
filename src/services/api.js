import axios from 'axios';

const api = axios.create({
    baseURL: 'http://your-backend-url/api', // Replace with your backend URL
});

export default api;
