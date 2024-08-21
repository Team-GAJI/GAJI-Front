import { api } from "../API";
// 스터디 기한 API
export const periodAPI = async (roomId, weeks) => {
    try {
        console.log(roomId);
        const response = await api.post(`/api/study-rooms/event/${roomId}/${weeks}/period`);
        console.log(response.data);
        return response.data.result;
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};
