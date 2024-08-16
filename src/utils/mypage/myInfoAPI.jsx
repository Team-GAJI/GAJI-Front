import { api } from "../API";

export const myInfoAPI = async (userId) => {
    try {
        const response = await api.get(`users/${userId}`);
        console.log(response)
        return response
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};
