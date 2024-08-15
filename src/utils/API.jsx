import axios from "axios";


// localStorage에서 accessToken 가져오기
export const getAccessToken = () => {
    return localStorage.getItem('accessToken');
}

// localStorage에서 refreshToken 가져오기 (필요시 사용 가능)
export const getRefreshToken = () => {
    return localStorage.getItem('refreshToken');
}

export const api = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_SERVER_URL_API,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6ImFjY2VzcyIsInVzZXJuYW1lIjoibmF2ZXIgWkJLaVl3Sk9GMGkxcUk0aGhWekR1em9MZy12bzhhM0UzYlROUzhsS2Q3VSIsInJvbGUiOiJST0xFX1VTRVIiLCJpYXQiOjE3MjM3MDk2OTYsImV4cCI6MTcyMzcxMDI5Nn0.UpVpLFfczluIFleec8MxQyldWawobbHCVmoMt23OZnY`,  // localStorage에서 가져온 accessToken 사용
        // "Authorization": `Bearer ${getAccessToken()}`,  // localStorage에서 가져온 accessToken 사용
    },
});

export const apiBase = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_SERVER_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const apiToken = () => {
    return axios.create({
        baseURL: import.meta.env.VITE_REACT_APP_SERVER_URL_API,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getAccessToken()}`,  // localStorage에서 가져온 accessToken 사용
        },
    });
};
