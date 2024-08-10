import axios from "axios";

// const BASE_URL = 'https://p-detector-backend-api.onrender.com';
const BASE_URL = 'http://127.0.0.1:8000/'
const accessToken = localStorage.getItem('token')

export default axios.create({
    baseURL: BASE_URL
})

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `Bearer ${accessToken}`
    },
    credentials: true
})