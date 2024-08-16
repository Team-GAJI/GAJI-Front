import axios from "axios";

// localStorage에서 accessToken 가져오기
export const getAccessToken = () => {
    return localStorage.getItem('accessToken');
}

// localStorage에서 refreshToken 가져오기 (필요시 사용 가능)
export const getRefreshToken = () => {
    return localStorage.getItem('refreshToken');
}

// API 요청을 위한 axios 인스턴스 생성
export const api = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_SERVER_URL_API,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, // 쿠키 포함
});

// 요청 인터셉터를 사용해 매 요청마다 Authorization 헤더에 토큰 추가
api.interceptors.request.use(config => {
    const token = getAccessToken();
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    } else {
        console.error("Access token이 없습니다.");
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// 필요 시, 기본적인 API 요청을 위한 인스턴스
export const apiBase = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_SERVER_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// 특정 상황에서 토큰을 사용하는 API 요청을 위한 함수
export const apiToken = () => {
    const token = getAccessToken();
    if (!token) {
        throw new Error('Access token이 없습니다.');
    }
    return axios.create({
        baseURL: import.meta.env.VITE_REACT_APP_SERVER_URL_API,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        withCredentials: true,
    });
};