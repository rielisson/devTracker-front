import { api } from "./api";


export const loginRequest = async (email: string, senha: string) => {
    try {
        const response = await api.post('/auth/login', { email, senha });
        return response.data;
    } catch (error) {
        console.error("erro na requisição:", error);
        throw error;
    }
   
}

export const createContaRequest = async (name: string, email: string, senha: string) => {
    try {
        const response = await api.post('/auth/signup', { name, email, senha });
        return response;
    } catch (error) {
        console.error("Erro na requisição", error);
        throw error;
    }
}

