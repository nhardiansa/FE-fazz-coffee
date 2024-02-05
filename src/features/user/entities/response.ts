import { BaseResponse } from "@/core/response/base";
import { User } from ".";

export interface UserResponse extends BaseResponse {
  result?: User;
}
