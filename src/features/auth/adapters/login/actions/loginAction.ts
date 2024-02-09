import { AuthServiceImpl } from "@/features/auth/services/authServiceImpl";
import { LoginState } from "..";
import { AuthUseCase } from "@/features/auth/useCases/authUseCase";

export const loginAction = async (get: () => LoginState) => {
  const service = new AuthServiceImpl();
  const interactor = new AuthUseCase(service);

  const result = await interactor.login(get().credential);

  get().setStatus({ ...get().status, loading: true, message: "" });

  result
    .ifLeft((error) => {
      get().setStatus({
        ...get().status,
        message: error.message,
        success: false,
      });
    })
    .ifRight((token) => {
      get().setStatus({
        ...get().status,
        message: "Login success",
        success: true,
      });
      get().setToken(token);
    });

  get().setStatus({ ...get().status, loading: false });
};
