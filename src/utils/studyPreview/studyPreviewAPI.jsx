import { api } from "../API";

export const studyPreviewAPI = async () => {
    try {
        const response = await api.get(`study-recruit-posts/preview`);
        console.log(response.data);
        return response.data.result;

    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};
