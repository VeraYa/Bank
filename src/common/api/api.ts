import axios, { AxiosRequestConfig } from "axios";

export type ApiPropsT = {
  method: "get" | "post";
  url: string;
  config?: AxiosRequestConfig;
  error_message?: string;
};

export const api = async ({
  method,
  url,
  config,
  error_message,
}: ApiPropsT) => {
  try {
    const response =
      method === "get" ? await axios.get(url) : await axios.post(url, config);
    return response;
  } catch (error) {
    throw new Error(`${error_message}. Error: ${error}`);
  }
};
