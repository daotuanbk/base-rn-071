import Axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import storage from '@react-native-async-storage/async-storage';
import { store } from '@app/store';
import _ from 'lodash';
const axios = Axios.create();
// Add a request interceptor
axios.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const userToken = await storage.getItem('userToken');
    if (userToken) {
      config.headers.Authorization = 'Bearer ' + userToken;
    }
    return config;
  },
  (error: AxiosError) => {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    response.data = _.mapKeys(response?.data, (_value: any, key: string) =>
      _.camelCase(key),
    );
    return response;
  },
  async (error: AxiosError) => {
    // const response = error?.response;

    // Find request error
    switch (error?.response?.status) {
      case 401: {
        if (store.getState()?.authModel?.isSignedIn) {
          removeCommonAuthorizationToken();
        }
        break;
      }
      case 400: {
        break;
      }
      case 502:
        break;
      case 413:
        break;
      default:
        break;
    }
    return Promise.reject(error);
  },
);

export default axios;

export async function setCommonAuthorizationToken() {
  const userToken = await storage.getItem('userToken');
  if (userToken) {
    axios.defaults.headers.common.Authorization = 'Bearer ' + userToken;
  }
}

export async function removeCommonAuthorizationToken() {
  delete axios.defaults.headers.common.Authorization;
  await storage.removeItem('userToken');
}
