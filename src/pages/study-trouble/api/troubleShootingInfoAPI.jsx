import { api } from '../../../app/api';

// 스터디룸 트러블슈팅 게시글 등록
export const registerTroubleShootingAPI = async (roomId, data) => {
    try {
        const response = await api.post(`study-rooms/trouble/${roomId}`, data);
        console.log(response);
        return response.data;
    } catch {}
};

// 트러블 슈팅 게시글 무한 스크롤 방식으로 조회
export const fetchTroubleShootingPosts = async (roomId, lastPostId = null, size = 10) => {
    try {
        // Query parameters 설정
        const params = { size };

        if (lastPostId) {
            params.lastPostId = lastPostId;
        }

        // API 요청
        const response = await api.get(`study-rooms/${roomId}/trouble`, {
            params,
        });

        // 응답 데이터 확인을 위해 콘솔 출력 추가
        console.log('API response data:', response.data);

        // result가 존재하고 배열일 경우에만 반환
        const result = response.data.result;
        if (Array.isArray(result)) {
            return result;
        } else {
            // result가 배열이 아니면 빈 배열 반환
            console.warn('Expected an array but got:', result);
            return [];
        }
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// Fetch a single troubleshooting post by its ID
export const fetchTroubleShootingPost = async (postId) => {
    try {
        const response = await api.get(`study-rooms/trouble/detail/${postId}`);
        console.log('Post fetched successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching post:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// 스터디룸 트러블슈팅 게시물 북마크 추가
export const addBookmark = async (roomId, postId) => {
    try {
        const response = await api.post(`study-rooms/trouble/${roomId}/${postId}/bookmark-add`);
        return response.data;
    } catch (error) {
        console.error('북마크 API 요청 중 오류 발생:', error.response ? error.response.data : error.message);
        throw error;
    }
};
// 스터디룸 트러블슈팅 게시물 북마크 제거
export const removeBookmark = async (roomId, postId) => {
    try {
        const response = await api.delete(`study-rooms/trouble/${roomId}/${postId}/bookmark-remove`);
        return response.data;
    } catch (error) {
        console.error('북마크 제거 API 요청 중 오류 발생:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// 스터디룸 트러블슈팅 게시물 좋아요 추가
export const addLike = async (roomId, postId) => {
    try {
        const response = await api.post(`study-rooms/trouble/${roomId}/posts/${postId}/like`);
        return response.data;
    } catch (error) {
        console.error('좋아요 API 요청 중 오류 발생:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// 스터디룸 트러블슈팅 게시물 좋아요 취소
export const removeLike = async (roomId, postId) => {
    try {
        const response = await api.delete(`study-rooms/trouble/${roomId}/posts/${postId}/unlike`);
        return response.data;
    } catch (error) {
        console.error('좋아요 취소 API 요청 중 오류 발생:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// 트러블슈팅 게시물에 댓글 등록
export const addComment = async (troublePostId, commentData) => {
    try {
        const response = await api.post(`study-rooms/trouble/${troublePostId}/comments`, commentData);
        console.log('댓글 등록 성공:', response.data);
        return response.data;
    } catch (error) {
        console.error('댓글 등록 API 요청 중 오류 발생:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// 트러블슈팅 댓글에 답글 작성
export const addReply = async (commentId, replyData) => {
    try {
        const response = await api.post(`study-rooms/trouble/comments/${commentId}/replies`, replyData);
        console.log('답글 작성 성공:', response.data);
        return response.data;
    } catch (error) {
        console.error('답글 작성 API 요청 중 오류 발생:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// 트러블슈팅 댓글 삭제
export const deleteComment = async (commentId) => {
    try {
        const response = await api.delete(`study-rooms/trouble/comments/${commentId}`);
        console.log('댓글 삭제 성공:', response.data);
        return response.data;
    } catch (error) {
        console.error('댓글 삭제 API 요청 중 오류 발생:', error.response ? error.response.data : error.message);
        throw error;
    }
};
