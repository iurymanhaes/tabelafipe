import { useCallback, useState, useMemo } from "react";
import { fetchData } from "@/utils/fetchData";

export const useFipeService = () => {
  const [loading, setLoading] = useState(false);

  const getFipePrice = useCallback(
    async (brandCode: string, modelCode: string, yearCode: string) => {
      setLoading(true);
      try {
        const data = await fetchData<{ Valor: string }>(
          `/marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`
        );
        return data?.Valor || "Preço não encontrado";
      } catch (error) {
        console.error("Erro ao buscar preço:", error);
        return "Erro ao carregar preço";
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return useMemo(() => ({ getFipePrice, loading }), [loading, getFipePrice]);
};
