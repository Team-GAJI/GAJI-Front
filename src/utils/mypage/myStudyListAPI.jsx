import { apiJson } from "../API";

export const myStudyListAPI = async () => {
    try {
        const response = await apiJson.get(`/api/users/rooms`);
        console.log(response)
        return response
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};
