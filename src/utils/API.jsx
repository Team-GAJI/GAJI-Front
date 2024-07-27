import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_LOCAL_URL,
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
    },
});

const axiosInstanceForm = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_LOCAL_URL,
    timeout: 30000,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

const axiosInstanceLong = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_LOCAL_URL,
    timeout: 200000,
    headers: {
        "Content-Type": "application/json",
    },
});

export { axiosInstance, axiosInstanceForm, axiosInstanceLong };
