import Http from "@/core/services/http/api";
import { Credential, Token } from "../entities";
import { AuthService } from "../useCases/authUseCase";

class AuthHTTP extends Http {
  async login(credential: Credential) {
    return await this.post("auth/login", { ...credential });
  }
}

export class AuthServiceImpl implements AuthService {
  async loginWithCredential(credential: Credential): Promise<Token> {
    const http = new AuthHTTP();
    const { data } = await http.login(credential);

    return {
      access: data.result.access,
      refresh: data.result.refresh,
    };
  }
}
