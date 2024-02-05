import { Credential, Token } from "../entities";

export interface AuthService {
  loginWithCredential: (credential: Credential) => Promise<Token>;
  // register: () => Promise<string>
}

export class AuthUseCase {
  authService!: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  async login(params: Credential): Promise<Token> {
    return this.authService.loginWithCredential(params);
  }
}
