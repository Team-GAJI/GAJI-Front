import { apiJson } from "../API";

export const ongoingStudyListAPI = async (userId) => {
    try {
        const response = await apiJson.get(`/api/users/rooms/${userId}`, {
            params: {
                type: 'ongoing' // 'type' 파라미터를 쿼리 스트링으로 전달
            }
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};

export const endedStudyListAPI = async (userId) => {
    try {
        const response = await apiJson.get(`/api/users/rooms/${userId}`, {
            params: {
                type: 'ended' // 'type' 파라미터를 쿼리 스트링으로 전달 (예상: 종료된 스터디 목록을 가져오기 위해)
            }
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};