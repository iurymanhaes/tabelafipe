import { api } from "./axios";

export const fetchData = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await api.get<T>(url);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return null;
  }
};
