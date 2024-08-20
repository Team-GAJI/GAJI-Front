import { api } from "../API";

export const DateAPI = async (roomId, Weeks) => {
    try {
        console.log(roomId)
        const response = await api.post(`study-rooms/event/&{roomId}/&{weeks}/period`);
        console.log(response.data);
        return response.data.result;

    }  catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};
