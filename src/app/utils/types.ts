export interface UtilsState {
  utilsSelected: boolean;
  perfilSelected: boolean;

  toggleUtilsSelected: (value: boolean) => void;
  togglePerfilSelected: (value: boolean) => void;
}

export interface ModalStates {
  viewModalAllUser: boolean;
  viewModalViewUtils: boolean;

  toggleModalAllUser: (value: boolean) => void;
  toggleModalViewUtils: (value: boolean) => void;
}
