import { api } from "../API";

export const studyInfoAPI = async (roomId) => {
    try {
        const response = await api.get(`/api/studyRooms/home/${roomId}`);
        console.log(response)

    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};
