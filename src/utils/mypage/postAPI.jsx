import { api } from "../API";

export const postAPI = async (userId, type, cursorDate, size = 10) => {
    try {
        const response = await api.get(`/users/posts/${userId}`, {
            params: {
                type, // '질문하기', '프로젝트 모집', '블로그', '스터디 모집'
                cursorDate, // 마지막으로 로드한 게시글의 날짜, 무한 스크롤 구현에 사용
                size // 가져올 게시글의 수
            }
        });
        console.log(response);
        return response.data.result;
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error;
    }
};
