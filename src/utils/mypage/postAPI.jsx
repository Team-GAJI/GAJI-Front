import { api } from "../API";

export const postAPI = async () => {
    try {
        const userId = localStorage.getItem('userId');
        const response = await api.get(`/users/posts/${userId}`);
        console.log(response);
        return response.data.result; 
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error;
    }
};
