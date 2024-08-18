import {  apiJson } from "../API";

export const nickNameAPI = async () => {
    try {
        const userId = localStorage.getItem('userId');
        const response = await apiJson.put(`users/nicknames/${userId}`);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};


