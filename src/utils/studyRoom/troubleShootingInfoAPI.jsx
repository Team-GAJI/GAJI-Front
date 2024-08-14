import { api } from "../API";

export const troubleShootingInfoAPI = async (roomId) => {
  try {
    const response = await api.get(`/api/studyRooms/roomPost/${roomId}`);
    console.log(response);
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    throw error;
  }
};
