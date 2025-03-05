import { FipeAction, SET_BRAND, SET_MODEL, SET_YEAR } from "./FipeActions";
import { IFipeState, IOption } from "@/types/fipeTypes";


export const initialState: IFipeState = {
  brand: { codigo: "", nome: "" },
  model: { codigo: "", nome: "" },
  year: { codigo: "", nome: "" },
};

export function fipeReducer(state: IFipeState, action: FipeAction): IFipeState {
  switch (action.type) {
    case SET_BRAND:
      return { ...state, brand: action.payload, model: initialState.model, year: initialState.year };
    case SET_MODEL:
      return { ...state, model: action.payload, year: initialState.year };
    case SET_YEAR:
      return { ...state, year: action.payload };
    default:
      return state;
  }
}
