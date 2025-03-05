import React from "react";
import { Button } from "@mui/material";

interface CustomButtonProps {
  text?: string;
  bgcolor?: string;
  disabled?: boolean;
  maxWidth?: number;
  onClick?: () => void;
}

export default function CustomButton({
  text = "Consultar preço",
  bgcolor = "#5d00bf",
  disabled = false,
  maxWidth = 200,
  onClick,
}: CustomButtonProps) {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: bgcolor,
        textTransform: "none",
        maxWidth: maxWidth,
        margin: "0 auto",
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
