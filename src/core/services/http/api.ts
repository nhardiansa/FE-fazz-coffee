import axios, { AxiosInstance, AxiosHeaders } from "axios";

class Http {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
    });
  }

  includeFomData(headers?: AxiosHeaders, isMultiPart = false) {
    return {
      ...headers,
      ...(isMultiPart ? { "Content-Type": "multipart/form-data" } : null),
    };
  }

  async get(url: string, params?: object, headers?: AxiosHeaders) {
    return await this.axiosInstance.get(url, { headers, params });
  }

  async post(
    url: string,
    body: object | FormData,
    headers?: AxiosHeaders,
    isMultiPart = false
  ) {
    return await this.axiosInstance.post(url, body, {
      headers: this.includeFomData(headers, isMultiPart),
    });
  }

  async put(
    url: string,
    body: object | FormData,
    headers?: AxiosHeaders,
    isMultiPart = false
  ) {
    return await this.axiosInstance.put(url, body, {
      headers: this.includeFomData(headers, isMultiPart),
    });
  }

  async patch(
    url: string,
    body: object | FormData,
    headers?: AxiosHeaders,
    isMultiPart = false
  ) {
    return await this.axiosInstance.patch(url, body, {
      headers: this.includeFomData(headers, isMultiPart),
    });
  }

  async delete(url: string, headers?: AxiosHeaders) {
    return await this.axiosInstance.delete(url, { headers });
  }
}

export default Http;
