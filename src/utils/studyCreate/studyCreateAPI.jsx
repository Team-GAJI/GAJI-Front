import { api } from "../API";

export const studyCreateAPI = async (data) => {
    try {
<<<<<<< HEAD
        const response = await api.post(`study-recruit-posts`, data);
        console.log(response)
=======
        console.log(data)
        const response = await api.post(`study-recruit-posts`,data);
        console.log(response.data)
        
        return response.data
>>>>>>> 8629430981404547dacc9035723b09fdfd0dfc42

    } catch (error) {
        console.error('API 요청 중 오류 발생:', error);
        throw error; 
    }
};
