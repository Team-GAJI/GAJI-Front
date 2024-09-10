import { api } from '../../../app/api';

export const studyInfoAPI = async (roomId) => {
    try {
        const response = await api.get(`study-rooms/home/${roomId}`);
        console.log(response);
        return response.data.result;
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error;
    }
};
