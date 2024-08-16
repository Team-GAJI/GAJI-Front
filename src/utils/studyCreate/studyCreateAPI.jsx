import { api } from "../API";

export const studyCreateAPI = async (data) => {
    try {
        const response = await api.post(`/api/study-recruit-posts`, data);
        console.log(response)

    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};
