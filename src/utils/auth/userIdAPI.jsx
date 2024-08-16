import { api } from "../API";

export const userIdAPI = async () => {
    try {
        const response = await api.put(`users`);
        console.log(response)
        return response
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};
