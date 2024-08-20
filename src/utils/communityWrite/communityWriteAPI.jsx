import { api } from "../API";

export const communityWriteAPI = async (data) => {
    try {
        const response = await api.post(`community-posts`, data);
        console.log(response)
        console.log(response.result)
        return response.result
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};
