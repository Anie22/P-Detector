import axios from "axios";

const BASE_URL = 'https://p-detector-backend-api.onrender.com/';

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