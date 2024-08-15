import { api } from "../API";

export const registerTroubleShooting = async (roomId, title, body) => {
  try {
    const response = await api.post(`/api/study-rooms/assignments/${roomId}`, {
      title: title,
      body: body,
    });
    console.log("성공:", response.data);
    return response.data;
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    throw error;
  }
};
