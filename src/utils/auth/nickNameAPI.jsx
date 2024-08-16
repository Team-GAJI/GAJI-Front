import { api } from "../API";

export const nickNameAPI = async (userId) => {
    try {
        const response = await api.put(`users/nicknames/${userId}`);
        console.log(response)
        return response
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};


