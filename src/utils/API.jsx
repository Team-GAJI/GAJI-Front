import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_SERVER_URL_API,
    headers: {
        "Content-Type": "application/json",
    },
});

export const apiBase = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_SERVER_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const apiToken  = (token) => {
    return axios.create({
        baseURL: import.meta.env.VITE_REACT_APP_SERVER_URL_API,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,  // Bearer 토큰 사용
        },
    });
};
