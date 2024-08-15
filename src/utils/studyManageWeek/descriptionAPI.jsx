import { api } from "../API";

export const descriptionAPI = async (roomId, Weeks) => {
    try {
        const response = await api.post(`/studyRooms/event/${roomId}/${Weeks}/description`);
        console.log(response)

    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};
