import { IOption } from "@/types/fipeTypes";

export const SET_BRAND = "SET_BRAND";
export const SET_MODEL = "SET_MODEL";
export const SET_YEAR = "SET_YEAR";

export type FipeAction =
  | { type: typeof SET_BRAND; payload: IOption }
  | { type: typeof SET_MODEL; payload: IOption }
  | { type: typeof SET_YEAR; payload: IOption };
