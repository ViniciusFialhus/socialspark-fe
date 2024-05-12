import { create } from "zustand";
import { UtilsState, ModalStates } from "../utils/types";

export const useStoreCommuns = create<UtilsState>((set) => ({
  utilsSelected: false,
  perfilSelected: false,
  toggleUtilsSelected: (value: boolean) => set({ utilsSelected: value }),
  togglePerfilSelected: (value: boolean) => set({ perfilSelected: value }),
}));

export const useStoreModal = create<ModalStates>((set) => ({
  viewModalAllUser: false,
  viewModalViewUtils: false,
  toggleModalAllUser: (value: boolean) => set({ viewModalAllUser: value }),
  toggleModalViewUtils: (value: boolean) => set({ viewModalViewUtils: value }),
}));
