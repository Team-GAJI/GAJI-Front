import { api } from "../API";

export const ongoingStudyListAPI = async () => {
    try {
        const userId = localStorage.getItem('userId');
        const response = await api.get(`/users/rooms/${userId}`, {
            params: { type: 'ONGOING' }
        });
        console.log(response);
        return response.data.result.roomList;
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};

export const endedStudyListAPI = async () => {
    try {
        const userId = localStorage.getItem('userId');
        const response = await api.get(`/users/rooms/${userId}`, {
            params: { type: 'ENDED' } 
        });
        console.log(response);
        return response.data.result.roomList;
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};
