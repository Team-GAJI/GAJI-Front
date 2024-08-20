import { api } from "../API";

export const TaskAPI = async (roomId, week, tasks) => {
    try {
        const response = await api.post(`/api/study-rooms/assignments/${roomId}/${week}`, { tasks });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};
