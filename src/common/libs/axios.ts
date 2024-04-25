import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onRequest = (config: InternalAxiosRequestConfig<any>) => {
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  window.alert(error.message);
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  window.alert(error.message);
  return Promise.reject(error);
};

export function setupAxios(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
