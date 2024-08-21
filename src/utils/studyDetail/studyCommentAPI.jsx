import { api } from "../API";

export const studyWriteCommentAPI = async (roomId, body) => {
    try {
        const response = await api.post(`study-recruit-posts/${roomId}/comments`, body);
        console.log(response)
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};

export const studyViewCommentAPI = async (roomId) => {
    try {
        console.log(roomId)
        const response = await api.get(`study-recruit-posts/${roomId}/comments`);
        console.log(response.data);
        return response.data.result.commentList;
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};
