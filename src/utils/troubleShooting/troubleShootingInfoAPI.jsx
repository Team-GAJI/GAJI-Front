import { api } from "../API";

// 스터디룸 트러블슈팅 게시글 등록
export const registerTroubleShootingAPI = async (roomId, data) => {
  try {
    const response = await api.post(`study-rooms/trouble/${roomId}`, data);
    console.log("성공:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "API 요청 중 오류 발생:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// 트러블 슈팅 게시글 무한 스크롤 방식으로 조회
export const fetchTroubleShootingPosts = async (
  boardId,
  lastPostId = null,
  size = 10
) => {
  try {
    const params = {
      size: size,
    };

    if (lastPostId) {
      params.lastPostId = lastPostId;
    }

    const response = await api.get(`study-rooms/${boardId}/trouble-posts`, {
      //boardId -> roomId?
      params,
    });
    return response.data.result;
  } catch (error) {
    console.error(
      "API 요청 중 오류 발생:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// 스터디룸 트러블슈팅 게시물 북마크 추가
export const addBookmark = async (roomId, postId) => {
  try {
    const response = await api.post(
      `study-rooms/trouble/${roomId}/posts/${postId}/bookmark-add`
    );
    console.log("북마크 추가 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "북마크 API 요청 중 오류 발생:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// 스터디룸 트러블슈팅 게시물 북마크 제거
export const removeBookmark = async (roomId, postId) => {
  try {
    const response = await api.delete(
      `study-rooms/trouble/${roomId}/posts/${postId}/bookmark-remove`
    );
    console.log("북마크 제거 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "북마크 제거 API 요청 중 오류 발생:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// 스터디룸 트러블슈팅 게시물 좋아요 추가
export const addLike = async (roomId, postId) => {
  try {
    const response = await api.post(
      `study-rooms/trouble/${roomId}/posts/${postId}/like`
    );
    console.log("좋아요 추가 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "좋아요 API 요청 중 오류 발생:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// 스터디룸 트러블슈팅 게시물 좋아요 취소
export const removeLike = async (roomId, postId) => {
  try {
    const response = await api.delete(
      `study-rooms/trouble/${roomId}/posts/${postId}/unlike`
    );
    console.log("좋아요 취소 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "좋아요 취소 API 요청 중 오류 발생:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// 트러블슈팅 게시물에 댓글 등록
export const addComment = async (troublePostId, commentData) => {
  try {
    const response = await api.post(
      `study-rooms/trouble/${troublePostId}/comments`,
      commentData
    );
    console.log("댓글 등록 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "댓글 등록 API 요청 중 오류 발생:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// 트러블슈팅 댓글에 답글 작성
export const addReply = async (commentId, replyData) => {
  try {
    const response = await api.post(
      `study-rooms/trouble/comments/${commentId}/replies`,
      replyData
    );
    console.log("답글 작성 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "답글 작성 API 요청 중 오류 발생:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// 트러블슈팅 댓글 삭제
export const deleteComment = async (commentId) => {
  try {
    const response = await api.delete(
      `study-rooms/trouble/comments/${commentId}`
    );
    console.log("댓글 삭제 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "댓글 삭제 API 요청 중 오류 발생:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
