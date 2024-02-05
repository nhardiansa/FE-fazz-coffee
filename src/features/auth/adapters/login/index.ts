import { create } from "zustand";
import { Credential, Token } from "../../entities";
import { loginAction } from "./actions/loginAction";

export interface LoginState {
  credential: Credential;
  token: Token;
  isLoading: boolean;
  success: boolean;
  errorMessage: string;
  login: () => Promise<void>;
  setToken: (token: Token) => void;
  setErrorMessage: (errorMessage: string) => void;
  setLoading: (loadingState: boolean) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

const useLoginAdapter = create<LoginState>((set, get) => ({
  success: false,
  isLoading: false,
  errorMessage: "",
  token: {
    access: "",
    refresh: "",
  },
  credential: {
    email: "",
    password: "",
  },
  login: async () => await loginAction(get),
  setToken: (token) => {
    set((state) => ({ ...state, token: token }));
  },
  setErrorMessage: (message) => {
    set((state) => ({ ...state, errorMessage: message }));
  },
  setLoading: (loadingState) => {
    set((state) => ({ ...state, isLoading: loadingState }));
  },
  setEmail: (email) => {
    set((state) => ({
      ...state,
      credential: {
        ...state.credential,
        email: email,
      },
    }));
  },
  setPassword: (password) => {
    set((state) => ({
      ...state,
      credential: {
        ...state.credential,
        password: password,
      },
    }));
  },
}));

export default useLoginAdapter;
