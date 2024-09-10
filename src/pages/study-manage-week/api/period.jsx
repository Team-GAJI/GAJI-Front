import { api } from '../../../app/api';
// 스터디 기한 API
export const periodAPI = async (roomId, week, periodInfo) => {
    try {
        console.log(roomId, week, periodInfo);
        const response = await api.post(`/api/study-rooms/event/${roomId}/${week}/period`, periodInfo);
        console.log(response.data);
        return response.data.result;
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error;
    }
};
