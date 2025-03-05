import useSWR from "swr";
import { fetchData } from "@/utils/fetchData";
import { IOption } from "@/types/fipeTypes";

const fetcher = async <T>(url: string): Promise<T> => {
  const response = await fetchData<T>(url);
  if (!response) throw new Error("Erro ao buscar dados da API");
  return response;
};

export const useBrands = () => {
  const { data, error, isValidating } = useSWR(
    "/marcas",
    fetcher<IOption[]>
  );
  return {
    brands: data || [],
    isLoading: !data && !error,
    error,
    isValidating,
  };
};

export const useModels = (brandCode?: string) => {
  const { data, error, isValidating } = useSWR(
    brandCode ? `/marcas/${brandCode}/modelos` : null,
    fetcher<{ modelos: IOption[] }>
  );

  return {
    models: data?.modelos || [],
    isLoading: !data && !error,
    error,
    isValidating,
  };
};

export const useYears = (brandCode?: string, modelCode?: string) => {
  const { data, error, isValidating } = useSWR(
    brandCode && modelCode
      ? `/marcas/${brandCode}/modelos/${modelCode}/anos`
      : null,
    fetcher<IOption[]>
  );
  return {
    years: data || [],
    isLoading: !data && !error,
    error,
    isValidating,
  };
};
