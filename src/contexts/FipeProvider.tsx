"use client";
import { createContext, useReducer, ReactNode } from "react";
import { FipeAction } from "./FipeActions";
import { fipeReducer, initialState } from "./FipeReducer";
import { IFipeState } from "@/types/fipeTypes";

interface FipeContextProps {
  state: IFipeState;
  dispatch: React.Dispatch<FipeAction>;
}

export const FipeContext = createContext<FipeContextProps | undefined>(undefined);

export function FipeProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(fipeReducer, initialState);

  return (
    <FipeContext.Provider value={{ state, dispatch }}>
      {children}
    </FipeContext.Provider>
  );
}
