"use client";


import { Container, Typography, Card, CardContent, Stack } from "@mui/material";
import { CustomAutocomplete, CustomButton } from "@/components";

import Link from "next/link";
import { PATH } from "@/routes/path";

import { useFipe } from "@/hooks/useFipe";
import { SET_BRAND, SET_MODEL, SET_YEAR } from "@/contexts/FipeActions";
import { useBrands, useModels, useYears } from "@/hooks/useSwr";


export default function Home() {
  const { state, dispatch } = useFipe();
  const { brand, model, year } = state;

  const { brands } = useBrands();
  const { models } = useModels(brand.codigo);
  const { years } = useYears(brand.codigo, model.codigo);

  return (
    <Stack sx={{ bgcolor: "#F9F6FC" }}>
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" align="center" color="#333">
          Tabela Fipe
        </Typography>
        <Typography variant="h5" align="center" color="#333">
          Consulte o valor de um veículo de forma gratuita
        </Typography>
        <Card
          sx={{
            width: { xs: "90%", sm: 500 },
            padding: 2,
            boxShadow: 3,
            mt: 2,
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignContent: "center",
            }}
          >
            <CustomAutocomplete
              label="Marca"
              value={brand.codigo}
              options={brands}
              onChange={(selectedBrand) => {
                dispatch({
                  type: SET_BRAND,
                  payload: selectedBrand || { codigo: "", nome: "" },
                });
                dispatch({
                  type: SET_MODEL,
                  payload: { codigo: "", nome: "" },
                });
                dispatch({
                  type: SET_YEAR,
                  payload: { codigo: "", nome: "" },
                });
              }}
            />
            <CustomAutocomplete
              label="Modelo"
              value={model.codigo}
              options={models}
              onChange={(selectedModel) => {
                dispatch({
                  type: SET_MODEL,
                  payload: selectedModel || { codigo: "", nome: "" },
                });
                dispatch({
                  type: SET_YEAR,
                  payload: { codigo: "", nome: "" },
                });
              }}
            />
            {model.codigo && (
              <CustomAutocomplete
                label="Ano"
                value={year.codigo}
                options={years}
                onChange={(selectedYear) =>
                  dispatch({
                    type: SET_YEAR,
                    payload: selectedYear || { codigo: "", nome: "" },
                  })
                }
              />
            )}
            <Link href={PATH.result} passHref legacyBehavior>
              <CustomButton
                disabled={!brand.codigo || !model.codigo || !year.codigo}
              />
            </Link>
          </CardContent>
        </Card>
      </Container>
    </Stack>
  );
}
