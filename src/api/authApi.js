import axios from 'axios';

const authApi = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
});

const dataHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers" :"*"
};

authApi.interceptors.request.use((config) => {
    config.headers = {
        ...dataHeaders,
    };
    return config;
});

export { authApi };
