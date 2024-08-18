import { api } from "../API";

export const studyManageDateAPI = async (roomId, Weeks, userId) => {
    try {
        const response = await api.post(`studyRooms/event/${roomId}/${Weeks}/${userId}/period`);
        console.log(response)

    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};
