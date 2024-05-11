import { create } from "zustand";
import { UtilsState } from "../utils/types";

export const useStoreCommuns = create<UtilsState>((set) => ({
  utilsSelected: false,
  perfilSelected: false,
  toggleUtilsSelected: (value: boolean) =>
    set({ utilsSelected: value }),
  togglePerfilSelected: (value: boolean) =>
    set({ perfilSelected: value }),
}));
