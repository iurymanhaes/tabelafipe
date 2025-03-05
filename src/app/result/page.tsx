"use client";

import { useEffect, useState, useCallback } from "react";
import { Typography, Box, CircularProgress, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

import { useFipe } from "@/hooks/useFipe";
import { useFipeService } from "@/services/useFipeService";


export default function ResultPage() {
  const { getFipePrice } = useFipeService();
  const { state } = useFipe();
  
  const { brand, model, year } = state;
  const router = useRouter();


  const [price, setPrice] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  

  const fetchPrice = useCallback(async () => {
    setLoading(true);
    if (!brand.codigo || !model.codigo || !year.codigo) {
      router.push("/");
      return;
    }

    try {
      const data = await getFipePrice(brand.codigo, model.codigo, year.codigo);
      setPrice(data);
    } catch (error) {
      console.error("Erro ao buscar preço:", error);
      setPrice("Erro ao carregar preço");
    } finally {
      setLoading(false);
    }
  }, [brand, model, year]);

  useEffect(() => {
    fetchPrice();
  }, [fetchPrice]);

  return (
    <Stack alignItems={"center"}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bgcolor="#dcf5f2"
        width={"100%"}
        pt={8}
        pb={4}
      >
        {loading ? (
          <>
            <CircularProgress color="primary" />
            <Typography variant="h5" sx={{ marginTop: 2 }}>
              Carregando preço...
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h5" fontWeight="bold" color="#333">
              Tabela Fipe: Preço {brand.nome} {model.nome} {year.nome}
            </Typography>
            <Box
              sx={{
                backgroundColor: "#00a38c",
                color: "white",
                padding: "10px",
                borderRadius: "32px",
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              {price}
            </Box>
            <Typography
              variant="body2"
              sx={{ marginTop: "10px" }}
              color="textDisabled"
            >
              Este é o preço de compra do veículo
            </Typography>
          </>
        )}
      </Box>
    </Stack>
  );
}
