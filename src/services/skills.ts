import { api } from "./api";

export const skillsRequest = async () => {
    try {
        const response = await api.get('/auth/getStudy');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("erro na requisição:", error);
        throw error;
    }
   
}