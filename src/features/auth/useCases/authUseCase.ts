import { Credential, Token } from "../entities";
import { BaseResponse } from "@/core/response/base";
import { Either, Left, Right } from "purify-ts";

export interface AuthService {
  loginWithCredential: (credential: Credential) => Promise<Token>;
  // register: () => Promise<string>
}

export class AuthUseCase {
  authService!: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  // async login(params: Credential): Promise<Token> {
  async login(params: Credential): Promise<Either<BaseResponse, Token>> {
    try {
      const result = await this.authService.loginWithCredential(params);
      return Right(result);
    } catch (error: any) {
      console.error("LOGIN ERROR USE CASE", error);
      const data = error.response.data;
      return Left({
        success: false,
        message: data.message || "Failed Login",
      });
    }
  }
}
