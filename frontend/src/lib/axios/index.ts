import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { API_BASE_URL, API_REQUEST_TIMEOUT } from 'constpack';

class Client {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: API_BASE_URL,
      timeout: API_REQUEST_TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
      },
      withCredentials: true,
    });
  }

  get<T>(path: string, payload?: any) {
    return this.axios
      .get<T>(path, payload)
      .then((response: AxiosResponse) => response);
  }

  post(path: string, payload: any) {
    const options = {
      headers: {
        'Content-Type':
          payload instanceof FormData
            ? 'multipart/form-data'
            : 'application/json',
      },
    };

    return this.axios
      .post(path, payload, options)
      .then((response: AxiosResponse) => response);
  }

  put(path: string, payload: any) {
    return this.axios
      .put(path, payload)
      .then((result: AxiosResponse) => result);
  }

  delete(path: string, payload?: any) {
    return this.axios
      .delete(path, payload)
      .then((result: AxiosResponse) => result);
  }
}

const client = new Client();

export default client;
