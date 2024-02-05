import { BaseResponse } from "@/core/response/base";
import { User } from "../entities";

export interface UserService {
  register: (params: User) => Promise<BaseResponse>;
}

export class UserUseCase {
  userService!: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async register(params: User): Promise<BaseResponse> {
    return this.userService.register(params);
  }
}
