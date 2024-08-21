import { api2 } from "../API";

export const characterListAPI = async () => {
    try {
        const response = await api2.get(`vote`);
        console.log(response.data);
        return response.data.result;

    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};


export const characterRegisterAPI = async (data) => {
    try {
        const response = await api2.post(`vote`,data);
        console.log(response)
        return response.data
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};


export const characterVoteAPI = async (characterId) => {
    try {
        const response = await api2.get(`vote/${characterId}`);
        console.log(response)
        return response.data
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};
