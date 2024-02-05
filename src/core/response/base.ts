export interface BaseResponse {
  success: boolean;
  message: string;
}

export interface ErrorResponse<E> extends BaseResponse {
  error?: E;
}
