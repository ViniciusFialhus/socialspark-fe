import { create } from "zustand";
import { UtilsState } from "../utils/types";

export const useStoreCommuns = create<UtilsState>((set) => ({
  utilsSelected: false,
  toggleUtilsSelected: (value: boolean) =>
    set({ utilsSelected: value }),
}));
