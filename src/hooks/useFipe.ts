import { useContext } from "react";
import { FipeContext } from "@/contexts/FipeProvider";

export const useFipe = () => {
  const context = useContext(FipeContext);
  if (!context) throw new Error("useFipe must be used within a FipeProvider");
  return context;
};
