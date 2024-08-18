import { api } from "../API";

export const registerTroubleShootingAPI = async (roomId, title, body) => {
  try {
    const response = await api.post(`study-rooms/trouble/${roomId}`, {
      title,
      body,
    });
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
