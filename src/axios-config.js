import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',  // Adjust if your API endpoint differs
});

export default axiosInstance;