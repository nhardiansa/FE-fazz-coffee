import Http from "@/core/services/http/api";
import { Credential, Token } from "../entities";
import { AuthService } from "../useCases/authUseCase";

class AuthHTTP extends Http {
  async login(credential: Credential) {
    return await this.get("todos/1", { ...credential });
  }
}

export class AuthServiceImpl implements AuthService {
  async loginWithCredential(params: Credential): Promise<Token> {
    const http = new AuthHTTP();

    const result = await http.login(params);

    console.log(result, "asdsad");

    return Promise.resolve({
      access: "asdasdads",
      refresh: "asdasd",
    });
  }
}
