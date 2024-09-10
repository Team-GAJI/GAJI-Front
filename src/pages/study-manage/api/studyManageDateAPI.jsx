import { api } from "../../../app/api";

export const studyManageDateAPI = async (roomId, Weeks, userId) => {
    try {
        console.log(roomId)
        const response = await api.post(`studyRooms/event/${roomId}/${Weeks}/${userId}/period`);
        console.log(response.data);
        return response.data.result;

    }  catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};
