import { AuthServiceImpl } from "@/features/auth/services/authServiceImpl";
import { LoginState } from "..";
import { AuthUseCase } from "@/features/auth/useCases/authUseCase";

export const loginAction = async (get: () => LoginState) => {
  const service = new AuthServiceImpl();
  const interactor = new AuthUseCase(service);
  get().setLoading(true);

  try {
    const token = await interactor.login(get().credential);
    get().setToken(token);
  } catch (error) {
    get().setErrorMessage("Failed to login");
  } finally {
    get().setLoading(false);
  }
};
