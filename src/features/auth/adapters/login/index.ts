import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Credential, Token } from "../../entities";
import { loginAction } from "./actions/loginAction";

export interface LoginState {
  credential: Credential;
  token: Token;
  status: {
    loading: boolean;
    success: boolean;
    message: string;
  };
  login: () => Promise<void>;
  setToken: (token: Token) => void;
  setCredential: (credential: Credential) => void;
  setStatus: (status: LoginState["status"]) => void;
  logout: () => void;
}

const useLoginAdapter = create<LoginState>()(
  persist(
    (set, get) => ({
      token: {
        access: "",
        refresh: "",
      },
      credential: {
        email: "",
        password: "",
      },
      status: {
        loading: false,
        message: "",
        success: false,
      },
      login: async () => await loginAction(get),
      setToken(token) {
        set((state) => ({ ...state, token }));
      },
      setCredential(credential) {
        set((state) => ({ ...state, credential }));
      },
      setStatus(status) {
        set((state) => ({ ...state, status }));
      },
      logout() {
        get().setToken({ access: "", refresh: "" });
      },
    }),
    {
      name: "auth-state",
    }
  )
);

export default useLoginAdapter;
