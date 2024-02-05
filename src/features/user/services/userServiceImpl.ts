import Http from "@/core/services/http/api";
import { UserService } from "../useCases/userUseCase";
import { User } from "../entities";
import { BaseResponse } from "@/core/response/base";

class UserHTTP extends Http {
  async register(data: User) {
    return await this.get("todos/1", { ...data });
  }
}

export class UserServiceImpl implements UserService {
  async register(params: User): Promise<BaseResponse> {
    return Promise.resolve({
      success: true,
      message: "Register success",
    });
  }
}
