import { api } from "../API";
// 스터디 과제 등록 API
export const assignmentsAPI = async (roomId, weeks) => {
    try {
        console.log(roomId);
        const response = await api.post(`study-rooms/assignments/${roomId}/${weeks}`);
        console.log(response.data);
        return response.data.result;
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};
