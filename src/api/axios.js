import axios from "axios";

// const BASE_URL = 'https://p-detector-backend-api.onrender.com';
const BASE_URL = 'http://127.0.0.1:8000'

export default axios.create({
    baseURL: BASE_URL
})

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'applicaton/json'
        
    },
    credentials: true
})