import { api } from '../../../app/api';

// 스터디룸 트러블슈팅 게시글 등록
// export const registerTroubleShootingAPI = async (roomId, data) => {
//     try {
//         const response = await api.post(`study-rooms/trouble/${roomId}`, data);
//         console.log(response);
//         return response.data;
//     } catch {}
// };
export const registerTroubleShootingAPI = async (roomId, data) => {
    try {
        const response = await api.post(`study-rooms/trouble/${roomId}`, data);

        // 응답 전체 데이터 확인
        console.log('Full Response:', response);

        // 응답 데이터에서 result와 troublePostId 확인
        if (!response.data || !response.data.result) {
            console.error('Invalid response structure:', response.data);
            throw new Error('Invalid API response structure');
        }

        if (response.data.result.troublePostId === 0 || response.data.result.troublePostId === null) {
            console.warn('TroublePostId is invalid:', response.data.result.troublePostId);
        }

        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

// 트러블 슈팅 게시글 무한 스크롤 방식으로 조회
export const fetchTroubleShootingPosts = async (roomId, lastPostId, size = 10) => {
    try {
        const params = { size };

        if (lastPostId) {
            params.lastPostId = lastPostId;
        }
        console.log(roomId);
        console.log('Request params:', params);

        const response = await api.get(`/api/study-rooms/${roomId}/trouble/list`, { params });

        // 응답에서 result 배열을 안전하게 추출
        const result = response.data?.result || [];
        console.log('API response data:', result);
        if (Array.isArray(result)) {
            return result;
        } else {
            console.warn('Expected an array but got:', result);
            return [];
        }
    } catch (error) {
        console.error('API 요청 중 오류 발생:', error.response ? error.response.data : error.message);
        throw error;
    }
};

// ID로 트러블슈팅 게시글 가져오기
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
