import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
});

api.interceptors.request.use((config) => {
    config.headers = {
        authorization: `Bearer ${localStorage.getItem(
            'accessToken'
        )}`
    };
    return config;
});

export { api };
