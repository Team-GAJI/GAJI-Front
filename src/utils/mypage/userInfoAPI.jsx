import { apiJson } from "../API";

export const userInfoAPI = async (userId) => {
    try {
        const response = await apiJson.get(`users/${userId}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};
