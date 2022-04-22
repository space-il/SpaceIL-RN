export interface GeneralError {
  isVisible: boolean;
  title?: string;
  description?: string;
  btnHandler?: () => void;
}

export interface AppState {
  generalError: GeneralError;
}
